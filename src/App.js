import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import MapComponent from './Component/MapComponent';
import SearchPanel from './Component/SearchPanel';
export const ThemeContact = createContext()

function App() {
  const [position, setPosition] = useState([])
  console.log(position)
  return (
    <div className="flex h-screen overflow-hidden">
      <div className='w-5/12 bg-slate-500'>
        <SearchPanel setPosition={setPosition}></SearchPanel>
      </div>
      <div className='w-7/12 '>
        <MapComponent position={position}></MapComponent>
      </div>
    </div>
  );
}

export default App;
