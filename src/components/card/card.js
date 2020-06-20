import React from 'react'
import './card.css'

import Map from './map/map';
import CardContent from './card_content/card_content';

function Card() {
    return (
        <div className='card main-view-content'>
            <Map/>
            <CardContent/>
        </div>
    )
}

export default Card