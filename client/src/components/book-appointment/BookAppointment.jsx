import React from "react"
import Button from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import './bookappointment.css'


const BookAppointment = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [contact, setContact] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/appointment/book", {
                "date": date,
                "time": time,
                "contact": contact,
                "buyer": JSON.parse(localStorage.getItem('currentUser')).email,
                "seller": props.location.email,
            });
            localStorage.setItem("userAppointments", JSON.stringify(res.data))
            console.log(res.data);
            window.location.href = "/"
        } catch (error) {
            console.log(error);
        }
    }
    function handleDateChange(event) {
        setDate(event.target.value);
    }
    function handleTimeChange(event) {
        setTime(event.target.value);
        console.log(time);
    }

    return (
        <>
            <div className="form">
                <form>
                    <div className="input-container">
                        <label>Date </label>
                        <input type="date" value={date} onChange={handleDateChange} />

                        {/* <input value={date} onChange={(e) => setDate(e.target.value)} type="name" placeholder="" id="name" name="name" /> */}

                    </div>
                    <div className="input-container">
                        <label>Time </label>

                        <input type="time" name="time" min="10:00" max="16:00" value={time} onChange={handleTimeChange} />

                    </div>
                    <div className="input-container">
                        <label>Your Contact Number </label>
                        <input value={contact} onChange={(e) => setContact(e.target.value)} type="name" placeholder="" id="type" name="type" />
                    </div>
                    <button className="btn1 subBtn" as="input" type="submit" value="Submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookAppointment
