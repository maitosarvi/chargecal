"use client";

import { useState, useEffect } from 'react';
import SetValueButtons from './SetValueButtons';

const Calculator: React.FC = () => {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [sum, setSum] = useState<number>(0);

  // Recalculate the sum whenever num1 or num2 changes
  useEffect(() => {
    const val1 = parseFloat(num1) || 0;
    const val2 = parseFloat(num2) || 0;
    setSum(val1 * val2);
  }, [num1, num2]);

  // Callback function to handle setting values from SetValueButtons
  const handleSetNum = (value: string, target: 'num1' | 'num2') => {
    if (target === 'num1') setNum1(value);
    else setNum2(value);
  };

 // Function to format the sum to show only the first non-zero decimal
 const formatSum = (value: number): string => {
    const strValue = value.toString();
    const decimalIndex = strValue.indexOf('.');
    
    // If there's no decimal point, return the whole number
    if (decimalIndex === -1) return strValue;

    // Get the portion after the decimal point
    const decimals = strValue.slice(decimalIndex + 1);
    const firstNonZeroIndex = decimals.search(/[1-9]/);

    if (firstNonZeroIndex === -1) return strValue; // No non-zero decimals

    return strValue.slice(0, decimalIndex + 1 + firstNonZeroIndex + 1); // Including first non-zero decimal
  };

  return (
    <div className="calculator">
      <h2>Calculate charge price</h2>
      <input
        type="text" // Allows decimal input
        placeholder="Battery size (kWh)"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text" // Allows decimal input
        placeholder="Electricity price ($/kWh)"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>Price: {formatSum(sum)}$ </p>

      {/* SetValueButtons for num1 with 4 buttons and custom labels */}
      <SetValueButtons
        target="num1"
        values={[
          { label: 'AA battery: 0.0039 kWh', value: '0.0039 kWh' },
          { label: 'iPhone 16 Pro Max: 0.018 kWh', value: '0.018 kWh' },
          { label: 'E-bike: 0.75 kWh', value: '0.75 kWh' },
          { label: 'Tesla Model 3: 57.5kWh', value: '57.5 kWh' },
        ]}
        onValueSelect={handleSetNum}
      />

      {/* SetValueButtons for num2 with 6 buttons and custom labels */}
      <SetValueButtons
        target="num2"
        values={[
          { label: 'Germany: 0.4 $/kWh', value: '0.4 $/kWh' },
          { label: 'France: 0.28 $/kWh', value: '0.28 $/kWh' },
          { label: 'United States: 0.16 $/kWh', value: '0.16 $/kWh' },
          { label: 'China: 0.08 $/kWh', value: '0.08 $/kWh' },
          { label: 'Russia: 0.06 $/kWh', value: '0.06 $/kWh' },
          { label: 'Qatar: 0.03 $/kWh', value: '0.03 $/kWh' },
        ]}
        onValueSelect={handleSetNum}
      />
    </div>
  );
};

export default Calculator;