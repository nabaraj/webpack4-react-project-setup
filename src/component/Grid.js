import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s2 cyan lighten-5">1</div>
          <div className="col s2 cyan lighten-4">2</div>
          <div className="col s2 cyan lighten-3">3</div>
          <div className="col s2 cyan lighten-2">4</div>
          <div className="col s2 cyan lighten-1">5</div>
          <div className="col cyan s2">6</div>
        </div>
      </div>
    );
  }
}

export default Grid;
