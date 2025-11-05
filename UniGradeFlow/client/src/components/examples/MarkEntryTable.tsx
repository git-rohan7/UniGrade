import MarkEntryTable from '../MarkEntryTable';

export default function MarkEntryTableExample() {
  const students = [
    { id: '1', name: 'Alice Johnson', rollNumber: 'CS2024001' },
    { id: '2', name: 'Bob Smith', rollNumber: 'CS2024002' },
    { id: '3', name: 'Carol Williams', rollNumber: 'CS2024003' },
  ];

  return (
    <MarkEntryTable
      students={students}
      onSaveDraft={(marks) => console.log('Draft saved:', marks)}
      onSubmit={(marks) => console.log('Marks submitted:', marks)}
    />
  );
}
