import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Steven Whitfield - Software Engineer',
  description: 'Software engineer. Open to work opportunities.',
};

const Home = () => {
  return (
    <>
      <header className='flex flex-col items-center'>
        <Image
          src={'/Steven_Whitfield.jpg'}
          alt={'A photo of Steven Whitfield'}
          title={'Steven Whitfield'}
          width={96}
          height={96}
          className='rounded-full'
        />
        <div className='pt-3 text-center'>
          <h1 className='text-4xl font-bold text-primary'>Steven Whitfield</h1>
          <h2 className='text-2xl text-subtext'>Software Engineer</h2>
        </div>
      </header>
      <section className='pt-12'>
        <h3 className='text-3xl font-semibold'>Hello and welcome!</h3>
        <p className='pt-6'>
          {"I'm"} a recent C.S. grad from Florida Polytechnic University with a passion for the web
          and tinkering with modern technologies. {"I'm"} currently open to work. Feel free to{' '}
          <Link href={'/projects'}>browse my projects</Link> or reach out to{' '}
          <Link href={'/contact'}>say hi</Link>.
        </p>
      </section>
    </>
  );
};

export default Home;
