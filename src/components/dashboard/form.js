import React, { Component } from 'react';
import './form.css';
import TextEditor from './text_editor/text_editor';
import { firebaseDB } from '../../firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            text: localStorage.getItem('content'),
            date: new Date,
            author: ''
        };

    }

    titleHandler = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    onChange = editorState => this.setState({ editorState });

    authorHandler = (event) => {
        this.setState({
            author: event.target.value
        })
    }

    dateHandler = (event) => {
        this.setState({
            date: event.target.value
        })
    }

    submit = () => {
        firebaseDB.ref('/stories').push(this.state)
    }

    render() {
        console.log(this.props.location.hash)
        return (
            <div className='form'>
                <form id='dashboard-form' onSubmit={this.submit}>
                    <label
                        htmlFor='title'
                        className='neomorph'
                    >
                        Tytuł
                        <input
                            name='title'
                            onChange={this.titleHandler}
                            type='text'
                            className='neomorph'
                            required
                        />
                    </label>
                    <label
                        htmlFor='text'
                        className='neomorph'
                        id='editor'
                    >
                        Tekst
                        <TextEditor />
                    </label>
                    <label
                        htmlFor='author'
                        className='neomorph'>
                        Autor
                        <input
                            name='author'
                            onChange={this.authorHandler}
                            type='text'
                            className='neomorph'
                            required
                        />
                    </label>
                    <label
                        htmlFor='date'
                        className='neomorph'>
                        Data
                        <input
                            name='date'
                            onChange={this.dateHandler}
                            type='date'
                            className='neomorph'
                            required
                        />
                    </label>
                    <button id='load' type='submit' className='neomorph neomorph-btn'>Ładuj!</button>
                </form>
            </div>
        )
    }
}

export default Dashboard