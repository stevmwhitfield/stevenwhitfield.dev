import Link from 'next/link';

interface ProjectLink {
  title: string;
  tags: string[];
  href?: string;
  year: string;
  description: string;
}

const ProjectLink = ({ title, href, year, description }: ProjectLink) => {
  return (
    <Link
      href={`${href}`}
      className='block px-6 py-6 bg-card border-2 border-transparent hover:border-border hover:opacity-100 hover:no-underline'
    >
      <div className='flex justify-between items-baseline mb-3'>
        <p className='text-2xl text-text font-semibold'>{title}</p>
        <p className='text-lg text-accent opacity-60'>{year}</p>
      </div>
      <p className='text-base text-text'>{description}</p>
    </Link>
  );
};

export default ProjectLink;
