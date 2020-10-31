import React, { useEffect, useState } from 'react';
import {fakeData} from '../FakeData/FakeData'
import Breakfast from './Breakfast/Breakfast'
import Launch from './Launch/Launch';
import Dinner from './Dinner/Dinner'
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const AllItem = () => {
    const [item,setItem] = useState([])
    useEffect(()=>{
        setItem(fakeData)
    },[])
    
    const breakfast = item.filter(item => item.catagories === 'breakfast')
    const launch = item.filter(item => item.catagories === 'launch')
    const dinner = item.filter(item => item.catagories === 'dinner')
    return (
        <div>
         <h1>Breakfast</h1>
         <Breakfast breakfast={breakfast}></Breakfast>
         <br></br>
         <h1>Launch</h1>
         <Launch launch={launch}></Launch>
         <h1>Dinner</h1>
         <Dinner dinner={dinner}></Dinner>
        </div>
    );
};

export default AllItem;