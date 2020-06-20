import React from 'react'

function renderLeaf(props) {
    return (
        <span
            {...props.attributes}

            style={{
                fontWeight: props.leaf.bold ? 'bold' : 'normal',
                fontStyle: props.leaf.italic ? 'italic' : 'normal',
                textDecoration: props.leaf.underline ? 'underline' : 'normal'
            }}
        >
            {props.children}
        </span>
    )
}

export default renderLeaf
