import React, { Component } from 'react'
import './login.css'
import { firebase } from '../../firebase';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            loading: false,
            loginPrompt: ''
        }
    }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    login = (event) => {
        event.preventDefault();

        this.setState({
            loading: true
        })

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/betoniarka')
            }
            )
            .catch(error => {
                this.setState({
                    loading: false,
                    loginPrompt: error.message
                })
            })
    }

    submitting = () => (
        this.state.loading ?
            <div>loading...</div>
            :
            <button type='submit' className='neomorph neomorph-btn login-btn'>Login</button>
    )

    render() {
        return (
            <form onSubmit={this.login} className='login-form'>
                {this.redirect}
                <input
                    type='text'
                    name='email'
                    placeholder='E-mail'
                    onChange={this.emailHandler}
                    className='neomorph login-input'
                />
                <input
                    type='password'
                    name='password'
                    className='neomorph login-input'
                    onChange={this.passwordHandler}
                />
                {this.submitting()}
                {this.state.loginPrompt}
            </form>
        )
    }
}

export default Login
