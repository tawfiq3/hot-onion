import React from 'react';
import { Card } from 'react-bootstrap';

const Dinner = (props) => {
    const nightMeal = props.dinner
    return (
        <div>
             <div className="justify-content-md-center" style={{display: 'flex',
          flexWrap: 'wrap'}}>
            {
                nightMeal.map(meal => <Card  className="shadow-lg bg-white rounded" style={{ width: '20rem',  padding:'30px',
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
        </div>
    );
};

export default Dinner;