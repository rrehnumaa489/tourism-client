import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete??');
        if(proceed){
            const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount){
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
                alert("Deleting")
            }
        })
        }
    }
    return (
        <div id="manageService">
            <h2>Manage services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h3>Service Name : {service.name}</h3>
                    <Link to={`/services/update/${service._id}`}><button className="btn btn-warning m-3 px-3">Update</button></Link>
                    <button className="btn btn-warning m-3 px-3" onClick={ () => handleDelete(service._id) }>Delete</button>
                    
                </div>)
            }
        </div>
    );
};

export default ManageServices;