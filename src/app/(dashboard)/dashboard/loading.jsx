import { Spinner } from '@/components/Spinner/Spinner';

export default function Loading() {
  return (
    <div
      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <Spinner color={'#82efee'} />
    </div>
  );
}
