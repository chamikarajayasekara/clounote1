import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import '../App.css';
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar";

import ThingsToDo from "../pages/ThingsToDo";
import Login from "../pages/Login";
import Home from "../pages/Home/Home";
import Tours from "../pages/Tours/Tours";

function App() {

  return (
    <div className="App">
        <NavigationBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/things-to-do" element={<ThingsToDo/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/tours" element={<Tours/>} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
    </div>
  );
}

export default App;
