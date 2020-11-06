import React from 'react';
import Header from '../Header/Header';
import './Home.css'
import AllItem from '../AllItem/AllItem';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <AllItem></AllItem>
        </div>
    );
};

export default Home;