import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className='flex space-x-4 justify-center'>
        <p className='font-medium'>404</p>
        <p className=''>
          This page could not be found. <Link href={'/'}>Return to home.</Link>
        </p>
      </div>
    </>
  );
}
