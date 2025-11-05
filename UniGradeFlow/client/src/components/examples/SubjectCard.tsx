import SubjectCard from '../SubjectCard';

export default function SubjectCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <SubjectCard
        code="CS301"
        name="Data Structures"
        semester="Fall 2024"
        credits={3}
        teacher="Dr. Sarah Johnson"
        status="published"
        onViewDetails={() => console.log('View details clicked')}
      />
      <SubjectCard
        code="CS302"
        name="Database Systems"
        semester="Fall 2024"
        credits={4}
        teacher="Prof. Michael Chen"
        status="approved"
        onViewDetails={() => console.log('View details clicked')}
      />
      <SubjectCard
        code="CS303"
        name="Web Development"
        semester="Fall 2024"
        credits={3}
        teacher="Dr. Emily Davis"
        status="pending"
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
