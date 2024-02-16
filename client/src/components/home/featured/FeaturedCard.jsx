import React from "react"
import { featured } from "../../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {featured.map((items, index) => (
          <Link to='/shop' className='cardf'><div className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div></Link>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
