import React, { useState } from 'react';
import DateForm from './components/DateForm';

function AgeGate() {
  const [ofAge, setOfAge] = useState(false);

  // Define a function to set the 'ofAge' state in the parent component
  const updateOfAge = (value: boolean) => {
    setOfAge(value);
  };
  return (
    <div className={`bsi__age-gate ${ofAge ? 'success' : 'false'}`}>
      <h1>Age Gate</h1>
      <DateForm updateOfAge={updateOfAge} />
      {ofAge}
    </div>
  );
}

export default AgeGate;
