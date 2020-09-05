import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as Social} from '../../assets/images/social_interaction.svg'

import './Join.css'

const Join = () => {

    const [status, setStatus] = useState('');

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const handleClick = (e) => {
        if(!room) {
            setStatus('Room field is empty')
        } if (!name) {
            setStatus('Name field is empty');
        } if (!room && !name) {
            setStatus('Both fields are empty');
        }
    }

    return (
        <div className="join-outer">
        <Social />
            <div className="join-inner">
                <form className="join-wrapper" >
                    <h1>UChat</h1>
                    <div>
                        <label htmlFor="name">Username</label>
                        <input title="Your username on chat" required maxLength="22" id="name" type="text" onChange={(e) => setName(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="room">Room</label>
                        <input title="Number of a room" required maxLength="3" id="room" type="text" onChange={(e) => setRoom(e.target.value) } />
                    </div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button onClick={(e) => handleClick()} title='Join the room' className='btn ' type="submit">Join the room: <span>{room}</span></button>
                    </Link>
                    <p className="status">{status}</p>
                </form>
            </div>
        </div>
    )
}

export default Join