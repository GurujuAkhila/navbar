import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const curr_theme = localStorage.getItem('curr_theme');
  const [theme, setTheme] = useState(curr_theme ? curr_theme : 'light')
  useEffect(()=>{
    localStorage.setItem('curr_theme', theme)
  },[theme])
  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
