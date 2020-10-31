import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const roundedBorder = {
    borderRadius: '15px',
    paddingRight: '10px',
    paddingLeft: '10px',
    marginRight: '5px',
    marginLeft: '5px'
}
    return (
        <Navbar bg="light" variant="light" className="justify-content-between">
          <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="200"
            height="50"
            className="d-inline-block align-top"
          />{' '}
           </Navbar.Brand>
          <div className="justify-content-space">
            <FontAwesomeIcon style={{marginRight: '10px',size: '5X'}} icon={faShoppingCart}/>{' '}
            <Button style={roundedBorder} variant="primary">Sign Up</Button>{' '}
            <Button  style={roundedBorder}  variant="danger">Log Out</Button>
           </div>
      </Navbar>
    );
};

export default NavBar;