//import logo from './logo.svg';
//import './App.css';
import React from 'react'


export default function Hero({ children, hero }) {
    return <header className={hero}>{children}</header>

}

Hero.defaultProps = {
    hero: "defaultHero"
};