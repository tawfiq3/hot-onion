import React from 'react';
import { Card } from 'react-bootstrap';
import './Breakfast.css'
import BreakfastDetails from './BreakfastDetails';

const Breakfast = (props) => {
  const morningMeal = props.morningMeal
    return (
      <div onClick={console.log('Click Marse re')}
       className="justify-content-md-center" style={{display: 'flex',
      flexWrap: 'wrap'}}>
        {
            morningMeal.map(meal => <Card  className="shadow-lg bg-white rounded" style={{ width: '20rem',  padding:'30px',
            margin:'40px'}}>
            <Card.Img variant="top" src={meal.images} />
            <Card.Body>
             <Card.Title>{meal.name}</Card.Title>
              <Card.Text>
                {meal.shortDescription}
              </Card.Text>
              <h2>$ {meal.price}</h2>
            </Card.Body>
          </Card>)
        }
    </div>
);
};

export default Breakfast;