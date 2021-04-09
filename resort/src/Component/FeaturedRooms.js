//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react'
import { RoomContext } from "../context"
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
       
        const { greeting ,name} = this.context;
            console.log(greeting)
          return <div>
              Featured Rooms {greeting} {name}
            </div>
       
    }
}


