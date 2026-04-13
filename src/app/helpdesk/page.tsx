import { redirect } from "next/navigation";
import { getHelpdeskSession } from "@/lib/helpdeskSession";

export default async function HelpdeskPage() {
  const session = await getHelpdeskSession();
  
  if (!session) {
    redirect("/helpdesk/login");
  } else {
    redirect("/helpdesk/register");
  }
}