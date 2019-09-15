import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { voteBatman, voteFlash, voteWonderwoman, voteAquaMan } from "./actions";
import Logo from "./images/jl.png";
import Batman from "./images/batman.png";
import Flash from "./images/Flash.png";
import Wonderwoman from "./images/wonderwoman.png";
import AquaMan from "./images/aquaman.png";
import Results from "./components/Results/Results";
import Audio from "./components/Audio/Audio";

class App extends Component {
  render() {
    const {
      handleVoteBatman,
      handleVoteFlash,
      handleVoteAquaMan,
      handleVoteWonderwoman
    } = this.props;
    return (
      <div className="container" style={{ margin: "40px auto" }}>
        <div
          className="jumbotron"
          style={{
            textAlign: "center",
            background: "lightgoldenrodyellow",
            opacity: "0.9"
          }}
        >
          <div className="container">
            <img src={Logo} alt="logo" height="132px" />
            <br />
            <br />
            <h2 className="lead">
              Who is your favourite SUPERHERO character in Justice League?
            </h2>
            <h4 className="lead">Click on the logos below to vote!</h4>
            <br />
            <div className="row">
              <div className="col-sm">
                <img
                  style={{ cursor: "pointer" }}
                  src={Batman}
                  alt="batman"
                  height="152px"
                  onClick={handleVoteBatman}
                />
              </div>
              <div className="col-sm">
                <img
                  style={{ cursor: "pointer" }}
                  src={Flash}
                  alt="Flash"
                  height="152px"
                  onClick={handleVoteFlash}
                />
              </div>
              <div className="col-sm">
                <img
                  style={{ cursor: "pointer" }}
                  src={Wonderwoman}
                  alt="Wonderwoman"
                  height="152px"
                  onClick={handleVoteWonderwoman}
                />
              </div>
              <div className="col-sm">
                <img
                  style={{ cursor: "pointer" }}
                  src={AquaMan}
                  alt="AquaMan"
                  height="178px"
                  onClick={handleVoteAquaMan}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Results />
        <hr />
        <Audio />
        <footer style={{ color: "#fff" }}>&copy; Copyright 2019 Wizcool</footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleVoteBatman: () => dispatch(voteBatman()),
    handleVoteAquaMan: () => dispatch(voteAquaMan()),
    handleVoteFlash: () => dispatch(voteFlash()),
    handleVoteWonderwoman: () => dispatch(voteWonderwoman())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
