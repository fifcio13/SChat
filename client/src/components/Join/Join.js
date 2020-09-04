import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import {ReactComponent as Social} from '../../assets/images/social_interaction.svg'

import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="join-outer">
        <Social />
            <div className="join-inner">
                <form className="join-wrapper">
                    <h1>UChat</h1>
                    <div>
                        <label htmlFor="name">Nazwa</label>
                        <input title="Twoja wyświetlana na czacie nazwa" required maxLength="22" id="name" type="text" onChange={(e) => setName(e.target.value) } />
                    </div>
                    <div>
                        <label htmlFor="room">Pokój</label>
                        <input title="Numer lub nazwa pokoju" required maxLength="6" id="room" type="text" onChange={(e) => setRoom(e.target.value) } />
                    </div>
                    <Link  onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button title='Dołącz do pokoju}' className="btn" type="submit">Dołącz do pokoju: <span>{room}</span></button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Join