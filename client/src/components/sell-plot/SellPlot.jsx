import React from "react"
import Button from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import './sellplot.css'
import FileInput from "./FileInput";


const SellPlot = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [area, setArea] = useState('');
    var [dataPost, setData] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageString = dataPost.toString();



            const res = await axios.post("http://localhost:8000/api/plot/sell", {
                "name": name,
                "location": location,
                "type": type,
                "price": price,
                "area": area,
                "soldBy": JSON.parse(localStorage.getItem('currentUser')).email,
                // "image": imageString
            }, { withCredentials: true });
            // localStorage.setItem("currentUser", JSON.stringify(res.data))
            console.log(res.data);
            window.location.href = "/"
        } catch (error) {
            console.log(error.message);
        }
    }
    function handleFileSelect(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            dataPost = reader.result;
            // console.log(dataPost);
        }

    }


    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Name </label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="" id="name" name="name" />

                    </div>
                    <div className="input-container">
                        <label>Location </label>
                        <input value={location} onChange={(e) => setLocation(e.target.value)} type="name" placeholder="" id="location" name="location" />
                    </div>
                    <div className="input-container">
                        <label>Type </label>
                        <input value={type} onChange={(e) => setType(e.target.value)} type="name" placeholder="" id="type" name="type" />
                    </div>
                    <div className="input-container">
                        <label>Area (In Marlas) </label>
                        <input value={area} onChange={(e) => setArea(e.target.value)} type="name" placeholder="" id="area" name="area" />
                    </div>
                    <div className="input-container">
                        <label>Price </label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="name" placeholder="" id="price" name="price" />
                    </div>
                    <div>
                        <h1>Upload an Image</h1>
                        <FileInput onFileSelect={handleFileSelect} />
                    </div>
                    <Button className="subBtn btn1" as="input" type="submit" value="Submit" onClick={handleSubmit} />{' '}
                </form>
            </div>
        </>
    )
}

export default SellPlot
