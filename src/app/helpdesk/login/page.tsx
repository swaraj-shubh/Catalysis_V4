"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function HelpdeskLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/helpdesk/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      router.push("/helpdesk/register");
      router.refresh();
    } else {
      setError(data.error || "Login failed");
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.grid} />
      <div style={{ ...styles.blob, top: "10%", left: "15%", background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, transparent 70%)" }} />
      <div style={{ ...styles.blob, bottom: "10%", right: "15%", background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)" }} />

      <div style={styles.card}>
        <div style={styles.logoArea}>
          <div style={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <h1 style={styles.title}>Help Desk Portal</h1>
          <p style={styles.subtitle}>Sign in to register students for Catalysis events</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter helpdesk username"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter helpdesk password"
              required
              style={styles.input}
            />
          </div>

          {error && (
            <div style={styles.error}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {error}
            </div>
          )}

          <button type="submit" disabled={loading} style={styles.button}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0a0e1a 0%, #131830 50%, #0d1117 100%)",
    position: "relative",
    overflow: "hidden",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(34,197,94,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,197,94,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "60px 60px",
    pointerEvents: "none",
  },
  blob: {
    position: "absolute",
    width: 500,
    height: 500,
    borderRadius: "50%",
    filter: "blur(80px)",
    pointerEvents: "none",
  },
  card: {
    position: "relative",
    zIndex: 10,
    width: "100%",
    maxWidth: 420,
    margin: "0 16px",
    background: "rgba(255,255,255,0.04)",
    backdropFilter: "blur(24px)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 24,
    padding: "40px 36px",
    boxShadow: "0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(34,197,94,0.1)",
  },
  logoArea: {
    textAlign: "center",
    marginBottom: 32,
  },
  logoIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    background: "linear-gradient(135deg, rgba(34,197,94,0.3), rgba(16,185,129,0.3))",
    border: "1px solid rgba(34,197,94,0.4)",
    borderRadius: 16,
    color: "#4ade80",
    marginBottom: 16,
  },
  title: {
    color: "#f1f5f9",
    fontSize: 26,
    fontWeight: 700,
    margin: "0 0 8px",
    letterSpacing: "-0.5px",
  },
  subtitle: {
    color: "rgba(148,163,184,0.8)",
    fontSize: 14,
    margin: 0,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  label: {
    color: "#94a3b8",
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.3px",
  },
  input: {
    padding: "12px 16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    color: "#f1f5f9",
    fontSize: 15,
    outline: "none",
    transition: "border-color 0.2s",
    width: "100%",
    boxSizing: "border-box",
  },
  error: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "10px 14px",
    background: "rgba(239,68,68,0.12)",
    border: "1px solid rgba(239,68,68,0.25)",
    borderRadius: 10,
    color: "#fca5a5",
    fontSize: 13,
  },
  button: {
    padding: "13px 24px",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontSize: 15,
    fontWeight: 600,
    transition: "all 0.2s",
    letterSpacing: "0.2px",
    boxShadow: "0 4px 20px rgba(34,197,94,0.35)",
    cursor: "pointer",
  },
};