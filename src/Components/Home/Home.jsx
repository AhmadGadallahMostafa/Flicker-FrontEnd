import React from 'react'
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
