import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import MapComponent from './Component/MapComponent';
import SearchPanel from './Component/SearchPanel';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
export const ThemeContact = createContext()

function App() {
  const [selectedplace, setSelectedplace] = useState(null)
  const [fullScreen, setFullScreen] = useState(false)
  return (
    <div className="md:flex max-h-screen overflow-hidden">
      {fullScreen && <ChevronRightIcon className="h-8 w-8 text-black absolute top-20 left-2  z-30" onClick={() => setFullScreen(false)} />}

      <div className={`${fullScreen ? "w-0" : 'w-full md:w-5/12'}  md:relative absolute md:static`}>
        <SearchPanel selectedplace={selectedplace} setSelectedplace={setSelectedplace} fullScreen={fullScreen} setFullScreen={setFullScreen}></SearchPanel>

      </div>
      <div className={fullScreen ? "w-full z-10" : "w-full md:w-7/12 z-10 relative"}>
        <MapComponent selectedplace={selectedplace} fullScreen={fullScreen}></MapComponent>
      </div>
    </div>
  );
}

export default App;
