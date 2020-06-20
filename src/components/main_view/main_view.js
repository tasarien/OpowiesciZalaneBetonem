import React from 'react';
import './main_view.css';

import NavBar from '../navigation/nav_bar'
import Card from '../card/card'

function MainView() {
    return (
        <div className='main-view'>
            <NavBar/>
            <Card/>
        </div>
    )
}

export default MainView
