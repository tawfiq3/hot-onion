import React, { createContext, useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Launch from '../Launch/Launch';
import { fakeData } from '../FakeData/FakeData'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { Button } from 'react-bootstrap';

export const ItemContext = createContext()
const AllItem = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    setItem(fakeData)
  }, [])
  return (
    <Router>
      <div className="navlink">
        <Button style={{ margin: '20px', padding: '10px' }} variant="outline-secondary">
          <NavLink to="/breakfast">Breakfast</NavLink></Button>{'  '}
        <Button style={{ margin: '20px', padding: '10px' }} variant="outline-secondary">
          <NavLink to="/launch">Launch</NavLink></Button>{'  '}
        <Button style={{ margin: '20px', padding: '10px' }} variant="outline-secondary">
          <NavLink to="/dinner">Dinner</NavLink></Button>{' '}
      </div>
      <Switch>
        <Route default path="/launch"><Launch launchMeal={item.filter(meal => meal.catagories === 'launch')} /></Route>
        <Route path="/breakfast"><Breakfast morningMeal={item.filter(mMeal=>mMeal.catagories === 'breakfast')} /></Route>
        <Route path="/dinner"><Dinner nightMeal={item.filter(nMeal => nMeal.catagories === 'dinner')} /></Route>
      </Switch>
    </Router>

  );
};

export default AllItem;
