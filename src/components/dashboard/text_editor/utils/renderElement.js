import React from 'react'
import QuoteElement from './elements/quote_element'
import DefaultElement from './elements/defaultElement'

function RenderElement(props) {
        switch (props.element.type) {
            case 'quote':
              return <QuoteElement {...props} />
            default:
              return <DefaultElement {...props} />
          }
}

export default RenderElement
