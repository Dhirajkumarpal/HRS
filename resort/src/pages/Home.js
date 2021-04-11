//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom'
import Services from '../Component/Services'
import FeaturedRooms from '../Component/FeaturedRooms'
export default function Home() {
    return (
       <>
       
        <Hero hero="defaultHero">
            <Banner title="luxuries rooms" subtitle="deluxe rooms starting at 299$" >
                <Link to="/rooms" className="btn-primary" >Our rooms</Link>
            </Banner>
       </Hero>
       <Services />
            <FeaturedRooms />
           
      </>
    );
}
                                                    

