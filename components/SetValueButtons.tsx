// components/SetValueButtons.tsx

import React from 'react';

interface SetValueButtonsProps {
  target: 'num1' | 'num2';
  values: { label: string; value: string }[];
  onValueSelect: (value: string, target: 'num1' | 'num2') => void;
}

const SetValueButtons: React.FC<SetValueButtonsProps> = ({ target, values, onValueSelect }) => {
  return (
    <div className="buttons">
      <h3>{target === 'num1' ? 'Example battery sizes' : 'Average electricity prices'}</h3>
      {values.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onValueSelect(value, target)}
          className="px-4 py-2 m-1 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SetValueButtons;