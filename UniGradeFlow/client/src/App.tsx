import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import StudentDashboard from "@/components/StudentDashboard";
import TeacherDashboard from "@/components/TeacherDashboard";
import AdminDashboard from "@/components/AdminDashboard";
import LoginPage from "@/components/LoginPage";
import ThemeToggle from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

type Role = "student" | "teacher" | "admin";

interface UserSession {
  role: Role;
  name: string;
  email: string;
}

function App() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const { toast } = useToast();

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  // TODO: remove mock user data - this will be replaced with real user data from authentication
  const mockUserData: Record<Role, { name: string; email: string }> = {
    student: {
      name: "John Doe",
      email: "john.doe@university.edu",
    },
    teacher: {
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@university.edu",
    },
    admin: {
      name: "Admin User",
      email: "admin@university.edu",
    },
  };

  const handleLogin = (role: Role, username: string, password: string) => {
    // TODO: remove mock authentication - this will be replaced with real authentication
    const validCredentials: Record<Role, { username: string; password: string }> = {
      student: { username: "student", password: "pass" },
      teacher: { username: "teacher", password: "pass" },
      admin: { username: "admin", password: "pass" },
    };

    const creds = validCredentials[role];
    if (username === creds.username && password === creds.password) {
      setUserSession({
        role,
        name: mockUserData[role].name,
        email: mockUserData[role].email,
      });
      toast({
        title: "Login Successful",
        description: `Welcome back, ${mockUserData[role].name}!`,
      });
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid username or password. Please try again.",
      });
    }
  };

  const handleLogout = () => {
    setUserSession(null);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!userSession) {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LoginPage onLogin={handleLogin} />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider style={style as React.CSSProperties}>
          <div className="flex h-screen w-full">
            <AppSidebar
              role={userSession.role}
              userName={userSession.name}
              userEmail={userSession.email}
              onNavigate={(path) => console.log("Navigate to:", path)}
              onLogout={handleLogout}
            />
            <div className="flex flex-col flex-1 overflow-hidden">
              <header className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background z-10">
                <SidebarTrigger data-testid="button-sidebar-toggle" />
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto p-6">
                {userSession.role === "student" && <StudentDashboard />}
                {userSession.role === "teacher" && <TeacherDashboard />}
                {userSession.role === "admin" && <AdminDashboard />}
              </main>
            </div>
          </div>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
