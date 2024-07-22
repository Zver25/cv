import {createBrowserRouter, Navigate} from 'react-router-dom';
import Conclusion from './pages/Conclusion';
import Initial from './pages/Initial';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import {projectList} from './pages/Projects/constants.ts';
import TechCompetencies from './pages/TechCompetencies';
import Thanks from './pages/Thanks';
import WrapperPage from './pages/WrapperPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/initial" replace />,
  },
  {
    path: 'initial',
    element: (
      <WrapperPage>
        <Initial />
      </WrapperPage>
    ),
  },
  {
    path: 'intro',
    element: (
      <WrapperPage>
        <Intro />
      </WrapperPage>
    ),
  },
  {
    path: 'tech-competencies',
    element: (
      <WrapperPage>
        <TechCompetencies />
      </WrapperPage>
    ),
  },
  {
    path: 'projects',
    children: [
      {
        index: true,
        element: <Navigate to="/projects/coding-stories" replace />,
      },
      ...(
        projectList.map(({alias}) => ({
          path: alias,
          element: (
            <WrapperPage>
              <Projects path={alias} />
            </WrapperPage>
          ),
        }))
      ),
    ],
  },
  {
    path: 'conclusion',
    element: (
      <WrapperPage>
        <Conclusion />
      </WrapperPage>
    ),
  },
  {
    path: 'thanks',
    element: (
      <WrapperPage>
        <Thanks />
      </WrapperPage>
    ),
  },
]);

export const routerFlow = [
  '/initial',
  '/intro',
  '/tech-competencies',
  '/projects/coding-stories',
  '/projects/availia',
  '/conclusion',
  '/thanks',
];
