import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface Submission {
  id: string;
  courseCode: string;
  courseName: string;
  teacher: string;
  submittedDate: string;
  studentsCount: number;
  status: "pending" | "approved" | "rejected";
}

interface ApprovalQueueProps {
  submissions: Submission[];
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onView?: (id: string) => void;
}

export default function ApprovalQueue({
  submissions,
  onApprove,
  onReject,
  onView,
}: ApprovalQueueProps) {
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Submitted</TableHead>
            <TableHead className="text-right">Students</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id} data-testid={`row-submission-${submission.id}`}>
              <TableCell>
                <div>
                  <p className="font-medium">{submission.courseName}</p>
                  <p className="text-sm text-muted-foreground font-mono">{submission.courseCode}</p>
                </div>
              </TableCell>
              <TableCell>{submission.teacher}</TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {submission.submittedDate}
              </TableCell>
              <TableCell className="text-right font-mono">{submission.studentsCount}</TableCell>
              <TableCell className="text-center">
                <StatusBadge status={submission.status} />
              </TableCell>
              <TableCell className="text-right">
                <div className="flex gap-1 justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onView?.(submission.id)}
                    data-testid={`button-view-${submission.id}`}
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  {submission.status === "pending" && (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onApprove?.(submission.id)}
                        className="text-green-600 hover:text-green-700"
                        data-testid={`button-approve-${submission.id}`}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onReject?.(submission.id)}
                        className="text-red-600 hover:text-red-700"
                        data-testid={`button-reject-${submission.id}`}
                      >
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
