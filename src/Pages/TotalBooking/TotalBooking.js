import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './TotalBooking.css';
const TotalBooking = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://protected-escarpment-85835.herokuapp.com/totalBooking')
            .then(res => res.json())
            .then(data => setPlaces(data))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    // handleDelete booking
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
                    });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    const updateStatus = (id, uid) => {
        axios.put(`https://protected-escarpment-85835.herokuapp.com/totalBooking/${id}/${uid}`)
            .then(() => {
            }).catch((error) => {
                console.log(error);
            })
        const findItem = places.find(book => book._id === id);
        if (findItem) {
            findItem.status = 'approve';
            const reamingData = places.filter(book => book._id !== id);
            setPlaces([findItem, ...reamingData])
        }
    }
    return (
        <div className="margin booking">
            <table className="container table table-responsive alt-2">
                <thead>
                    <tr>
                        <th>Room Type</th>
                        <th>User Name</th>
                        <th>Today's price</th>
                        <th>Status</th>
                        <th>Booking</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        places.map(place => <tr key={place._id}>
                            <td> <img src={place.image} data-at2x="pic/190x130@2x.jpg" alt="" width="190" height="130" />
                                <h6>{place.Title}</h6>
                                {place.Description ? place.Description.slice(0, 30) : <p className="mb-0">(Extra beds available: Crib, <br /> Rollaway bed) Room sleeps <br /> 4 guests</p>}
                            </td>
                            <td><p>{place.name}</p></td>
                            <td className="room-price">$120</td>
                            <td className="room-price text-center">
                                <h2 className="btn btn-danger">{place.status}</h2>
                            </td>
                            <td><button onClick={() => handleDeletBtn(place._id, place.userId)} className="btn text-danger"><i className="fas fa-trash"></i></button>
                                <button onClick={() => updateStatus(place._id, place.userId)}
                                    className="btn"><img style={{ height: '25px' }} src="https://i.ibb.co/7YhPJPw/updated.png" alt="" /></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};
export default TotalBooking;