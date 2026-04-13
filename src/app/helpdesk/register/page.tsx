import { getHelpdeskSession } from "@/lib/helpdeskSession";
import { redirect } from "next/navigation";
import HelpDeskForm from "@/components/helpdesk/HelpDeskForm";

export default async function HelpdeskRegisterPage() {
  const session = await getHelpdeskSession();
  if (!session) redirect("/helpdesk/login");

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0e1a 0%, #131830 60%, #0d1117 100%)",
      padding: "40px 24px",
    }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <HelpDeskForm />
      </div>
    </div>
  );
}