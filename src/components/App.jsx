class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
    };
  }

  handleUserInput(video) {

    this.setState({
      currentVideo: video,
    });
  }

  // searchYouTube({
  //   key: "AIzaSyDQTTw2fD9IE42iLfHTo0ffZP_iyeMPgNk",
  //   maxResults: 5,
  //   q: "fluffy kitties",
  // }, (videos) =>
  //   this.setState({
  //     videos: videos,
  //     currentVideo: videos[0]
  //   })
  // );

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  render() {
    // console.log(this)
    return (
      <div>
        <Nav
          handleSearchInputChange={this.getYouTubeVideos.bind(this)}
        />
        <div className="col-md-7">
          <VideoPlayer currVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} handler={this.handleUserInput.bind(this)} />
        </div>
      </div>    
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
