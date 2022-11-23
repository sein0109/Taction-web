import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Team from './pages/Team';
import Partner from './pages/Patner';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

function App() {
  return (
    <div>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Roadmap" element={<Roadmap />} />
     <Route path="/Team" element={<Team />} />
     <Route path="/Partner" element={<Partner />} />
    </Routes>
    </div>
  );
}

export default App;
