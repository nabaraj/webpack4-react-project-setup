import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "./component/Grid";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
import "index.scss";
class HelloWorld extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello World</h1>
        <h3>Sub Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, unde?
          Iusto ullam itaque sed eligendi aut. Obcaecati consequatur alias,
          molestiae, provident ipsa odio quasi debitis sequi sed quam, ratione
          ea.
        </p>
        <Grid gridCount="2" />
      </div>
    );
  }
}

export default HelloWorld;

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
