import React, {Component} from "react";

import Cell from "./Cell";

export default class Puzzle extends Component {
  renderCell(i, xPos, yPos) {
    return (
      <div key={i} style={{width: "25%", height: "25%"}}>
        <Cell xPos={xPos} yPos={yPos} /></div>
    );
  }

  render() {
    const Cells = [];

    for (let j = 0; j < 16; j++) {
      const xPos = j % 4 * 100 + "px";

      const yPos = Math.floor(j / 4) * 100 + 250 + "px";

      Cells.push(this.renderCell(j, xPos, yPos));
    }

    const styles = {
      width: this.props.width,
      height: "400px",
      backgroundColor: "#0f0f69",
      display: "inline-flex",
      flexWrap: "wrap",
      "zIndex": 1
    };

    return <div style={styles}>{Cells}</div>;
  }
}
