import React from 'react';

interface SquareProps {
  n: number;
}

const Square: React.FC<SquareProps> = ({ n }) => {
  const squareValue = n * n;
  return (
    <div>
      {squareValue}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Square n={3} />
    </div>
  );
};

export default App;
