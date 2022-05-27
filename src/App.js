import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import MapComponent from './Component/MapComponent';
export const ThemeContact = createContext()

function App() {
  const [position, setPosition] = useState([])
  return (
    <div className="App flex">
      <div className='w-2/6 bg-slate-500'>
        <h3>hello</h3>
      </div>
      <div className='w-4/6 '>
        <MapComponent></MapComponent>
      </div>
    </div>
  );
}

export default App;
