import {FC, JSX} from 'react';
import './styles.css';

export interface ProjectProps {
  title: string;
  name: string;
  code: string;
  role: string;
  duration: string;
  technologies: string;
  achievements: string;
}

const Project: FC<ProjectProps> = ({
  title,
  name,
  code,
  role,
  duration,
  technologies,
  achievements,
}: ProjectProps): JSX.Element => {
  return (
    <div className="page">
      <h1>{title}</h1>
      <div>
        <p><span className="title">Project Name: </span>{name}</p>
        {
          code && (
            <p><span className="title">Project Code: </span>{code}</p>
          )
        }
        <p><span className="title">My Role: </span>{role}</p>
        <p><span className="title">Duration: </span>{duration}</p>
        <p><span className="title">Used Technologies: </span>{technologies}</p>
        <p><span className="title">My Key Achievements: </span>{achievements}</p>
      </div>
    </div>
  );
}

export default Project;
