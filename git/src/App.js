import React from "react";
import "./App.css";
import coins from "./coins";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: coins,
      random: 0,
      score: { head: 0, tail: 0 },
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    let randomFlip = Math.floor(Math.random() * 2);
    this.setState({ random: randomFlip });
    if (randomFlip) {
      this.setState({
        score: { head: this.state.score.head, tail: this.state.score.tail + 1 },
      });
    } else {
      this.setState({
        score: { head: this.state.score.head + 1, tail: this.state.score.tail },
      });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="img-container">
            <img src={this.state.data[this.state.random].url} alt="coin" />
          </div>
          <div className="dashboard">
            <div>
              <button className="flip-button" onClick={this.flipCoin}>
                FLIP ME
              </button>
            </div>
            <div className="score">
              <div>
                <img
                  src={this.state.data[0].url}
                  alt="head"
                  className="score-img"
                />
                <h2>{this.state.score.head}</h2>
              </div>
              <div>
                <img
                  src={this.state.data[1].url}
                  alt="tail"
                  className="score-img"
                />
                <h2>{this.state.score.tail}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
