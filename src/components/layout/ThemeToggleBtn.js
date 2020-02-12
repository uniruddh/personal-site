import React, { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import lightbulbIcon from '../../images/lightbulb.svg';

// TODO write test for theme toggle functionality

const ThemeToggleBtn = () => {
  const themeData = useContext(ThemeContext);
  console.log(themeData);

  return (
    <button
      id="themeToggleBtn"
      onClick={themeData.toggleTheme}
      aria-label="toggle dark and light theme"
      data-testid="theme-toggle-btn"
    >
      <img src={lightbulbIcon} alt="lightbulb icon" />
    </button>
  );
};

export default ThemeToggleBtn;
