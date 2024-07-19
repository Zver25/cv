import React, {FC, JSX} from 'react';

const Initial: FC = (): JSX.Element => {
  const  date = new Date();
  const  month = date.toLocaleString('default', { month: 'long' });
  const  year = date.getFullYear();

  return (
    <div className="page">
      <h1>Aleksandr Sviridovsky</h1>
      <h3>Software Developer</h3>
      <div>{`${month} ${year}`}</div>
    </div>
  );
}

export default Initial;
