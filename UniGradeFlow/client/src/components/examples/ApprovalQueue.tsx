import ApprovalQueue from '../ApprovalQueue';

export default function ApprovalQueueExample() {
  const submissions = [
    {
      id: '1',
      courseCode: 'CS301',
      courseName: 'Data Structures & Algorithms',
      teacher: 'Dr. Sarah Johnson',
      submittedDate: '2024-11-01',
      studentsCount: 45,
      status: 'pending' as const,
    },
    {
      id: '2',
      courseCode: 'CS302',
      courseName: 'Database Management Systems',
      teacher: 'Prof. Michael Chen',
      submittedDate: '2024-10-28',
      studentsCount: 50,
      status: 'approved' as const,
    },
    {
      id: '3',
      courseCode: 'CS303',
      courseName: 'Web Development',
      teacher: 'Dr. Emily Davis',
      submittedDate: '2024-11-02',
      studentsCount: 42,
      status: 'pending' as const,
    },
  ];

  return (
    <ApprovalQueue
      submissions={submissions}
      onApprove={(id) => console.log('Approve:', id)}
      onReject={(id) => console.log('Reject:', id)}
      onView={(id) => console.log('View:', id)}
    />
  );
}
