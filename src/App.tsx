import {
  FC,
  JSX,
} from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './conststants.tsx';

const App: FC = (): JSX.Element => (
  <div className="applicationWrapper">
    <RouterProvider router={router} />
  </div>
);

export default App
