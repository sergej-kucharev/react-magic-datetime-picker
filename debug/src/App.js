import React from 'react';
import DateTimePicker from './MagicDateTimePicker';

export function App() {
  const options = {
    value: new Date(),
  };
  return (
    <React.Fragment>
      <DateTimePicker { ...options } />
    </React.Fragment>
  );
}
