import React, { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        query: ""

    }

    handleClick = event => {
        event.preventDefault()
        this.props.searchGifs(this.state.query)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input 
                        type="text" 
                        onChange={event => this.setState({ query: event.target.value })}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
