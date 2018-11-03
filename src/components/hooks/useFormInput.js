import { useState } from 'react';

// Custom React Hook
export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handlerChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value: value,
    onChange: handlerChange
  }
}