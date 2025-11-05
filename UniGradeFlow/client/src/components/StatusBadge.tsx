import { Badge } from "@/components/ui/badge";

type Status = "pending" | "approved" | "rejected" | "published";

interface StatusBadgeProps {
  status: Status;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const variants: Record<Status, { label: string; className: string }> = {
    pending: {
      label: "Pending",
      className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    },
    approved: {
      label: "Approved",
      className: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    },
    rejected: {
      label: "Rejected",
      className: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
    },
    published: {
      label: "Published",
      className: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    },
  };

  const config = variants[status];

  return (
    <Badge className={`${config.className} border`} data-testid={`badge-${status}`}>
      {config.label}
    </Badge>
  );
}
