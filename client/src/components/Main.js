import React from 'react'
import Navbar from './Navbar/Navbar'
import { Route, Switch } from 'react-router-dom'
import About from './body/About'
import Contact from './body/Contact'
import Login from './body/Login'
import Registration from './body/Registration'
import Home from './body/Home'
import ErrorPage from './body/ErrorPage'
import Footer from './Footer/Footer'
import Logout from './body/Logout'



const Main = () => {

    return (
        <div>
            
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/aboutme' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/login' component={Login} />
                    <Route path='/logout' component={Logout} />
                    <Route path='/registration' component={Registration} />
                    <Route component={ErrorPage} />
                </Switch>
                <Footer />
            


        </div>
    )
}

export default Main