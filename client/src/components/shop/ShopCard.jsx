import React from "react"
import axios from "axios"
import { list } from "../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'
const ShopCard = () => {

    const [plots, setPlots] = useState([]);
    const [startingPrice, setStartingPrice] = useState(0);
    const [endingPrice, setEndingPrice] = useState(100000000);
    const [startingArea, setStartingArea] = useState(5);
    const [endingArea, setEndingArea] = useState(100);
    const [location, setLocation] = useState('All');

    useEffect(() => {
        console.log(endingArea);
        const getPlotsData = async () => {
            try {
                console.log(startingPrice);
                console.log(endingPrice);
                console.log(startingArea);
                console.log(endingArea);

                const response = await axios.post('http://localhost:8000/api/plot/display', {
                    "startingPrice": startingPrice,
                    "endingPrice": endingPrice,
                    "startingArea": startingArea,
                    "endingArea": endingArea,
                    "location": location
                });
                const data = response.data;

                setPlots(data);
                console.log(data)

            } catch (error) {
                console.log(error.response);
            }
        }
        getPlotsData();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const intStartingPrice = parseInt(startingPrice, 10);
            const intEndingPrice = parseInt(endingPrice, 10);
            const intStartingArea = parseInt(startingArea, 10);
            const intEndingArea = parseInt(endingArea, 10);
            console.log(intStartingPrice);
            console.log(intEndingPrice);
            console.log(intStartingArea);
            console.log(intEndingArea);
            const response = await axios.post('http://localhost:8000/api/plot/display', {
                "startingPrice": intStartingPrice,
                "endingPrice": intEndingPrice,
                "startingArea": intStartingArea,
                "endingArea": intEndingArea,
                "location": location
            });
            const data = response.data;

            setPlots(data);
            console.log(plots)

        } catch (error) {
            console.log(error);
        }

    }

    const buy = async (soldBy, price) => {
        const email = await JSON.parse(localStorage.getItem("currentUser")).email;
        console.log('AAA');
        try {
            const response = await axios.post('http://localhost:8000/api/plot/buy', {
                "buyerEmail": email,
                "sellerEmail": soldBy,
                "price": price
            });
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            console.log(response.data)
            window.location.reload();

        } catch (error) {
            console.log(error);
        }
    }

    const handleDropdownChange = async (event) => {
        console.log(event.target.value)
        setLocation(event.target.value);
        try {
            const response = await axios.post('http://localhost:8000/api/plot/display', {
                "startingPrice": startingPrice,
                "endingPrice": endingPrice,
                "startingArea": startingArea,
                "endingArea": endingArea,
                "location": event.target.value
            });
            const data = response.data;

            setPlots(data);
            console.log(plots)

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <><div><Link to='/sell'><button type="button">Sell Property</button></Link></div>
            <form className='flex'>
                <div className='box'>
                    <span>Min Price</span>
                    <input value={startingPrice} onChange={(e) => setStartingPrice(e.target.value)} type="text" placeholder="0" id="sp" name="sp" />
                </div>
                <div className='box'>
                    <span>Max Price</span>
                    <input value={endingPrice} onChange={(e) => setEndingPrice(e.target.value)} type="text" placeholder="1000000" id="ep" name="ep" />
                </div>
                <div className='box'>
                    <span>Min Area(in Marlas)</span>
                    <input value={startingArea} onChange={(e) => setStartingArea(e.target.value)} type="text" placeholder="5" id="sa" name="sa" />
                </div>
                <div className='box'>
                    <span>Max Area(in Marlas)</span>
                    <input value={endingArea} onChange={(e) => setEndingArea(e.target.value)} type="text" placeholder="100" id="ea" name="ea" />
                </div>
                <select id="dropdown" name="dropdown" value={location} onChange={handleDropdownChange}>
                    <option value="DHA">DHA</option>
                    <option value="Model Town">Model Town</option>
                    <option value="All">All</option>
                </select>
                <button className='btn1' type="submit" value="submit" onClick={handleSubmit}>
                    <i className='fa fa-search'></i>

                </button>
            </form>
            <div className='content grid3 mtop'>
                {plots.map((val, index) => {
                    const { name, location, price, area, type, image, soldBy } = val;
                    return (
                        <div className='box shadow' key={index}>
                            <div className='img'>
                                <img src={`./images/shop/${(index % 5) + 1}.jpg`} alt='' />
                            </div>
                            <div className='text'>
                                <div className='category flex'>
                                    <span style={{ background: "#25b5791a", color: "#25b579" }}>For Sale</span>
                                    <i className='fa fa-heart'></i>
                                    <span>{type}</span>
                                </div>
                                <h4>{name}</h4>
                                <p>
                                    <i className='fa fa-location-dot'></i> {location}
                                </p>
                                <p>
                                    <i className='fa fa-are'></i>Size: {area} Marla
                                </p>
                                <Link to={{ pathname: '/chat', email: soldBy }}><button className='btn2 ee' type="submit" value="submit">
                                    Chat
                                </button></Link>

                            </div>
                            <div className='button flex'>
                                <div>
                                    <h6>PKR{price}</h6>
                                </div>
                                <div>
                                    <Link to={{ pathname: '/book', email: soldBy }}><button className='btn1 book' >Book appointment</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )

}
export default ShopCard
