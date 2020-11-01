import React from 'react';
import Header from '../Header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import Launch from '../Launch/Launch';
import Dinner from '../Dinner/Dinner';
import './Home.css'

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <Router>
                <div className="navlink">
                    <NavLink className="navSpace" to="/breakfast">Breakfast</NavLink>
                    <NavLink className="navSpace" to="/launch">Launch</NavLink>
                    <NavLink className="navSpace" to="/dinner">Dinner</NavLink>
                </div>
                <Switch>
                    <Route default path="/launch"><Launch /></Route>
                    <Route path="/breakfast"><Breakfast /></Route>
                    <Route path="/dinner"><Dinner /></Route>
                </Switch>
            </Router>

        </div>
    );
};

export default Home;