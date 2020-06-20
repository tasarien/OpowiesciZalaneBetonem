import React, { Component } from 'react';
import './form.css';
import TextEditor from './text_editor/text_editor';
import { firebaseDB } from '../../firebase'

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            text: '',
            date: new Date,
            author: '',
            loading: true
        };

    }

    componentDidMount() {
        console.log(window.location.hash.substring(1))
        this.fillState(window.location.hash.substring(1))
    }

    fillState = (hash) => {
        firebaseDB.ref(`/stories/${hash}`).once('value').then((snap) => {
            let data = snap.val()
            console.log(data)
            this.setState({
                title: data.title,
                text: data.text,
                date: data.date,
                author: data.author,
                loading: false
            })
        })
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

    submit = (event) => {
        this.setState({
            text: localStorage.getItem('content')
        })
        firebaseDB.ref(`/stories/${window.location.hash.substring(1)}`).update(this.state)
    }

    content = () => (
        <div className='form'>
                Update
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
                            value={this.state.title}
                            required
                        />
                    </label>
                    <label
                        htmlFor='text'
                        className='neomorph'
                        id='editor'
                    >
                        Tekst
                        <TextEditor text={this.state.text} />
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
                            value={this.state.author}
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
                            value={this.state.date}
                            required
                        />
                    </label>
                    <button id='load' type='submit' className='neomorph neomorph-btn'>Ładuj!</button>
                </form>
            </div>
    )

    render() {
        return (
            <div>
                {this.state.loading ?
                <span>Loading</span>
                :
                this.content()
                }
            </div>
        )
    }
}

export default Update