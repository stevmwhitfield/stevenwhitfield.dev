import Link from 'next/link';

import Skill from '@/components/about/Skill';

export const metadata = {
  title: 'About me - Steven Whitfield',
  description: 'A little about myself.',
};

const About = () => {
  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-primary'>Hello again!</h1>
      </header>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>My name is Steven Whitfield</h2>
        <p className='pt-6'>
          I graduated in May 2023 with a {"Bachelor's"} of <strong>Computer Science</strong> from{' '}
          <Link href={'https://floridapoly.edu/'} className='text-primary'>
            Florida Poly
          </Link>{' '}
          with a concentration in Game Development & Simulation. That said, I am more invested in
          the <strong>web</strong> and software as a whole. I have been exploring the web since high
          school and have taught myself a variety of <strong>modern tools</strong> to help build it.
        </p>
        <p className='pt-6'>Some of my notable achievements include:</p>
        <ul className='list-disc pl-9'>
          <li className='my-3'>
            Earning 17 certifications during high school including MS Office, MTA, Adobe, and
            CompTIA
          </li>
          <li className='my-3'>
            Managing a booth for <Link href={'/projects/jump-racer'}>Jump Racer</Link> at{' '}
            <Link
              href={
                'https://floridapoly.edu/student-affairs/student-development/campus-traditions/game-expo.php'
              }
              className='text-primary'
            >
              Florida {"Poly's"} Game Expo
            </Link>
          </li>
          <li className='my-3'>
            Publishing the official website for{' '}
            <Link href={'https://www.chawlamedia.com/'} className='text-primary'>
              Chawla Media
            </Link>
          </li>
        </ul>
      </section>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>My toolbelt</h2>
        <div className='pt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-4'>
          <Skill icon={'devicon-html5-plain colored'} text={'HTML5'} />
          <Skill icon={'devicon-css3-plain colored'} text={'CSS3'} />
          <Skill icon={'devicon-javascript-plain colored'} text={'JavaScript'} />
          <Skill icon={'devicon-typescript-plain colored'} text={'TypeScript'} />
          <Skill icon={'devicon-react-plain colored'} text={'React'} />
          <Skill icon={'devicon-nextjs-plain colored'} text={'Next.js'} />
          <Skill icon={'devicon-tailwindcss-plain colored'} text={'Tailwind CSS'} />
          <Skill icon={'devicon-figma-plain colored'} text={'Figma'} />
          <Skill icon={'devicon-nodejs-plain colored'} text={'Node.js'} />
          <Skill icon={'devicon-csharp-plain colored'} text={'C#'} />
          <Skill icon={'devicon-sqlite-plain colored'} text={'SQL'} />
          <Skill icon={'devicon-mongodb-plain colored'} text={'NoSQL'} />
          <Skill icon={'devicon-git-plain colored'} text={'Git/GitHub'} />
          <Skill icon={'devicon-vscode-plain colored'} text={'VS Code'} />
          <Skill icon={'devicon-npm-original-wordmark colored'} text={'NPM'} />
          <Skill icon={'devicon-eslint-plain colored'} text={'ESLint'} />
        </div>
        <p className='pt-6'>
          {"I'm"} currently learning more about ASP.NET Core, Jest, and user auth.
        </p>
      </section>
      <section className='pt-12'>
        <h2 className='text-3xl font-semibold'>Miscellaneous</h2>
        <p className='pt-6'>
          I listen to almost any genre of music. My top picks at the moment are rock, pop punk, and
          EDM.
        </p>
        <p className='pt-6'>
          I enjoy playing both casual and competitive games such as Bloons, Elden Ring, and League
          of Legends.
        </p>
        <p className='pt-6'>
          I practiced target shooting with the archery club during university and occasionally visit
          the local range.
        </p>
      </section>
    </>
  );
};

export default About;
