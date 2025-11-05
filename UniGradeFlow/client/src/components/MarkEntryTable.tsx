import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Save, Send } from "lucide-react";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
}

interface StudentMark {
  studentId: string;
  internal: string;
  practical: string;
  semester: string;
}

interface MarkEntryTableProps {
  students: Student[];
  onSaveDraft?: (marks: StudentMark[]) => void;
  onSubmit?: (marks: StudentMark[]) => void;
}

export default function MarkEntryTable({ students, onSaveDraft, onSubmit }: MarkEntryTableProps) {
  const [marks, setMarks] = useState<Record<string, StudentMark>>(
    students.reduce((acc, student) => {
      acc[student.id] = {
        studentId: student.id,
        internal: "",
        practical: "",
        semester: "",
      };
      return acc;
    }, {} as Record<string, StudentMark>)
  );

  const updateMark = (studentId: string, field: keyof Omit<StudentMark, "studentId">, value: string) => {
    setMarks((prev) => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value,
      },
    }));
  };

  const handleSaveDraft = () => {
    const marksArray = Object.values(marks);
    onSaveDraft?.(marksArray);
    console.log("Draft saved:", marksArray);
  };

  const handleSubmit = () => {
    const marksArray = Object.values(marks);
    onSubmit?.(marksArray);
    console.log("Marks submitted:", marksArray);
  };

  return (
    <div className="space-y-4">
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Roll Number</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead className="text-right">Internal (30)</TableHead>
              <TableHead className="text-right">Practical (20)</TableHead>
              <TableHead className="text-right">Semester (100)</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => {
              const studentMarks = marks[student.id];
              const total =
                (parseInt(studentMarks.internal) || 0) +
                (parseInt(studentMarks.practical) || 0) +
                (parseInt(studentMarks.semester) || 0);

              return (
                <TableRow key={student.id} data-testid={`row-student-${student.id}`}>
                  <TableCell className="font-mono text-sm">{student.rollNumber}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="0"
                      max="30"
                      value={studentMarks.internal}
                      onChange={(e) => updateMark(student.id, "internal", e.target.value)}
                      className="text-right font-mono"
                      data-testid={`input-internal-${student.id}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      value={studentMarks.practical}
                      onChange={(e) => updateMark(student.id, "practical", e.target.value)}
                      className="text-right font-mono"
                      data-testid={`input-practical-${student.id}`}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      min="0"
                      max="100"
                      value={studentMarks.semester}
                      onChange={(e) => updateMark(student.id, "semester", e.target.value)}
                      className="text-right font-mono"
                      data-testid={`input-semester-${student.id}`}
                    />
                  </TableCell>
                  <TableCell className="text-right font-mono font-semibold">
                    {total > 0 ? total : "-"}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex gap-2 justify-end">
        <Button variant="outline" onClick={handleSaveDraft} data-testid="button-save-draft">
          <Save className="w-4 h-4" />
          Save Draft
        </Button>
        <Button onClick={handleSubmit} data-testid="button-submit-marks">
          <Send className="w-4 h-4" />
          Submit for Approval
        </Button>
      </div>
    </div>
  );
}
