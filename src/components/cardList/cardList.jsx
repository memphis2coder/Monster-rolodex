import React from 'react'
import Card from '../card/card';

import './cardList.css';

export default function cardList(props) {
    return (
        <div className="card-list">
            {props.monsters.map(monster => ( // map over the monsters array 
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}
