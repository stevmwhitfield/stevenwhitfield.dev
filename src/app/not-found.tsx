import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-primary'>Error 404</h1>
        <h2 className='text-2xl text-subtext'>Page not found</h2>
      </header>
      <section className='pt-6'>
        <Link href={'/'}>Return to home</Link>
      </section>
    </>
  );
}
