import React, { Component, useState } from 'react';
import './dashboard.css';
import Form from './form'
import DashboardLayout from './dashboard_layout'
import { Route, Switch } from 'react-router';
import Update from './update'
import Manager from './manager/manager'
import { firebaseDB, firebaseLooper } from '../../firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            library: ''
        }
    }

    componentDidMount() {
        firebaseDB.ref('/stories').once('value').then((snap) => {
            let library = firebaseLooper(snap)
            this.setState({library})
        })
    }

    render() {
        return (
            <DashboardLayout auth={this.props.auth}>
            <Switch>
                <Route exact path='/betoniarka/historia/nowa'>
                    <Form {...this.props} library={this.state.library}/>
                </Route>
                <Route path='/betoniarka/historia/:hash'>
                    <Update {...this.props} library={this.state.library}/>
                </Route>
                <Route exact path='/betoniarka'>
                    {this.state.library ?
                    <Manager library={this.state.library} />
                    :
                    <span>Loading</span>
                    }
                </Route>
            </Switch>
        </DashboardLayout>
        )
    }
}

export default Dashboard