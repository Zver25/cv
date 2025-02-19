import {FC, JSX} from 'react';
import '../styles.css';

const Thanks: FC = (): JSX.Element => {
  return (
    <div className="page">
      <h1>Thank you for attention</h1>
      <div className="description">
        I would be happy to answer any questions you might have.
      </div>
    </div>
  );
}

export default Thanks;
