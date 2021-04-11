import React from 'react'

import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomList'
import { RoomConsumer } from '../context'
import Loading from './Loading'
export default  function RoomsContainer() {
    return (
        <RoomConsumer>
            {value => {
                const { loading,sortedRooms,rooms}=value
                console.log("value print")
                console.log(value);
                if (loading) {
                    return <Loading/>
                }


                return (
                    <div>Hello from roomscontainer
                        <RoomsFilter room={rooms} />
                        <RoomsList room={sortedRooms} />
                    </div>
                )
            }}
        </RoomConsumer>
    );
}

