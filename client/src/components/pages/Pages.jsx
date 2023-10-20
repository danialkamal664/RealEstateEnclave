import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Login from "../login/login"
import Shop from "../shop/Shop"
import { SignUp } from "../signup/signup"
import ProtectedRoutes from "../protected-routes/protectedroutes"
import SellPlot from "../sell-plot/SellPlot"
import BookAppointment from "../book-appointment/BookAppointment"
import Account from "../account/Account"
import Chat from "../chat/Chat"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/chat' component={Chat} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/sell' component={SellPlot} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/book' component={BookAppointment} />
          <Route exact path='/account' component={Account} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
