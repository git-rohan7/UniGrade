import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from '../AppSidebar';

export default function AppSidebarExample() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar
          role="student"
          userName="John Doe"
          userEmail="john.doe@university.edu"
          onNavigate={(path) => console.log('Navigate to:', path)}
          onLogout={() => console.log('Logout clicked')}
        />
      </div>
    </SidebarProvider>
  );
}
