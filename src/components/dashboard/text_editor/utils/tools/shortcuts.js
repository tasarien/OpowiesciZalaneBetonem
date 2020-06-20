import CustomEditor from '../custom_editor'

function shortcuts(event, editor) {
        if (!event.ctrlKey) {
          return
        }

        switch (event.key) {
          case 'b': {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
            break
          }
        }
}

export default shortcuts
