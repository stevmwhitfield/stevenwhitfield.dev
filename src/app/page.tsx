import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Steven Whitfield - Software Engineer',
  description: 'Software engineer.',
};

const Home = () => {
  return (
    <>
      <header className='flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6'>
        <Image
          src={'/Steven_Whitfield.jpg'}
          alt={'A photo of Steven Whitfield'}
          title={'Steven Whitfield'}
          width={72}
          height={72}
          className='rounded-full'
        />
        <div className='pt-3 sm:pt-0 sm:order-first'>
          <h1 className='text-4xl font-bold text-primary'>Steven Whitfield</h1>
          <h2 className='text-2xl text-subtext'>Software Engineer</h2>
        </div>
      </header>
      <section className='pt-12'>
        <h3 className='text-3xl font-semibold'>Hello and welcome!</h3>
        <p className='pt-6'>
          {"I'm"} an associate software engineer with a a passion for the web and tinkering with
          modern technologies. I graduated from Florida Polytechnic University in May 2023 with a
          degree in computer science. Feel free to{' '}
          <Link href={'/projects'}>browse my projects</Link> or reach out to{' '}
          <Link href={'/contact'}>say hi</Link>.
        </p>
      </section>
    </>
  );
};

export default Home;
