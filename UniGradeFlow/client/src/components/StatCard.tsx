import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
}

export default function StatCard({ title, value, icon: Icon, subtitle }: StatCardProps) {
  return (
    <Card className="p-4" data-testid={`card-stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-4xl font-bold font-mono">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="p-2 bg-primary/10 rounded-md">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
    </Card>
  );
}
