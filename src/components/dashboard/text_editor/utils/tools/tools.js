import React from 'react'
import './tools.css'
import ToolBtn from './tool_btn'

function Tools(props) {
    return (
        <div>
            <div className='tools neomorph'>
                <ToolBtn editor={props.editor} func={'bold'} icon={'faBold'}/>
                <ToolBtn editor={props.editor} func={'italic'} icon={'faItalic'}/>
                <ToolBtn editor={props.editor} func={'underline'} icon={'faUnderline'}/>
                <ToolBtn editor={props.editor} func={'quote'} icon={'faQuoteRight'}/>
            </div>
            {props.children}
        </div>
    )
}

export default Tools
