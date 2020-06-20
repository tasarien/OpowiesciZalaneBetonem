import React, { Component } from 'react'
import './sort_and_search.css'

class SortAndSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
            <div id='manager-sortsearch'>
                <div>
                    Sortuj
                </div>
                <div>
                    Opublikowane
                </div>
                <div>
                    Szkice
                </div>
                <div>
                    Szukaj
                </div>
            </div>
            <div>
                {this.props.children}
            </div>
        </div>
        )
    }
}

export default SortAndSearch
