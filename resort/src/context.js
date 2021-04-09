//import logo from './logo.svg';
//import './App.css';
import items from './data'
import React, { Component } from 'react'
const RoomContext = React.createContext();
export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading:true
    };
    componentDidMount() {
        let rooms=this.formatData(items)
    }
    formatData() {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(images => image.fields.file.url);
            let room = {...items.fields}
        }
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}


const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext } 
