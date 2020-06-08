import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // console.log(props);
    
  //   this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("rendered CDM");
    window.navigator.geolocation.getCurrentPosition(
      // position => console.log(position.coords.latitude),
      // err => console.log(err)
      position => this.setState({ lat: position.coords.latitude }), 
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <Spinner message="Please accept location request" />;
  }

  componentDidUpdate() {
    console.log("rerendered CDU");
  }

  render() {
    return (
      <div className='border'>
      {this.renderContent()}
    </div>
    )
  
 
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


