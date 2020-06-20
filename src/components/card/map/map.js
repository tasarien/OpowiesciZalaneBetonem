import React, { Component } from 'react';
import './map.css';

class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: false
        }
    }

    mapToggler = () => {
        this.setState(prevState => ({ status: !prevState.status }));
      };

    render() {
        return (
            <div onClick={this.mapToggler} className={`map ${this.state.status ? 'map-max' : 'map-min'}`}>
                Map
            </div>
        )
    }
}

export default Map