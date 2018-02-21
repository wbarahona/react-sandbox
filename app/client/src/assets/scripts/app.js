import React, { Component } from 'react';
import ReactDOM from 'reactdom';
import ytsearch from 'youtube-api-search';
// import { Component } from 'react';
import webconf from '../../../conf/web.conf';

import SearchBar from './components/search';
import VideoDetail from './components/videodetail';
import VideoList from './components/videolist';

const containerEl = document.querySelector('.container');
const { apikey } = webconf.site.authkeys.google.youtube;
const ytparams = {key: apikey, term: 'Interstellar'};

class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        results: []
    }

    componentDidMount() {
        ytsearch(ytparams, (results) => {
            this.setState({ results });
        });
    }


    render() {
        return (
            <div className="col-sm-12">
                <SearchBar />
                <div className="row">
                    <VideoDetail video={ this.state.results[0] } />
                    <VideoList videos={ this.state.results } />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, containerEl);
