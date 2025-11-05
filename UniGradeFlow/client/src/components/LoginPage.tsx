import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GraduationCap } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

type Role = "student" | "teacher" | "admin";

interface LoginPageProps {
  onLogin: (role: Role, username: string, password: string) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [role, setRole] = useState<Role>("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Please enter both username and password");
      return;
    }

    // TODO: remove mock validation - this will be replaced with real authentication
    onLogin(role, username, password);
  };

  const roleDescriptions = {
    student: "Access your grades, marks, and download report cards",
    teacher: "Upload and manage student marks for your courses",
    admin: "Approve marks, manage users, and oversee the system",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold">University Exam System</h1>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">Select Role</Label>
                <Select value={role} onValueChange={(value) => setRole(value as Role)}>
                  <SelectTrigger id="role" data-testid="select-role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">{roleDescriptions[role]}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  data-testid="input-username"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="input-password"
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" data-testid="button-login">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">Demo Credentials</p>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <Card className="p-2">
              <p className="font-medium">Student</p>
              <p className="text-muted-foreground font-mono">student/pass</p>
            </Card>
            <Card className="p-2">
              <p className="font-medium">Teacher</p>
              <p className="text-muted-foreground font-mono">teacher/pass</p>
            </Card>
            <Card className="p-2">
              <p className="font-medium">Admin</p>
              <p className="text-muted-foreground font-mono">admin/pass</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
