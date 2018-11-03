import React, { useContext, useEffect } from 'react';
import Row from '../Row/Row';
import { ThemeContext, LocaleContext } from '../../context';
import useFormInput from '../hooks/useFormInput';
import './card.scss';

export default function CardWithHooks() {
  const name = useFormInput('Jubileu');
  const lastname = useFormInput('Pipoca');
  const { theme } = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  
  useEffect(() => {
    document.title = name.value + ' ' + lastname.value;
  });

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
