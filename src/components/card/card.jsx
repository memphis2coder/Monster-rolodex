import React from 'react'

import './card.css';

export default function card(props) {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set&size=180x180`} alt="monsters"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}
