import React from 'react';
import { Card } from 'react-bootstrap';
import './Breakfast.css'

// const spacing = {
//     padding:'30px',
//     margin:'20px'
// }

const Breakfast = (props) => {
    const morningMeal = props.breakfast;
    console.log(morningMeal)

    return (
        <div className="justify-content-md-center" style={{display: 'flex',
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
                </Card.Body>
              </Card>)
            }
        </div>
    );
};

export default Breakfast;