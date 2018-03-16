import React, { Component } from 'react';
import propTypes from 'prop-types';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        searchTerms: ''
    }

    onInputChange = e => {
        const { value } = e.target;

        this.setState({ searchTerms: value });

        this.props.onVideoSearch(value);
    };

    render() {
        return (
            <div className="form-group row search-form-wrap">
                <div className="col-sm-3 brand-name-wrap">
                    <img src="https://image.flaticon.com/icons/svg/214/214365.svg" alt="" />
                    <span className="brand-name">IuTub <span className="brand-slug"><small>Bread cast yourself</small></span></span>
                </div>
                <div className="col-sm-9">
                    <div className="row">
                        <label htmlFor="search" className="col-sm-2 col-form-label">Search:</label>
                        <div className="col-sm-10">
                            <input type="text"
                                placeholder="Type something..."
                                id="search"
                                className="form-control"
                                value={ this.state.searchTerms }
                                onChange={ this.onInputChange } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    onVideoSearch: propTypes.func
};

export default SearchBar;
