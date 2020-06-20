import React, { Component } from 'react'
import './nav-bar.css';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: false
        }
    }

    navBarToggler = () => {
        this.setState(prevState => ({ status: !prevState.status }));
      };

    render() {
        return (
            <div onClick={this.navBarToggler} 
            className={`neomorph nav-bar main-view-content ${this.state.status ? 'nav-bar-max' : 'nav-bar-min'}`}>
            NavBar
            </div>
        )
    }
}

export default NavBar
