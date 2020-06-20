import React, { Component } from 'react'
import './manager_layout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ManagerLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div id='manager-main' className='neomorph'>
                <h1>Zarządzanie</h1>
            <div id='manager-options'>
                <div className='manager-btn'>
                    Historie
                </div>
                <div className='manager-btn'>
                    Wątki
                </div>
                <div id='add-new-one' className='neomorph neomorph-btn'>
                    <div id='plus'>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                    Dodaj nową
                </div>
            </div>
            <div>
                {this.props.children}
            </div>
            </div>
        )
    }
}

export default ManagerLayout
