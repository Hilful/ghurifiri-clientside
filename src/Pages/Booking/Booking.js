import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/UseAuth';
import './Booking.css';
const Booking = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [isupdated, setIsUpdated] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/';
    useEffect(() => {
        fetch(`https://protected-escarpment-85835.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    // onsubmit function
    const onSubmit = data => {
        setIsUpdated(true)
        data.userId = user.uid;
        axios.post('https://protected-escarpment-85835.herokuapp.com/totalBooking', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal(
                        "Booking Successful",
                        "Your Entered Information has been Successfully save on our Database",
                        "success"
                    );
                    history.push(redirect_uri)
                }
                else {
                    swal(
                        "Booked failed",
                        "Your Entered Information has been Successfully save on our Database",
                        "error"
                    );
                }
                setIsUpdated(false)
            }).catch((err) => {
                console.log(err.message);
            })
    }
    // set input value
    setValue("name", user.displayName);
    setValue("Email", user.email);
    setValue("Title", users.title);
    setValue("image", users.img);
    setValue("status", "pending...");
    return (
        <>
            <div className="text-light form-design1 pt-5">
                <h2 className="p-5 text-info">Book your Favourite Package</h2>
                <Row lg={2} sm={1} className="container-fluid">
                    <Col lg={6} xm={12}>
                        {/* form for booking package */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                          {/* userName */}
                            <input style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}   {...register("name", { required: true, maxLength: 30 })} />
                            <br />
                            {/* email */}
                            <input style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }}  {...register("Email", { required: true })} />
                            <br />
                            {/* date */}
                            <input style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="date" {...register("Date", { required: true })} /> <br />
                           {/* address */}
                            <input placeholder="Address" style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="text" {...register("address", { required: true })} /> <br />
                            {/* phone number */}
                            <input placeholder="Mobile Number" style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="number" {...register("mobile", { required: true })} /> <br />
                            {/* description */}
                            <input placeholder="Description" style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="text" {...register("Description", { required: true })} /> <br />
                            <input style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="text" className="d-none" {...register("image", { required: true })} /> <br />
                            <input style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.01)" }} type="text" className="d-none" {...register("status", { required: true })} /> <br />

                            <button className="btn btn-info h-100" type="submit" >
                                {isupdated ? (
                                    <Spinner
                                        animation="border"
                                        variant="light"
                                        style={{ height: "25px", width: "25px" }}
                                    />
                                ) : (
                                    "Booking Now"
                                )}

                            </button>


                        </form>
                    </Col>
                    {/* colum 6 */}
                    <Col>
                        <div className="container2  position-relative flex-wrap">
                            <div className="card2 d-flex position-relative flex-column">
                                <div className='imgContainer'>
                                    <img src={users.img} alt="" />
                                </div>
                                <div className="content">
                                    <h5 className="text-info">{users.title}</h5>
                                    <p>{users.description} </p>
                                    <h6 className="text-danger border border-1 p-1">Cost :{users.price}</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Booking;