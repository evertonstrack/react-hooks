import React from 'react';
import './row.scss';

const Row = props => (
  <div className="field">
    <label>{props.label}</label>
    {props.children}
  </div>
);

export default Row;