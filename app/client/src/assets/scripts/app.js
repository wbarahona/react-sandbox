import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'reactdom';
import ytsearch from 'youtube-api-search-promise';
// import { Component } from 'react';
import webconf from '../../../conf/web.conf';
import utils from 'utils';

// Components
import SearchBar from './components/search';
import VideoDetail from './components/videodetail';
import VideoList from './components/videolist';

const { debounce } = utils;

const containerEl = document.querySelector('.container');
const { apikey } = webconf.site.authkeys.google.youtube;

class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        searchTerms: '',
        results: [],
        selectedVideo: null
    }

    async searchVideos(term) {
        const ytparams = {key: apikey, term };

        let results = [];

        try {
            results = await ytsearch(ytparams);

            this.setState({
                results,
                selectedVideo: results[0]
            });
        } catch(err) {
            console.log(err);
        }

        return results;
    }

    async componentDidMount() {
        try {
            const results = await this.searchVideos(this.state.searchTerms);

            this.setState({
                results,
                selectedVideo: results[0]
            });
        } catch(err) {
            console.log(err);
        }
    }


    render() {
        const searchVideos = debounce((searchTerms) => { this.searchVideos(searchTerms); }, 300);

        return (
            <div className="col-sm-12">
                <SearchBar onVideoSearch={ searchVideos } />
                <div className="row">
                    <VideoDetail video={ this.state.selectedVideo } />
                    <VideoList
                        onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
                        videos={ this.state.results } />
                </div>
                <div className="row">
                    {/* Comment list here */}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, containerEl);
