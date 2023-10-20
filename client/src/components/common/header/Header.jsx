import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"
import axios from "axios"

const Header = () => {
  const [navList, setNavList] = useState(false)
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logout = async () => {
    const res = await axios.post('http://localhost:8000/api/auth/logout')
    console.log(res);
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo2.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} className='hav'>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex details">
            <div className="flex"><Link to='/account' className='hav name' ><h5>{currentUser ? currentUser.username : 'Guest'}</h5></Link></div>

          </div>
          <div className='button flex'>

            {currentUser ? <button className="logout" onClick={logout}>Logout</button> : <Link to={'/login'}><button className="login" onClick={logout}>Login</button> </Link>
            }</div>



          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
