import React, { Component } from "react";

class Grid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s2 purple lighten-5">1</div>
          <div className="col s2 purple lighten-4">2</div>
          <div className="col s2 purple lighten-3">3</div>
          <div className="col s2 purple lighten-2">4</div>
          <div className="col s2 purple lighten-1">5</div>
          <div className="col purple s2">6</div>
        </div>
        <div class="row pink lighten-3">
          <div class="col s12">
            This div is 12-columns wide on all screen sizes
          </div>
          <div class="col s6">6-columns (one-half)</div>
          <div class="col s6">6-columns (one-half)</div>
        </div>
        <div class="col s12 m2">
          <p class="z-depth-1">z-depth-1</p>
        </div>
        <div class="col s12 m2">
          <p class="z-depth-2">z-depth-2</p>
        </div>
        <div class="col s12 m2">
          <p class="z-depth-3">z-depth-3</p>
        </div>
        <div class="col s12 m2">
          <p class="z-depth-4">z-depth-4</p>
        </div>
        <div class="col s12 m2">
          <p class="z-depth-5">z-depth-5</p>
        </div>
      </div>
    );
  }
}

export default Grid;
