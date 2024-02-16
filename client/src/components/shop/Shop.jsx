import React from "react"
import Heading from "../common/Heading"
import "./shop.css"
import ShopCard from "./ShopCard"

const Shop = () => {
    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Buy or Sell Property' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                    <ShopCard />
                </div>
            </section>
        </>
    )
}

export default Shop
