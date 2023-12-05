import React, {useEffect} from 'react';
import {Routes, Route, Link, useLocation} from "react-router-dom";
import '../App.css';
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar";

import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Tours from "../pages/Tours/Tours";
import Footer from "../components/templates/Footer/Footer";
import PackageTours from "../pages/Tours/PackageTours/PackageTours";
import Hotels from "../pages/Hotels/Hotels";
import ThingsToDo from "../pages/ThingsToDo/ThingsToDo";
import LocalCrafts from "../pages/LocalCrafts/LocalCrafts";
import LocalCraftDiscover from "../pages/LocalCrafts/LocalCraftsDiscover/LocalCraftDiscover";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
    <div className="App">
        <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/things-to-do" element={<ThingsToDo/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/tours/tour-details" element={<Tours/>} />
                <Route path="/tours" element={<PackageTours/>} />
                <Route path="/hotels" element={<Hotels/>} />
                <Route path="/local-crafts-discover/local-crafts" element={<LocalCrafts/>} />
                <Route path="/local-crafts-discover" element={<LocalCraftDiscover/>} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
