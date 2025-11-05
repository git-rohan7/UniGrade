import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";
import ApprovalQueue from "./ApprovalQueue";
import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  // TODO: remove mock data
  const submissions = [
    {
      id: "1",
      courseCode: "CS301",
      courseName: "Data Structures & Algorithms",
      teacher: "Dr. Sarah Johnson",
      submittedDate: "2024-11-01",
      studentsCount: 45,
      status: "pending" as const,
    },
    {
      id: "2",
      courseCode: "CS302",
      courseName: "Database Management Systems",
      teacher: "Prof. Michael Chen",
      submittedDate: "2024-10-28",
      studentsCount: 50,
      status: "approved" as const,
    },
    {
      id: "3",
      courseCode: "CS303",
      courseName: "Web Development",
      teacher: "Dr. Emily Davis",
      submittedDate: "2024-11-02",
      studentsCount: 42,
      status: "pending" as const,
    },
  ];

  const gradeDistribution = [
    { grade: "A+", count: 45 },
    { grade: "A", count: 78 },
    { grade: "B+", count: 65 },
    { grade: "B", count: 52 },
    { grade: "C+", count: 28 },
    { grade: "C", count: 15 },
    { grade: "F", count: 7 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage the university exam system and approve results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Students" value={290} icon={Users} />
        <StatCard title="Pending Approvals" value={2} icon={Clock} subtitle="Require action" />
        <StatCard
          title="Approved Results"
          value={15}
          icon={CheckCircle}
          subtitle="This semester"
        />
        <StatCard title="Average GPA" value="3.6" icon={TrendingUp} subtitle="University-wide" />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle>Pending Approvals</CardTitle>
            <Button variant="outline" size="sm" data-testid="button-view-all-approvals">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ApprovalQueue
            submissions={submissions}
            onApprove={(id) => console.log("Approve submission:", id)}
            onReject={(id) => console.log("Reject submission:", id)}
            onView={(id) => console.log("View submission:", id)}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grade Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={gradeDistribution}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="grade" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
