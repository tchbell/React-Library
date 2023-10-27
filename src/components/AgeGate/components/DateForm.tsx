import DateInput from './DateInput';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

type UpdateOfAgeFunction = (value: boolean) => void;

interface DateFormProps {
  updateOfAge: UpdateOfAgeFunction;
}

function DateForm({ updateOfAge }: DateFormProps) {
  // Setting day, month, year to number | undefined so that the inputs placeholders still will show
  const [day, setDay] = useState<number | undefined>(undefined);
  const [month, setMonth] = useState<number | undefined>(undefined);
  const [year, setYear] = useState<number | undefined>(undefined);
  const [error, setError] = useState('');
  const [userAge, setUserAge] = useState(0);

  const [cookies, setCookie] = useCookies([
    'AgeGateRememberMe',
    'AgeGateCountryVal',
  ]);
  const todayDate = new Date();
  const expiryDateNotRemember = new Date().setDate(todayDate.getDate() + 1);

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dayValue: number | undefined = day;
    const monthValue: number | undefined = month;
    const yearValue: number | undefined = year;

    if (
      dayValue === undefined ||
      monthValue === undefined ||
      yearValue === undefined ||
      isNaN(dayValue) ||
      isNaN(monthValue) ||
      isNaN(yearValue) ||
      dayValue < 1 ||
      dayValue > 31 ||
      monthValue < 1 ||
      monthValue > 12
    ) {
      setError('Please enter a valid date.');
    } else {
      setError('');

      const currentDate: Date = new Date();
      const userBirthDate: Date = new Date(yearValue, monthValue - 1, dayValue);
      const age: number =
        currentDate.getFullYear() - userBirthDate.getFullYear();
      setUserAge(age);

      if (age >= findLegalDrinkingAge()) {
        setError('Old enough to drink.');
        updateOfAge(true);
        // This cookie logic is based off AgeGate-React
        setCookie('AgeGateRememberMe', true, {
          expires: new Date(expiryDateNotRemember),
          path: '/',
          secure: true,
        });
        //
      } else {
        setError('Not old enough to drink.');
        updateOfAge(false);
      }
    }
  };

  const findLegalDrinkingAge: () => number = () => {
    return 18;
  };

  return (
    <>
      <form className="bsi__age-gate__form" action="" onSubmit={handleSubmit}>
        <DateInput
          label="day"
          min={1}
          max={12}
          value={day}
          onChange={handleDayChange}
        />
        <DateInput
          label="month"
          min={1}
          max={31}
          value={month}
          onChange={handleMonthChange}
        />
        <DateInput
          label="Year"
          min={1900}
          max={2023}
          value={year}
          onChange={handleYearChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
      {userAge}
    </>
  );
}

export default DateForm;
