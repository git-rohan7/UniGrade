import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, User } from "lucide-react";
import StatusBadge from "./StatusBadge";

interface SubjectCardProps {
  code: string;
  name: string;
  semester: string;
  credits: number;
  teacher: string;
  status?: "pending" | "approved" | "rejected" | "published";
  onViewDetails?: () => void;
}

export default function SubjectCard({
  code,
  name,
  semester,
  credits,
  teacher,
  status,
  onViewDetails,
}: SubjectCardProps) {
  return (
    <Card data-testid={`card-subject-${code}`}>
      <CardHeader className="space-y-0 pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-md">
              <BookOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="font-mono text-sm text-muted-foreground">{code}</p>
              <h3 className="font-semibold text-lg">{name}</h3>
            </div>
          </div>
          {status && <StatusBadge status={status} />}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="w-4 h-4" />
          <span>{teacher}</span>
        </div>
        <div className="flex gap-4 text-sm">
          <span className="text-muted-foreground">
            Semester: <span className="text-foreground font-medium">{semester}</span>
          </span>
          <span className="text-muted-foreground">
            Credits: <span className="text-foreground font-medium">{credits}</span>
          </span>
        </div>
      </CardContent>
      {onViewDetails && (
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            onClick={onViewDetails}
            className="w-full"
            data-testid={`button-view-details-${code}`}
          >
            View Details
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
