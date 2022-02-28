import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notFound container-fluid">
            <Col sm={12} lg={5}>
                <h2 className="pt-5 text-dark text-start text  text-bold" style={{ borderBottom: "3px solid red" }}>PAGE NOT FOUND</h2>

                <Link to="/home">  <button className="btn btn-outline-dark">Go to home</button></Link>
            </Col>

        </div>
    );
};

export default NotFound;