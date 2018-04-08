import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}; //only in constructor function does this happen everywhere else this.setState is used
    }
    render () {
        return (
            // controlled component or form
        <div>
            <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
        </div>
        );
    }
}

export default SearchBar;