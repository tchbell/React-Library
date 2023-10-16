import React, { useState } from 'react';

const AgeGate: React.FC = () => {
  const [age, setAge] = useState<number | undefined>(undefined);

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAge = parseInt(e.target.value, 10);
    setAge(isNaN(inputAge) ? undefined : inputAge);
  };

  const handleAgeConfirmation = () => {
    if (age && age >= 18) {
      // Age is valid, allow entry (you can replace this logic)
      console.log('Age is valid, proceed.');
    } else {
      // Age is not valid, show a message or take action
      console.log('Age is not valid. You must be 18 or older.');
    }
  };

  return (
    <div>
      <h1>Age Gate</h1>
      <p>Please confirm your age:</p>
      <input
        type="number"
        placeholder="Enter your age"
        onChange={handleAgeInput}
      />
      <button onClick={handleAgeConfirmation}>Confirm</button>
    </div>
  );
};

export default AgeGate;
