import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/UseAuth';
import './MyPlace.css';
const MyPlace = () => {
    const [places, setPlaces] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://protected-escarpment-85835.herokuapp.com/myBooking/${user.uid}`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);
    // handle delete btn
    const handleDeletBtn = (id, uid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://protected-escarpment-85835.herokuapp.com/totalBooking/${id}/${uid}`)
                    .then(res => {
                        const remaining = places.filter(place => place._id !== id)
                        setPlaces(remaining)
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className="margin myPlace container-fluid">
            <Row lg={3} gap={3}>
                {
                    places.map(place => <div key={place._id} className="card">
                        <img src={place.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{place.Title}</h5>
                            <p className="card-text">{place.status}</p>
                            <button onClick={() => handleDeletBtn(place._id, place.userId)} className="btn btn-danger">Cancel</button>
                        </div>
                    </div>)
                }
            </Row>
        </div>
    );
};
export default MyPlace;