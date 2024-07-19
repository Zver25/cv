import {FC, JSX} from 'react';
import {projectList} from './constants.ts';
import Project from './Project.tsx';

export interface ProjectProps {
  path: string;
}

const Projects: FC<ProjectProps> = ({
  path,
}: ProjectProps): JSX.Element => {
  const project = projectList.find((project): boolean => (
    project.alias === path
  ));

  return (
    <Project
      title={project.title}
      name={project.name}
      code={project.code}
      role={project.role}
      duration={project.duration}
      technologies={project.technologies}
      achievements={project.achievements}
    />
  );
};

export default Projects;
