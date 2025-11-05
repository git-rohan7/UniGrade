import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  CheckSquare,
  Settings,
  LogOut,
  GraduationCap,
  Upload,
  Clock,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Role = "student" | "teacher" | "admin";

interface AppSidebarProps {
  role: Role;
  userName: string;
  userEmail: string;
  onNavigate?: (path: string) => void;
  onLogout?: () => void;
}

const menuItems = {
  student: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/student" },
    { title: "My Subjects", icon: BookOpen, path: "/student/subjects" },
    { title: "Marks & Grades", icon: FileText, path: "/student/marks" },
    { title: "Report Card", icon: GraduationCap, path: "/student/report" },
  ],
  teacher: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/teacher" },
    { title: "My Courses", icon: BookOpen, path: "/teacher/courses" },
    { title: "Upload Marks", icon: Upload, path: "/teacher/upload" },
    { title: "Pending Approvals", icon: Clock, path: "/teacher/pending" },
  ],
  admin: [
    { title: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { title: "Approve Marks", icon: CheckSquare, path: "/admin/approvals" },
    { title: "Manage Users", icon: Users, path: "/admin/users" },
    { title: "Sessions & Subjects", icon: Settings, path: "/admin/settings" },
  ],
};

export default function AppSidebar({
  role,
  userName,
  userEmail,
  onNavigate,
  onLogout,
}: AppSidebarProps) {
  const items = menuItems[role];
  const roleLabels = {
    student: "Student",
    teacher: "Teacher",
    admin: "Administrator",
  };

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Sidebar data-testid="sidebar-main">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-primary" />
          <div>
            <h2 className="font-bold text-lg">University</h2>
            <p className="text-xs text-muted-foreground">Exam System</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <Badge variant="outline" className="text-xs">
              {roleLabels[role]}
            </Badge>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => onNavigate?.(item.path)}
                    data-testid={`nav-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <button className="w-full">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 mb-3">
          <Avatar>
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{userName}</p>
            <p className="text-xs text-muted-foreground truncate">{userEmail}</p>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={onLogout}
          className="w-full"
          data-testid="button-logout"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
