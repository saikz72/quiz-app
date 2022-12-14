import React from 'react';
import Style from './Button.module.css';

export default function Button({ children }) {
  return (
    <button className={Style.button}>
      <span>{children}</span>
    </button>
  );
}
