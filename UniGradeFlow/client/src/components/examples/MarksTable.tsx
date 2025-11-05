import MarksTable from '../MarksTable';

export default function MarksTableExample() {
  const marks = [
    {
      id: '1',
      subject: 'Data Structures',
      subjectCode: 'CS301',
      internal: 28,
      practical: 18,
      semester: 72,
      total: 118,
      maxMarks: 150,
      grade: 'A',
      status: 'published' as const,
    },
    {
      id: '2',
      subject: 'Database Systems',
      subjectCode: 'CS302',
      internal: 25,
      practical: 20,
      semester: 68,
      total: 113,
      maxMarks: 150,
      grade: 'A',
      status: 'published' as const,
    },
    {
      id: '3',
      subject: 'Web Development',
      subjectCode: 'CS303',
      internal: 30,
      practical: 19,
      semester: 75,
      total: 124,
      maxMarks: 150,
      grade: 'A+',
      status: 'pending' as const,
    },
  ];

  return <MarksTable marks={marks} />;
}
