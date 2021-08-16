import React, { Component } from "react";
import className from "classnames";
import "./TrafficLight.css";
class TrafficLight extends Component {
  constructor(props) {
    super(props);

    this.redTimeLife = 30;
    this.greenTimeLife = 30;
    this.orangeTimeLife = 3;

    this.state = { type: "green", timeLife: this.greenTimeLife };

  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  genarateClassName(){
    this.redLight = className({
      Light: true,
      Red: true,
      "Light-active": this.state.type === "red",
      "Light-animation": this.state.timeLife <= 5 && this.state.type === "red",
    });

    this.orangeLight = className({
      Light: true,
      Orange: true,
      "Light-active": this.state.type === "orange",
      "Light-animation": this.state.timeLife <= 5 && this.state.type === "orange",
    });

    this.greenLight = className({
      Light: true,
      Green: true,
      "Light-active": this.state.type === "green",
      "Light-animation": this.state.timeLife <= 5 && this.state.type === "green",
    });

    this.counterLight = className({
      Courter: true,
      RedText: this.state.type === "red",
      OrangeText: this.state.type === "orange",
      GreenText: this.state.type === "green",
      "Light-animation": this.state.timeLife <= 5,
    });
  }
  tick() {
    this.setState(function (state) {
      console.log("state change...");
      let obj = {};
      obj.type = state.type;
      obj.timeLife = state.timeLife - 1;

      if (obj.timeLife === 0) {
        if (state.type === "green") {
          obj.type = "orange";
          obj.timeLife = this.orangeTimeLife = 3;
        } else if (state.type === "orange") {
          obj.type = "red";
          obj.timeLife = this.redTimeLife;
        } else if (state.type === "red") {
          obj.type = "green";
          obj.timeLife = this.greenTimeLife;
        }
      }
      return obj;
    });

   
  }

  render() {
    this.genarateClassName();

    console.log(this.state);
    return (
      <div className="TrafficLight">
        <div className={this.redLight}></div>
        <div className={this.orangeLight}></div>
        <div className={this.greenLight}></div>
        <div className={this.counterLight}>
          <h1>{this.state.timeLife}</h1>
        </div>
      </div>
    );
  }
}

export default TrafficLight;
