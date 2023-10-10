import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import '../App.css';
import NavigationBar from "../components/organisms/NavigationBar/NavigationBar";

import ThingsToDo from "../pages/ThingsToDo";
import Login from "../pages/Login";
import Home from "../pages/Home";

function App() {

  return (
    <div className="App">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/things-to-do" element={<ThingsToDo/>} />
                <Route path="/login" element={<Login/>} />
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
    </div>
  );
}

export default App;
