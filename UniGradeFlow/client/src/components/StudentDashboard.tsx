import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";
import SubjectCard from "./SubjectCard";
import MarksTable from "./MarksTable";
import { BookOpen, TrendingUp, Award, Download } from "lucide-react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState<"subjects" | "marks">("subjects");

  // TODO: remove mock data
  const subjects = [
    {
      code: "CS301",
      name: "Data Structures & Algorithms",
      semester: "Fall 2024",
      credits: 3,
      teacher: "Dr. Sarah Johnson",
      status: "published" as const,
    },
    {
      code: "CS302",
      name: "Database Management Systems",
      semester: "Fall 2024",
      credits: 4,
      teacher: "Prof. Michael Chen",
      status: "published" as const,
    },
    {
      code: "CS303",
      name: "Web Development",
      semester: "Fall 2024",
      credits: 3,
      teacher: "Dr. Emily Davis",
      status: "pending" as const,
    },
    {
      code: "CS304",
      name: "Operating Systems",
      semester: "Fall 2024",
      credits: 4,
      teacher: "Prof. Robert Williams",
      status: "published" as const,
    },
    {
      code: "CS305",
      name: "Computer Networks",
      semester: "Fall 2024",
      credits: 3,
      teacher: "Dr. Lisa Anderson",
      status: "approved" as const,
    },
    {
      code: "CS306",
      name: "Software Engineering",
      semester: "Fall 2024",
      credits: 3,
      teacher: "Prof. James Martinez",
      status: "published" as const,
    },
  ];

  const marks = [
    {
      id: "1",
      subject: "Data Structures & Algorithms",
      subjectCode: "CS301",
      internal: 28,
      practical: 18,
      semester: 72,
      total: 118,
      maxMarks: 150,
      grade: "A",
      status: "published" as const,
    },
    {
      id: "2",
      subject: "Database Management Systems",
      subjectCode: "CS302",
      internal: 25,
      practical: 20,
      semester: 68,
      total: 113,
      maxMarks: 150,
      grade: "A",
      status: "published" as const,
    },
    {
      id: "3",
      subject: "Web Development",
      subjectCode: "CS303",
      internal: 30,
      practical: 19,
      semester: 75,
      total: 124,
      maxMarks: 150,
      grade: "A+",
      status: "pending" as const,
    },
    {
      id: "4",
      subject: "Operating Systems",
      subjectCode: "CS304",
      internal: 27,
      practical: 17,
      semester: 70,
      total: 114,
      maxMarks: 150,
      grade: "A",
      status: "published" as const,
    },
    {
      id: "5",
      subject: "Computer Networks",
      subjectCode: "CS305",
      internal: 29,
      practical: 19,
      semester: 74,
      total: 122,
      maxMarks: 150,
      grade: "A+",
      status: "approved" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your academic overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Subjects" value={6} icon={BookOpen} />
        <StatCard title="Current GPA" value="3.8" icon={TrendingUp} subtitle="Out of 4.0" />
        <StatCard title="Credits Earned" value={18} icon={Award} subtitle="This semester" />
      </div>

      <div className="flex gap-2">
        <Button
          variant={activeTab === "subjects" ? "default" : "outline"}
          onClick={() => setActiveTab("subjects")}
          data-testid="button-subjects-tab"
        >
          My Subjects
        </Button>
        <Button
          variant={activeTab === "marks" ? "default" : "outline"}
          onClick={() => setActiveTab("marks")}
          data-testid="button-marks-tab"
        >
          Marks & Grades
        </Button>
      </div>

      {activeTab === "subjects" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.code}
              {...subject}
              onViewDetails={() => console.log(`View details for ${subject.code}`)}
            />
          ))}
        </div>
      )}

      {activeTab === "marks" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle>Semester Marks</CardTitle>
                <Button variant="outline" size="sm" data-testid="button-download-report">
                  <Download className="w-4 h-4" />
                  Download Report Card
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <MarksTable marks={marks} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
