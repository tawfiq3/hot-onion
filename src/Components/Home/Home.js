import React from 'react';
import { Button } from 'react-bootstrap';
import AllItem from '../AllItem/AllItem';
import Breakfast from '../AllItem/Breakfast/Breakfast';
import Header from '../Header/Header';

const Home = (props) => {
    return (
        <div>
            <Header></Header>
            <div style={{textAlign: 'center',margin:'40px'}}>
                <Button  variant="outline-secondary">Breakfast</Button>{' '}
                <Button  variant="outline-secondary">Launch</Button>{' '}
                <Button  variant="outline-secondary">Dinner</Button>{' '}
            </div>
            <AllItem></AllItem>
            
        </div>
    );
};

export default Home;