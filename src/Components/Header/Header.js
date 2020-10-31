import React from 'react';
import NavBar from './NavBar';
import bgImage from '../../images/bannerbackground.png'
import { Button, Carousel, FormControl, InputGroup } from 'react-bootstrap';
const Header = () => {
    const textColor = {
        color: 'black'
    }
    const roundedBorder = {
        borderRadius: '15px',
        paddingRight: '10px',
        paddingLeft: '10px',
        marginRight: '10px',
        marginLeft: '10px'
    }

    const content = {
        position: 'absolute',
        bottom: '40%',
        msTransform: 'translate(-50 %, -50 %)',
        transform: 'translate(-50 %, -50 %)'
}
return (
    <div>
        <NavBar></NavBar>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImage}
                    alt="Best Foods are waiting for you!"
                />
                <Carousel.Caption style={content}>
                    <h2 style={textColor}>Best Foods are waiting for you!</h2>
                    <InputGroup>
                        <FormControl style={roundedBorder}
                            placeholder="Search Food Item"
                            aria-label="Search Food Item"
                            aria-describedby="basic-addon2"
                        />
                        {' '}
                        <InputGroup.Append>
                            <Button style={roundedBorder} variant="danger">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
);
};

export default Header;