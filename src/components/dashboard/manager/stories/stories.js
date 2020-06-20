import React from 'react'
import Story from './story/story'

function Stories(props) {
    const pile = () => {
        return props.library.map((story) => {
            return <Story key={story.id} story={story}/>
        })
    }
    return (
        <div>
            {pile()}
        </div>
    )
}

export default Stories
