import React, { Component, useState } from 'react';
import './text_editor.css'
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { useMemo } from 'react';
import renderElement from './utils/renderElement';
import renderLeaf from './utils/renderLeaf';
import Tools from './utils/tools/tools';
import CustomEditor from './utils/custom_editor'

const TextEditor = (props) => {

  const editor = useMemo(() => withReact(createEditor()), [])

  const defaultContent = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]

  props.text ? localStorage.setItem('content', props.text) : localStorage.setItem('content', defaultContent)

  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('content'))
  )

  const onChange = (value) => {
    setValue(value)
    const content = JSON.stringify(value)
    localStorage.setItem('content', content)
    console.log(localStorage.getItem('content'))
  }


  return (
    <div className='neomorph dashboard-editor'>
      <Slate editor={editor} value={value} onChange={onChange}>
        <Tools editor={editor}>
          <Editable
            className='editable'
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={event => {
              if (!event.ctrlKey) {
                return
              }

              switch (event.key) {
                case 'b': {
                  event.preventDefault()
                  CustomEditor.toggleBoldMark(editor)
                  break
                }
                case 'i': {
                  event.preventDefault()
                  CustomEditor.toggleItalicMark(editor)
                  break
                }
                case 'u': {
                  event.preventDefault()
                  CustomEditor.toggleUnderlineMark(editor)
                  break
            }
          }
        }}
          />
        </Tools>
      </Slate>
    </div>
  )
}



export default TextEditor