import React, { useState, useContext } from 'react';
import Row from '../Row/Row';
import { ThemeContext, LocaleContext } from '../../context';
import './card.scss';

export default function CardWithHooks() {
  const name = useFormInput('Jubileu');
  const lastname = useFormInput('Pipoca');
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  
  return (
    <section className={theme}>
      <Row label="Nome">
        <input id="name" {...name} />
      </Row>
      <Row label="Sobrenome">
        <input id="lastname" {...lastname} />
      </Row>
      <Row label="Idioma">
        <p>{locale}</p>
      </Row>
    </section>
  );
}

// Custom React Hook
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handlerChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value: value,
    onChange: handlerChange
  }
}