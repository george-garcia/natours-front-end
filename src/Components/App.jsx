import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Overview from "./Overview";
import '../css/style.css';
import Footer from "./Footer";
import Tour from "./Tour";
import Login from "./Login";

const App = () => {
    return (
        <div>
            <HashRouter>
                <div>
                    <Nav/>
                    <Route path='/' exact component={Overview}/>
                    <Route path='/tours/:tourId' exact component={Tour}/>
                    <Route path='/login' exact component={Login} />
                    <Footer/>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;