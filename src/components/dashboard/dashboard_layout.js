import React from 'react'
import './dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSign, faHome, faBackward } from '@fortawesome/free-solid-svg-icons';



function DashboardLayout(props) {

    const logOut = () => {
        props.auth.signOut()
    }

    const goHome = () => {
        window.location.replace('/')
    }

    const goBack = () => {
        window.location.replace('/betoniarka')
    }

    return (
        <div className='dashboard-layout'>
            <div id='side-buttons'>
                <button onClick={logOut} className='side-btn'>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Wyloguj
                    </button>
                <button onClick={goHome} className='side-btn'>
                    <FontAwesomeIcon icon={faHome} /> Baza
                    </button>
                <button onClick={goBack} className='side-btn'>
                    <FontAwesomeIcon icon={faBackward} /> Wróć
                    </button>
            </div>
            <h1 id='concrete-mixer'>Betoniarka</h1>
            <div id='dashboard-children'>
                {props.children}
            </div>
        </div>
    )
}

export default DashboardLayout
