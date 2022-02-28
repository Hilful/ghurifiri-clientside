import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import './Services.css';
const Services = () => {
    const [services, setServices] = useState([]);
    const {isLoading}=useAuth();
    useEffect(() => {
        fetch('https://protected-escarpment-85835.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    if (isLoading) {
      return (
        <div className="spinner-border text-secondary d-flex justify-content-center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
        <div className="margin container">
            <h3 className="text-center mb-5">WE PROVIDE <span className="text-danger">THE BEST TOUR</span></h3>
            <Container>
                <Row lg={3} sm={1} className="container">
                    {
                        services.map(service =><Col key={service._id} md={4}>
                            <Fade left>
                            <Card className="card-design">
                                <div>
                                    <Card.Img variant="top" src={service?.img} />
                                </div>
                                <div className="p-3">
                                    <Card.Title style={{ fontSize: '20px', color: "red" }}>{service.title}</Card.Title>
                                    <p className="text text-bold text-dark">{service.description.slice(0,30)}</p>
                                    <small><i className="far fa-clock"></i> 7 days <span className="ps-5"><i className="fas fa-users"></i> Max People:5</span></small>
                                    <Card.Text>

                                    </Card.Text>
                                    <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                                        <h6 className="text-danger">${service.price}</h6>
                                        <Link to={`/booking/${service._id}`}><button onClick={() => (service._id)} className="btn btn-danger">Book now</button></Link>
                                    </div>
                                </div>
                            </Card>
                            </Fade>
                        </Col>
                        
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};
export default Services;



   // <div className="card border-0 me-lg-4 mb-lg-0 mt-5">
                //     <div className="backgroundEffect"></div>
                //     <div className="pic">
                //          <img src={service.img} alt=""/>
                //         <div className="date">{service.time}</div>
                //     </div>
                //     <div className="content">


                //     </div>
                // </div>