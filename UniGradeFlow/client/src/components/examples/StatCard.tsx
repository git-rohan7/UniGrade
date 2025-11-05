import StatCard from '../StatCard';
import { BookOpen, GraduationCap, TrendingUp } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Total Subjects" value={6} icon={BookOpen} />
      <StatCard title="Current GPA" value="3.8" icon={TrendingUp} subtitle="Out of 4.0" />
      <StatCard title="Credits" value={18} icon={GraduationCap} subtitle="This semester" />
    </div>
  );
}
