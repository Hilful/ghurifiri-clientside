import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';
import './NavBar.css';
const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const navStyle = {
    color: "red"
  }
  return (
    <div>
      <Navbar bg="dark" fixed="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="text-light">
            <img className="borderRight" src="https://i.ibb.co/Js2mPJ0/ghurifiri.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <NavLink activeStyle={navStyle} className="navDesign pt-2" to="/home">Home</NavLink>
              <NavLink className="navDesign pt-2" activeStyle={navStyle} to="/about">About Us</NavLink>
              <NavLink activeStyle={navStyle} className="navDesign pt-2" to="/blog">Blog</NavLink>
              {/* dropdown */}
              <Dropdown>
                <Dropdown.Toggle className="btn btn-dark pb-3" >
                  Pages
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><NavLink className="navDesign text-dark" activeStyle={navStyle} to="/features">Our Features</NavLink></Dropdown.Item>
                  <Dropdown.Item ><NavLink className="navDesign text-dark" activeStyle={navStyle} to="/services">Services</NavLink></Dropdown.Item>
                  <Dropdown.Item> <NavLink className="navDesign text-dark" activeStyle={navStyle} to='/contact'>Contact us</NavLink></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* hero section */}
              {user.displayName &&
                <NavLink activeStyle={navStyle} className="navDesign pt-2" to="/myPlace">My Place</NavLink>}
              {user.displayName && <NavLink activeStyle={navStyle} className="navDesign pt-2" to="/totalBooking">Total Booking</NavLink>}
              { user.displayName &&
                <NavLink activeStyle={navStyle} className="navDesign pt-2" to="/addServices">Add Service</NavLink>}
            </Nav>
            <Nav>
              {user.displayName &&
                <div>
                  <img src={user?.image} alt="" />
                  <button className="btn me-3 mt-2 text-light p-2" style={{ height: '50px' }}>{user.displayName}</button>
                </div>
              }
              {user.displayName ?
                <button className="btn btn-outline-light button-design rounded-pill" style={{width:"120px",height:"50px"}} onClick={logOutUser}>Logout</button>
                : <NavLink activeClassName="navDesign" className="navDesign" to="/login">
                  <button className="btn btn-outline-light button-design rounded-pill" style={{width:"100px",height:"50px"}}>Login</button>
                </NavLink>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;