import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/layout/admin-sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Check for an active server session
  const session = await getServerSession();

  // 2. If no session exists, boot them to the login screen
  if (!session) {
    redirect("/login");
  }

  // 3. Extract the role from the session token (defaults to VIEWER if undefined)
  const userRole = (session.user as any)?.role || "VIEWER";

  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden font-sans">
      <AdminSidebar role={userRole} />
      
      <main className="flex-1 relative overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <div className="p-8 max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}