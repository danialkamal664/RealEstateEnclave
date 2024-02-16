import React from "react"
import Heading from "../common/Heading"
import "./Account.css"
import AccountCard from "./AccountCard"

const Account = () => {
    return (
        <>
            <section className='featured background'>
                <div className='container'>
                    <Heading title='User Account Details' subtitle='Account and Appointments Information.' />
                    <AccountCard />
                </div>
            </section>
        </>
    )
}

export default Account
