import Link from 'next/link';

export const metadata = {
  title: 'Contact - Steven Whitfield',
  description: 'Say hello.',
};

const Contact = () => {
  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-primary'>Get in touch</h1>
        <p className='pt-6'>{"I'll"} do my best to reply ASAP.</p>
      </header>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>Email</h2>
        <p className='pt-6'>
          <Link href={'mailto:stevmwhitfield@gmail.com'} className='text-primary'>
            stevmwhitfield@gmail.com
          </Link>
        </p>
      </section>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>LinkedIn</h2>
        <p className='pt-6'>
          <Link href={'https://www.linkedin.com/in/stevenmwhitfield/'} className='text-primary'>
            stevenmwhitfield
          </Link>
        </p>
      </section>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>GitHub</h2>
        <p className='pt-6'>
          <Link href={'https://github.com/stevmwhitfield'} className='text-primary'>
            stevmwhitfield
          </Link>
        </p>
      </section>
    </>
  );
};

export default Contact;
