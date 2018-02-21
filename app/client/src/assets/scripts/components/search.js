import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        searchTerms: ''
    }

    onInputChange = (e) => {
        const { value } = e.target;

        this.setState({searchTerms: value});
    }

    render() {
        return (
            <div className="form-group row">
                <label htmlFor="search" className="col-sm-1 col-form-label">Search:</label>
                <div className="col-sm-11">
                    <input type="text"
                        placeholder="Type something..."
                        id="search"
                        className="form-control"
                        value={this.state.searchTerms}
                        onChange={this.onInputChange} />
                </div>
            </div>
        );
    }
}

export default SearchBar;
