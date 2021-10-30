import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:5000/services', data)
    .then(res => {
        if(res.data.insertedId){
            alert("Added Successfully")
            reset();
        }
        console.log(res)
    })
    };
    return (
        <div id="addService" className="bg-light p-5 my-5 container add-service p-5">
            <div className="row">
            <h1 className="mb-5">Add Your Service</h1>
                <div className="col-lg-2"></div>
                <div className="col-lg-12">
                
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
};

export default AddService;