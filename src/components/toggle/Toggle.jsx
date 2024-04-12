import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Toggle = () => {
  const theme = useContext(ThemeContext);

  // Check if theme and theme.state are defined before accessing darkMode
  const darkMode = theme && theme.state ? theme.state.darkMode : false;

  const handleClick = () => {
    if (theme && theme.dispatch) {
      theme.dispatch({ type: 'TOGGLE' });
    } else {
      console.error('Theme or dispatch function is undefined.');
    }
  };

  // Remove the JSX code for the toggle button
  return null;
};

export default Toggle;
