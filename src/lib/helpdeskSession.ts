import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "helpdesk_session";
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours (full event day)

function getSecretKey() {
  const secret = process.env.HELP_DESK_JWT_SECRET;
  if (!secret) throw new Error("HELP_DESK_JWT_SECRET is not defined in environment");
  return new TextEncoder().encode(secret);
}

export async function encrypt(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(getSecretKey());
}

export async function decrypt(token: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function createHelpdeskSession(username: string) {
  const expiresAt = new Date(Date.now() + SESSION_DURATION);
  const token = await encrypt({ username, role: "helpdesk", expiresAt: expiresAt.toISOString() });
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteHelpdeskSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getHelpdeskSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return decrypt(token);
}