import { Button } from '@/components/ui/button';
import Link from 'next/link';

const languages = [
  { label: 'HTML5', icon: 'devicon-html5-plain' },
  { label: 'CSS3', icon: 'devicon-css3-plain' },
  { label: 'JavaScript', icon: 'devicon-javascript-plain' },
  { label: 'TypeScript', icon: 'devicon-typescript-plain' },
  { label: 'Java', icon: 'devicon-java-plain' },
  { label: 'C#', icon: 'devicon-csharp-plain' },
  { label: 'MySQL', icon: 'devicon-mysql-plain' }
];

const frameworks = [
  { label: 'React', icon: 'devicon-react-plain' },
  { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
  { label: 'Next.js', icon: 'devicon-nextjs-plain' },
  { label: 'Spring', icon: 'devicon-spring-plain' }
];

const others = [
  { label: 'Git', icon: 'devicon-git-plain' },
  { label: 'GitHub', icon: 'devicon-github-plain' },
  { label: 'VS Code', icon: 'devicon-vscode-plain' },
  { label: 'Eclipse', icon: 'devicon-eclipse-plain' },
  { label: 'Figma', icon: 'devicon-figma-plain' }
];

export default function Home() {
  return (
    <>
      <header className='mb-12'>
        <h1 className='text-2xl font-semibold text-ctp-lavender'>
          Steven Whitfield
        </h1>
        <p className='text-lg text-ctp-subtext0'>Software Engineer</p>
      </header>
      <article className='mb-6'>
        <h2 className='text-xl font-semibold mb-4'>Hello!</h2>
        <p className='text-ctp-subtext1'>
          {"I'm"} a full-stack developer with a passion for the web. I currently
          work as an associate software engineer at{' '}
          <Link href={'https://www.cognizant.com/us/en'}>Cognizant</Link>, where
          I use a range of technologies including{' '}
          <Link href={'https://react.dev/'}>React</Link> and{' '}
          <Link href={'https://spring.io/projects/spring-boot/'}>
            Spring Boot
          </Link>
          . I am currently studying UI/UX design and the{' '}
          <Link href={'https://nextjs.org/'}>Next.js</Link> framework in my
          spare time.
        </p>
      </article>
      <article className='mb-6'>
        <h2 className='text-xl font-semibold mb-4'>
          These are some tools I use
        </h2>
        <h3 className='text-lg font-semibold mb-3'>Languages</h3>
        <div className='mb-4'>
          {languages.map((lang) => (
            <Button key={lang.label} size={'iconLabel'} asChild>
              <Link href='' className='flex flex-col space-y-1 items-center'>
                <i className={`${lang.icon} text-xl text-ctp-subtext1`} />
                <span className='text-xs text-ctp-subtext0'>{lang.label}</span>
              </Link>
            </Button>
          ))}
        </div>
        <h3 className='text-lg font-semibold mb-3'>Frameworks and libraries</h3>
        <div className='mb-4'>
          {frameworks.map((framework) => (
            <Button key={framework.label} size={'iconLabel'} asChild>
              <Link href='' className='flex flex-col space-y-1 items-center'>
                <i className={`${framework.icon} text-xl text-ctp-subtext1`} />
                <span className='text-xs text-ctp-subtext0'>
                  {framework.label}
                </span>
              </Link>
            </Button>
          ))}
        </div>
        <h3 className='text-lg font-semibold mb-3'>Others</h3>
        <div className='mb-4'>
          {others.map((other) => (
            <Button key={other.label} size={'iconLabel'} asChild>
              <Link href='' className='flex flex-col space-y-1 items-center'>
                <i className={`${other.icon} text-xl text-ctp-subtext1`} />
                <span className='text-xs text-ctp-subtext0'>{other.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </article>
    </>
  );
}
