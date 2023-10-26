import React from 'react';

interface DateInputProps {
  label: string;
  value: number | undefined;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DateInput({ label, value, min, max, onChange }: DateInputProps) {
  return (
    <input
      type="number"
      required
      placeholder={label}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
}

export default DateInput;
