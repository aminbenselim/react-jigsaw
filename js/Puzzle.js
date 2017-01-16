import React, {Component} from "react";

import Cell from "./Cell";

export default class Puzzle extends Component {
  renderCell(i, xPos, yPos) {
    return (
      <div key={i} style={{width: `${100 / this.props.RC}%`, height: `100 / this.props.RC}%`}}>
        <Cell xPos={xPos} yPos={yPos} /></div>
    );
  }

  render() {
    const Cells = [];

    const i = +this.props.RC;
    const side = Math.floor(this.props.size / i);
    for (let j = 0; j < i*i; j++) {
      const xPos = j % i * side + "px";

      const yPos = Math.floor(j / i) * side + "px";

      Cells.push(this.renderCell(j, xPos, yPos));
    }

    const styles = {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: "#0f0f69",
      display: "inline-flex",
      flexWrap: "wrap",
      "zIndex": 1
    };

    return <div style={styles}>{Cells}</div>;
  }
}
