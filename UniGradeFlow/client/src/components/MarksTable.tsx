import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StatusBadge from "./StatusBadge";

interface Mark {
  id: string;
  subject: string;
  subjectCode: string;
  internal: number;
  practical: number;
  semester: number;
  total: number;
  maxMarks: number;
  grade: string;
  status: "pending" | "approved" | "rejected" | "published";
}

interface MarksTableProps {
  marks: Mark[];
}

export default function MarksTable({ marks }: MarksTableProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Internal</TableHead>
            <TableHead className="text-right">Practical</TableHead>
            <TableHead className="text-right">Semester</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-center">Grade</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marks.map((mark) => (
            <TableRow key={mark.id} data-testid={`row-mark-${mark.id}`}>
              <TableCell>
                <div>
                  <p className="font-medium">{mark.subject}</p>
                  <p className="text-sm text-muted-foreground font-mono">{mark.subjectCode}</p>
                </div>
              </TableCell>
              <TableCell className="text-right font-mono">{mark.internal}</TableCell>
              <TableCell className="text-right font-mono">{mark.practical}</TableCell>
              <TableCell className="text-right font-mono">{mark.semester}</TableCell>
              <TableCell className="text-right font-mono font-semibold">
                {mark.total}/{mark.maxMarks}
              </TableCell>
              <TableCell className="text-center">
                <span className="font-bold text-lg font-mono">{mark.grade}</span>
              </TableCell>
              <TableCell className="text-center">
                <StatusBadge status={mark.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
