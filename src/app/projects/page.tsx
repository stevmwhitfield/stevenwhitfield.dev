import ProjectLink from '@/components/projects/ProjectLink';
import { getSortedProjectsData } from '@/lib/projects';

export const metadata = {
  title: 'Projects - Steven Whitfield',
  description: 'Some stuff I made that might be worth sharing.',
};

const getData = async () => {
  const projects = await getSortedProjectsData();

  return projects;
};

const Projects = async () => {
  const projects = await getData();

  return (
    <>
      <header>
        <h1 className='text-4xl font-bold text-primary'>Projects</h1>
        <p className='pt-6'>View a specific project to learn more about it.</p>
      </header>
      <section className='pt-12 grid grid-cols-auto-fill gap-6'>
        {projects.map(({ id, title, tags, date, description }) => (
          <ProjectLink
            key={id}
            title={title}
            tags={tags}
            year={date.split('-')[0]}
            description={description}
            href={`/projects/${id}`}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
