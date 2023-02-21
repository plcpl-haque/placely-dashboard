import Left from '@/components/Left';
import Table from '@/components/Table';

export default function Home() {
  return (
    <div className='flex gap-0'>
      <Left />

      {/* Second part  */}
        <Table />
    </div>
  )
}
