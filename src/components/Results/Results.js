import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";

class Results extends Component {
  votesBatmanInPercent = () => {
    if (this.props.batman > 0) {
      return (
        (this.props.batman /
          (this.props.batman +
            this.props.aquaman +
            this.props.wonderwoman +
            this.props.flash)) *
        100
      );
    } else {
      return 0;
    }
  };

  votesFlashInPercent = () => {
    if (this.props.flash > 0) {
      return (
        (this.props.flash /
          (this.props.batman +
            this.props.aquaman +
            this.props.wonderwoman +
            this.props.flash)) *
        100
      );
    } else {
      return 0;
    }
  };

  votesWonderWomanInPercent = () => {
    if (this.props.wonderwoman > 0) {
      return (
        (this.props.wonderwoman /
          (this.props.batman +
            this.props.aquaman +
            this.props.wonderwoman +
            this.props.flash)) *
        100
      );
    } else {
      return 0;
    }
  };

  votesAquaManInPercent = () => {
    if (this.props.aquaman > 0) {
      return (
        (this.props.aquaman /
          (this.props.batman +
            this.props.aquaman +
            this.props.wonderwoman +
            this.props.flash)) *
        100
      );
    } else {
      return 0;
    }
  };

  votesBatmanInPercentStyle = () => {
    return {
      width: this.votesBatmanInPercent() + "%"
    };
  };
  votesFlashInPercentStyle = () => {
    return {
      width: this.votesFlashInPercent() + "%"
    };
  };
  votesWonderWomanInPercentStyle = () => {
    return {
      width: this.votesWonderWomanInPercent() + "%"
    };
  };
  votesAquaManInPercentStyle = () => {
    return {
      width: this.votesAquaManInPercent() + "%"
    };
  };

  render() {
    return (
      <div>
        <h1 className="display-4" style={{ color: "#fff" }}>
          Voting Results
        </h1>

        <span className="badge badge-primary" style={{ marginBottom: "3px" }}>
          Batman: {this.votesBatmanInPercent().toFixed(2) + "%"}
        </span>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            style={this.votesBatmanInPercentStyle()}
          ></div>
        </div>
        <br />

        <span className="badge badge-danger" style={{ marginBottom: "3px" }}>
          Flash: {this.votesFlashInPercent().toFixed(2) + "%"}
        </span>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-danger"
            style={this.votesFlashInPercentStyle()}
          ></div>
        </div>
        <br />

        <span className="badge badge-warning" style={{ marginBottom: "3px" }}>
          Wonder Woman: {this.votesWonderWomanInPercent().toFixed(2) + "%"}
        </span>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-warning"
            style={this.votesWonderWomanInPercentStyle()}
          ></div>
        </div>
        <br />
        <span className="badge badge-info" style={{ marginBottom: "3px" }}>
          AquaMan: {this.votesAquaManInPercent().toFixed(2) + "%"}
        </span>

        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-info"
            style={this.votesAquaManInPercentStyle()}
          ></div>
        </div>
        <br />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    batman: state.batman,
    aquaman: state.aquaman,
    wonderwoman: state.wonderwoman,
    flash: state.flash
  };
};

export default connect(
  mapStateToProps,
  null
)(Results);
