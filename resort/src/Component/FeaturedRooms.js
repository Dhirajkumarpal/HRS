//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react'
import { RoomContext } from "../context"
import Loading from './Loading'
import Room from './Room'
import Title from './Title'
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
       
        let {loading, featuredRooms: rooms } = this.context;
        console.log("loading...")
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room} />;
        });
        console.log(rooms);
        return (<section className="featured-rooms">
            <Title title="featured rooms" />
            <div className="featured-rooms-center">
            </div>
            {loading?<Loading/>:rooms}
            
        </section>
        );
       
    }
}


