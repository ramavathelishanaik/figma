import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./menu/home"
import Discover from './menu/discover'
import Awards from './menu/awards'
import Celebrity from './menu/celebrities'
import Recent from './library/recents'
import Rated from './library/rated'
import Downloads from './library/downloads'
import Tv from './pages/tvshow'

const App=()=>{
    return(
        <BrowserRouter>
        <Sidebar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/awards" element={<Awards />} />
                <Route path="/celebrity" element={<Celebrity />} />
                <Route path="/recent" element={<Recent />} />
                <Route path="/rated" element={<Rated />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/tv" element={<Tv/>} />
            </Routes>
            </Sidebar>
        </BrowserRouter>
    )
}
export default App