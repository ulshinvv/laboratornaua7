import React from 'react';

interface OnlyEvenProps {
  arr: number[];
}

const OnlyEven: React.FC<OnlyEvenProps> = ({ arr }) => {
  const filterEven = (array: number[]): number[] => {
    return array.filter(num => num % 2 === 0);
  };

  const evenNumbers = filterEven(arr);
  const displayNumbers = evenNumbers.join(', ');

  return (
    <div>
      {displayNumbers}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    </div>
  );
};

export default App;
