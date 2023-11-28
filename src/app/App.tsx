import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import '../App.css';
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar";

import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Tours from "../pages/Tours/Tours";
import Footer from "../components/templates/Footer/Footer";
import PackageTours from "../pages/Tours/PackageTours/PackageTours";
import Hotels from "../pages/Hotels/Hotels";
import ThingsToDo from "../pages/ThingsToDo/ThingsToDo";

function App() {

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
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
