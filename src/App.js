import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Overview from './components/overview/main';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  var statusLogin = (value) => { setIsLogin(value); }

  return (
    <div className="App">
      <Sidebar statusLogin={statusLogin} />
      <Overview statusLogin={isLogin} changeLogin={statusLogin} />
    </div>
  );
}

export default App;
