import { useState } from 'react';

import ThemeContext, { themes } from './themes/contextTheme';
import Context from './context';

import './App.css';
import './override-class.scss';
import './css-variable-app.css';

function App() {
  const [state, setState] = useState({
    overrideClass: 'white',
    context: 'dark',
    cssVariableThemeName: 'red',
  });

  function updateState(key, value) {
    return () => setState(state => ({ ...state, [key]: value }))
  }

  return (
    <div className="App">
      <h1>覆盖样式</h1>
      <div className={`overrideClass theme-${state.overrideClass}`}>
        <div className="theme-options">
          <div id="theme-white" onClick={updateState('overrideClass', 'white')} />
          <div id="theme-blue" onClick={updateState('overrideClass', 'blue')} />
          <div id="theme-orange" onClick={updateState('overrideClass', 'orange')} />
          <div id="theme-purple" onClick={updateState('overrideClass', 'purple')} />
          <div id="theme-green"  onClick={updateState('overrideClass', 'green')} />
          <div id="theme-black"   onClick={updateState('overrideClass', 'black')}  />
        </div>

        <div className="content-box">
          <h3>Multiple Themes Switcher / React</h3>
          <h5>(ReactJS, SCSS/css, Local Storage</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at error maxime necessitatibus rerum mollitia temporibus adipisci iusto nesciunt explicabo? Exercitationem possimus dolore neque, a hic nemo reprehenderit in ipsam?
          </p>
          <p>-- webstylepress.com</p>
        </div>
      </div>
      <h1 style={{display: 'inline-block', marginRight: 10, verticalAlign: 'middle'}}>使用 css 变量</h1>
      <button 
        onClick={updateState('cssVariableThemeName', state.cssVariableThemeName === 'red' ? 'blue' : 'red')}>
          switch
      </button>
      <h2 className={`css-variable-app ${state.cssVariableThemeName}`}>hello css 变量</h2>
      <h1 style={{display: 'inline-block', marginRight: 10, verticalAlign: 'middle'}}>
        使用 Context 传递 style
      </h1>
      <button 
        onClick={updateState('context', state.context === 'dark' ? 'white' : 'dark')}>
          switch
      </button>
      <ThemeContext.Provider value={themes[state.context]}>
        <Context />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
