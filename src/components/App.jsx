class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
    };
  }

  stateDidUpdate() {
    console.log("state", this.state);
  }

  handleUserInput(event) {
    var currVideo;
    window.exampleVideoData.forEach(function(video) {
      if (event.currentTarget.innerHTML === video.snippet.title) {
        currVideo = video;
      }
    });

    this.setState({
      currentVideo: currVideo,
    });
  }

  render() {
    // console.log(this)
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} handler={this.handleUserInput.bind(this)} />
        </div>
      </div>    
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
