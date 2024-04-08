import { Button } from '@/components/ui/button';
import Link from 'next/link';

const languages = [
  {
    label: 'HTML5',
    icon: 'devicon-html5-plain',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  {
    label: 'CSS3',
    icon: 'devicon-css3-plain',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  {
    label: 'JavaScript',
    icon: 'devicon-javascript-plain',
    href: 'https://developer.mozilla.org/en-US/docs/Web/javascript'
  },
  {
    label: 'TypeScript',
    icon: 'devicon-typescript-plain',
    href: 'https://www.typescriptlang.org/'
  },
  { label: 'Java', icon: 'devicon-java-plain', href: 'https://www.java.com/' },
  {
    label: 'C#',
    icon: 'devicon-csharp-plain',
    href: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
  },
  {
    label: 'MySQL',
    icon: 'devicon-mysql-plain',
    href: 'https://www.mysql.com/'
  }
];

const frameworks = [
  { label: 'React', icon: 'devicon-react-plain', href: 'https://react.dev/' },
  {
    label: 'Tailwind CSS',
    icon: 'devicon-tailwindcss-plain',
    href: 'https://tailwindcss.com/'
  },
  {
    label: 'Next.js',
    icon: 'devicon-nextjs-plain',
    href: 'https://nextjs.org/'
  },
  {
    label: 'Spring',
    icon: 'devicon-spring-plain',
    href: 'https://spring.io/projects/spring-framework/'
  }
];

const others = [
  { label: 'Git', icon: 'devicon-git-plain', href: 'https://git-scm.com/' },
  {
    label: 'GitHub',
    icon: 'devicon-github-plain',
    href: 'https://github.com/'
  },
  {
    label: 'VS Code',
    icon: 'devicon-vscode-plain',
    href: 'https://code.visualstudio.com/'
  },
  {
    label: 'Eclipse',
    icon: 'devicon-eclipse-plain',
    href: 'https://eclipseide.org/'
  },
  {
    label: 'Figma',
    icon: 'devicon-figma-plain',
    href: 'https://www.figma.com/'
  }
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
              <Link
                href={lang.href}
                className='flex flex-col space-y-1 items-center'
              >
                <i
                  className={`${lang.icon} colored text-xl text-ctp-subtext1`}
                />
                <span className='text-xs text-ctp-subtext0'>{lang.label}</span>
              </Link>
            </Button>
          ))}
        </div>
        <h3 className='text-lg font-semibold mb-3'>Frameworks and libraries</h3>
        <div className='mb-4'>
          {frameworks.map((framework) => (
            <Button key={framework.label} size={'iconLabel'} asChild>
              <Link
                href={framework.href}
                className='flex flex-col space-y-1 items-center'
              >
                <i
                  className={`${framework.icon} colored text-xl text-ctp-subtext1`}
                />
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
              <Link
                href={other.href}
                className='flex flex-col space-y-1 items-center'
              >
                <i
                  className={`${other.icon} colored text-xl text-ctp-subtext1`}
                />
                <span className='text-xs text-ctp-subtext0'>{other.label}</span>
              </Link>
            </Button>
          ))}
        </div>
      </article>
    </>
  );
}
