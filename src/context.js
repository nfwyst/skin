import React, { useContext } from 'react';
import ThemeContext from './themes/contextTheme';

const Context = () => {
  const theme = useContext(ThemeContext);

  return (
    <div style={theme}>
      change theme by react context
    </div>
  )
}

export default Context
