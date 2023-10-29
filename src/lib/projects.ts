/* eslint-disable @typescript-eslint/no-unsafe-call */
import { readFileSync } from 'fs';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface IMatterData {
  title: string;
  tags: string[];
  repo?: string | undefined;
  live?: string | undefined;
  date: string;
  description: string;
}

const projectsDirectory = path.join(process.cwd(), 'projects');

export const getAllProjectIds = async () => {
  const fileNames = await readdir(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getSortedProjectsData = async () => {
  const fileNames = await readdir(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = readFileSync(fullPath, 'utf-8');

    const { data } = matter(fileContents) as unknown as { data: IMatterData };

    return { id, ...data };
  });

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getProjectData = async (id: string) => {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = await readFile(fullPath, 'utf-8');

  const { data, content } = matter(fileContents) as unknown as {
    data: IMatterData;
    content: string;
  };

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return { id, contentHtml, ...data };
};
