import {FC, JSX} from 'react';
import { Navigate } from 'react-router-dom';
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

  if (!project) {
    return <Navigate to="/404" />;
  }

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
