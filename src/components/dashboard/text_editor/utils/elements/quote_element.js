import React from 'react'

function QuoteElement(props) {
    return (
        <pre {...props.attributes}>
            <blockquote>{props.children}</blockquote>
        </pre>
    )
}

export default QuoteElement
