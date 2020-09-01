import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-outer">
            <div className="join-inner">
                <div className="join-wrapper">
                    <h1>Join</h1>
                    <div><input placeholder="Name" type="text" onChange={(e) => setName(e.target.value) } /></div>
                    <div><input placeholder="Room" type="text" onChange={(e) => setRoom(e.target.value) } /></div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="btn" type="submit">Join</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Join
