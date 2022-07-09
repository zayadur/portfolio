import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  // returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'project1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'project2'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}


export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // use gray-matter to parse the projects metadata section
  const matterResult = matter(fileContents);

  // use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getSortedProjectData() {
  // get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory);
  
  const projectData = fileNames.map(fileName => {
    
    // remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    
    // read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    
    // use gray-matter to parse the project metadata section
    const matterResult = matter(fileContents);
    
    // combine the data with the id
    return {
      id,
      ...matterResult.data,
    };

  });
  
  // sort projects by date
  return projectData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

}
