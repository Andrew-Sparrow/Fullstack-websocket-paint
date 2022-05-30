import React from 'react';
import './styles/app.scss'
import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';

function App(props) {
  return (
    <div className='app'>
      <SettingBar />
      <Toolbar />
      <Canvas width={600} height={400} />
    </div>
  );
}

export default App;
