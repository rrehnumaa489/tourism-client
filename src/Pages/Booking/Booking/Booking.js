import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div  className=" row p-5">
             <div className="col-lg-4"></div>
            <div className="col-lg-4">
            <h4>Booking ID: <small>{serviceId}</small></h4>
            <h2>Place Name: {service.name}</h2>
            <h5>Price : {service.price}</h5>
            <img className="img-fluid" src={service.img} alt="" />
            <p>{service.description}</p>
            <Link to='/manageService'>
                <button className="btn btn-warning">Book Now</button>
            </Link>
            </div>
            <div className="col-lg-4"></div>
        </div>
    );
};

export default Booking;
