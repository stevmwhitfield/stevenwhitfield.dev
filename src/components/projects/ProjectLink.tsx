import Link from 'next/link';

interface ProjectLink {
  title: string;
  tags: string[];
  href?: string;
}

const ProjectLink = ({ title, tags, href }: ProjectLink) => {
  return (
    <Link href={`${href}`} className='flex flex-col text-start hover:no-underline'>
      <p className='text-3xl font-semibold text-text'>{title}</p>
      <div className='flex gap-x-2 pt-6 pb-1'>
        <p className='text-subtext overflow-hidden whitespace-nowrap overflow-ellipsis'>
          {tags.join(' / ')}
        </p>
      </div>
    </Link>
  );
};

export default ProjectLink;
