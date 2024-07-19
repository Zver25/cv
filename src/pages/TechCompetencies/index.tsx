import {FC, JSX} from 'react';
import '../styles.css';

const TechCompetencies: FC = (): JSX.Element => {
  return (
    <div className="page">
      <h1>Core tech competencies</h1>
      <div className="columns">
        <div className="row">
          <div className="column">
            Advanced
          </div>
          <div className="column">
            <ul className="tips">
              <li>JavaScript / TypeScript</li>
              <li>React, Redux, Thunk, redux-observable</li>
              <li>Angular, NGXS</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="column">
            Intermediate
          </div>
          <div className="column">
            <ul className="tips">
              <li>Java (SpringBoot, SpringCloud, Web, RabbitMQ, Kafka, Security, Hibernate, Liquibase, WebSocket)</li>
              <li>DBMS (Postgres, MySQL, Oracle Database, MongoDB)</li>
              <li>NodeJS (Express, NEST.JS)</li>
              <li>CI/CD (Jenkins, TeamCity)</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="column">
            Basic
          </div>
          <div className="column">
            <ul className="tips">
              <li>Kubernetes</li>
              <li>Ansible</li>
              <li>Terraform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCompetencies;
