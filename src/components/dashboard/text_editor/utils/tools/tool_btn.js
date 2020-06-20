import React from 'react';
import './tools.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import CustomEditor from '../custom_editor'

function ToolBtn(props) {
    let icon = props.icon

    const onClick = (event) => {
        event.preventDefault()
        switch(props.func) {
            case 'bold':
                CustomEditor.toggleBoldMark(props.editor)
                break;
                case 'italic':
                CustomEditor.toggleItalicMark(props.editor)
                break;
                case 'underline':
                CustomEditor.toggleUnderlineMark(props.editor)
                break;
                case 'quote':
                CustomEditor.toggleQuoteBlock(props.editor)
                break;
        }
    }

    return (
        <div onMouseDown={onClick} className='tool-btn'>
            <FontAwesomeIcon icon={Icons[icon]}/>
        </div>
    )
}

export default ToolBtn
