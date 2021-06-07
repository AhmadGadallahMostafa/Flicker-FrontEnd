import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import FooterHome from './FooterHome'
import HomeCarousel from './HomeCarousel'
import HomeNav from './HomeNav'

const Home = () => {
    return (
        <div>
            <HomeNav/>
            
            <HomeCarousel/>

            <FooterHome/>

        </div>
    )
}

export default Home
