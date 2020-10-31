import React from 'react';
import { Card } from 'react-bootstrap';
import './Launch.css'

const Launch = (props) => {
    const noonMeal = props.launch
    return (
        <div className="justify-content-md-center" style={{display: 'flex',
        flexWrap: 'wrap'}}>
          {
              noonMeal.map(meal => <Card  className="shadow-lg bg-white rounded" style={{ width: '20rem',  padding:'30px',
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

export default Launch;