import React, { Component } from "react";
import batman from "../../sound/batman_voice2.m4a";
import wonderwoman from "../../sound/wonderwoman_voice.m4a";
import aquaman from "../../sound/aquaman_voice.m4a";
import flash from "../../sound/flash.m4a";

class Audio extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      selectedSong: "none"
    };
  }

  playAudio() {
    var audio1 = this.myRef.current;
    // var audio1 = document.getElementById("audioID");
    audio1.play();
  }

  handleMouseEnter = event => {
    switch (event.target.className) {
      case "batman":
        console.log("I am BATMAN");
        this.setState({ selectedSong: batman }, () => {
          this.playAudio();
        });
        break;
      case "wonderwoman":
        console.log("I am WONDERWOMAN");
        this.setState({ selectedSong: wonderwoman });
        this.playAudio();
        break;
      case "flash":
        console.log("I am FLASH");
        this.setState({ selectedSong: flash });
        this.playAudio();
        break;
      case "aquaman":
        console.log("I am AQUAMAN");
        this.setState({
          selectedSong: aquaman
        });
        this.playAudio();
        break;
      default:
        return null;
    }
    // console.log(event.target.className);
  };

  render() {
    return (
      <div>
        <nav>
          <a
            className="batman"
            href="#"
            onClick={this.playAudio}
            onMouseEnter={this.handleMouseEnter}
          >
            HOME
          </a>{" "}
          |
          <a className="flash" href="#" onMouseEnter={this.handleMouseEnter}>
            ABOUT
          </a>{" "}
          |
          <a
            className="wonderwoman"
            href="#"
            onMouseEnter={this.handleMouseEnter}
          >
            RESUME
          </a>{" "}
          |
          <a className="aquaman" href="#" onMouseEnter={this.handleMouseEnter}>
            CONTACT
          </a>
        </nav>
        <div>
          <audio ref={this.myRef} id="audioID">
            {console.log("========>", this.state.selectedSong)}
            {console.log("========>", batman)}
            <source src={this.state.selectedSong} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    );
  }
}

export default Audio;
