import React from 'react';

import { IButton } from './interfaces';

export const Button = ({ disabled, loading, onClick, text, theme }) => {
  return (
    <button
      className={`button__${getClass(theme)}${loading ? ' loading' : ''}`}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = IButton;

Button.THEMES = {
  PRIMARY: 'primary'
};

const THEME_CLASS_MAP = {
  [Button.THEMES.PRIMARY]: 'primary'
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  theme: Button.THEMES.PRIMARY
};

const getClass = theme => THEME_CLASS_MAP[theme] || Button.THEMES.PRIMARY;
