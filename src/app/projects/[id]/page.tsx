import Link from 'next/link';

import { getAllProjectIds, getProjectData } from '@/lib/projects';

export const generateStaticParams = async () => {
  const projectPaths = await getAllProjectIds();

  return projectPaths.map((project) => ({
    id: project.params.id,
  }));
};

const getData = async (id: string) => {
  const projectData = await getProjectData(id);
  return projectData;
};

const Project = async ({ params }: { params: { id: string } }) => {
  const { title, repo, live, date, contentHtml } = await getData(params.id);

  const parsedDate = new Date(date + 'T12:00:00-04:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-primary'>{title}</h1>
        <p className='text-lg text-subtext'>
          Last updated: <time dateTime={date}>{parsedDate}</time>
        </p>
      </header>
      <section className='pt-6 flex gap-x-4'>
        {repo ? <Link href={repo}>Source code</Link> : ''}
        {live ? (
          <>
            <div>·</div>
            <Link href={live}>Live demo</Link>
          </>
        ) : (
          ''
        )}
      </section>
      <section>
        <div className='markdown-content' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
    </>
  );
};

export default Project;
