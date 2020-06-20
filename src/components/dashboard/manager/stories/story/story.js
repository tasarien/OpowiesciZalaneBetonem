import React from 'react'
import './story.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function Story(props) {
    const publishedStyle = {
        color: 'var(--chrome-yellow)'
    }
    const draftStyle = {
        color: 'grey'
    }
    const goToEdit = () => {
        window.location.replace(`/betoniarka/historia/hash#${props.story.id}`)
    }
    return (
        <div className='story neomorph'>
            <button onClick={goToEdit} className='side-btn' id='edit-btn'>
                <FontAwesomeIcon icon={faEdit}/>
                Edytuj
            </button>
            <span>{props.story.title}</span>
            <span>{props.story.date}</span>
            <span>{props.story.author}</span>
            <span style={props.story.status ? publishedStyle : draftStyle}>{props.story.status ? 'Opublikowane' : 'Szkic'}</span>
        </div>
    )
}

export default Story