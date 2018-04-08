import _ from "lodash";
import React, { Component } from "react"; // go find library called react and assign to variable React
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAekLdm3wFv5ejnMUhp-Q-a270CMZS0GPE";

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("infinity war");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); //this can be condensed from videos:videos if key and prop are same variable name
    });
  }

  render() {
      const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300); //debounce takes in function and new func can only be called once every 300 ms

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
// creates an instance of app <App />    Just App would be a class component not an instance of the component
// document.querySelector and go and find parent div container to render App in

//children of App are the components | all data should be fetched in Parent level such as App
