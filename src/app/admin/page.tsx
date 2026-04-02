import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import DashboardClient from "./DashboardClient";

export default async function AdminDashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0e1a 0%, #131830 60%, #0d1117 100%)",
      display: "flex",
    }}>
      <Sidebar />
      <main style={{
        flex: 1,
        marginLeft: 240,
        padding: "32px 32px 32px",
        minHeight: "100vh",
        overflowX: "hidden",
      }} className="admin-main">
        <style>{`
          @media (max-width: 767px) {
            .admin-main { margin-left: 0 !important; padding: 72px 16px 24px !important; }
          }
        `}</style>
        <DashboardClient />
      </main>
    </div>
  );
}
