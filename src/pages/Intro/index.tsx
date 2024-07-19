import {FC, JSX} from 'react';
import '../styles.css';
import './styles.css';

const Intro: FC = (): JSX.Element => {
  return (
    <div className="page">
      <h1>Introduction</h1>
      <div className="columns">
        <ul className="tips">
          <li>More than 10 years of experience in IT</li>
          <li>3 years in EPAM</li>
          <li>Full-stack development</li>
          <li>English: B1+</li>
        </ul>
        <p className="content">
          I am a software developer with an extensive background in JavaScript and sizable expertise in Java. I am
          passionate about learning new technologies and frameworks. As a team player, I derive valuable insights
          from my peers and continually seek out avenues for learning. Nonetheless, I can effectively function as an
          independent contributor when required.
        </p>
      </div>
    </div>
  );
}

export default Intro;
