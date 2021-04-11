//import logo from './logo.svg';
//import './App.css';
import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import { Link } from 'react-router-dom'
import  RoomsContainer  from "../Component/RoomsContainer"
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our Rooms">
                <Link to="/" className="btn-primary">return Home</Link>
            </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    );
}

export default Rooms;
