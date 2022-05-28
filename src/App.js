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
    <div className="flex h-screen overflow-hidden">
      <div className={`${fullScreen ? "w-0" : 'w-5/12'} px-4 relative`}>
        <SearchPanel setSelectedplace={setSelectedplace}></SearchPanel>
        {fullScreen
          ? <ChevronRightIcon className="h-8 w-8 text-black absolute top-6 right-2 " onClick={() => setFullScreen(false)} />
          : <ChevronLeftIcon className="h-8 w-8 text-black absolute top-6 right-2 " onClick={() => setFullScreen(true)} />}
      </div>
      <div className={fullScreen ? "w-full" : "w-7/12"}>
        <MapComponent selectedplace={selectedplace} fullScreen={fullScreen}></MapComponent>
      </div>
    </div>
  );
}

export default App;
