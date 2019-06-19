import React, { Component } from "react";
import ReactDOM from "react-dom";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
import "index.scss";
class HelloWorld extends Component {
  render() {
    return (
      <div>
        Hello World
        <h3>Sub Heading</h3>
        <img src="images/download.jpeg" alt=""/>
      </div>
    );
  }
}

export default HelloWorld;

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
