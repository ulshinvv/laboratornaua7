import React from 'react';

interface TemperatureProps {
  t: number;
}

const Temperature: React.FC<TemperatureProps> = ({ t }) => {
  const temperatureColor = t < 0 ? 'blue' : 'red';

  return (
    <div style={{ color: temperatureColor }}>
      {t}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Temperature t={451} />
    </div>
  );
};

export default App;
