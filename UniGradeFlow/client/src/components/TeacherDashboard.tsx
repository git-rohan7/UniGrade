import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StatCard from "./StatCard";
import MarkEntryTable from "./MarkEntryTable";
import { BookOpen, Clock, CheckCircle, Upload } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function TeacherDashboard() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  // TODO: remove mock data
  const courses = [
    { id: "CS301", name: "Data Structures & Algorithms", students: 45 },
    { id: "CS302", name: "Database Management Systems", students: 50 },
    { id: "CS303", name: "Web Development", students: 42 },
  ];

  const students = [
    { id: "1", name: "Alice Johnson", rollNumber: "CS2024001" },
    { id: "2", name: "Bob Smith", rollNumber: "CS2024002" },
    { id: "3", name: "Carol Williams", rollNumber: "CS2024003" },
    { id: "4", name: "David Brown", rollNumber: "CS2024004" },
    { id: "5", name: "Emma Davis", rollNumber: "CS2024005" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Manage your courses and upload student marks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Courses" value={3} icon={BookOpen} />
        <StatCard title="Pending Submissions" value={2} icon={Clock} subtitle="Awaiting approval" />
        <StatCard title="Approved Marks" value={5} icon={CheckCircle} subtitle="This semester" />
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          You have 2 pending submissions awaiting admin approval. Check the "Pending Approvals" section
          for updates.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Student Marks
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Select Course</label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger data-testid="select-course">
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.id} - {course.name} ({course.students} students)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="pt-7">
              <Button variant="outline" data-testid="button-bulk-upload">
                <Upload className="w-4 h-4" />
                Bulk Upload CSV
              </Button>
            </div>
          </div>

          {selectedCourse && (
            <div>
              <h3 className="font-semibold mb-3">
                Enter Marks for {courses.find((c) => c.id === selectedCourse)?.name}
              </h3>
              <MarkEntryTable students={students} />
            </div>
          )}

          {!selectedCourse && (
            <div className="text-center py-12 text-muted-foreground">
              Select a course to start entering marks
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
