import React, {Component} from "react";

import {DropTarget} from "react-dnd";

const cellTarget = {
  drop(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {connectDropTarget: connect.dropTarget(), isOver: monitor.isOver()};
}

class Cell extends Component {
  constructor(props) {
    super(props);

    this.state = {hover: false};

    this.toggleHover = this.toggleHover.bind(this);
  }

  render() {
    const {connectDropTarget, isOver, children} = this.props;

    let style;

    this.state.hover
      ? style = {width: "100%", height: "100%", border: "1px solid green"}
      : style = {width: "100%", height: "100%"};

    return connectDropTarget(
      <div className="cell" style={style} onMouseEnter={
        this.toggleHover
      } onMouseLeave={this.toggleHover}>
        {this.props.children}
      </div>
    );
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }
}

export default DropTarget("PIECE", cellTarget, collect)(Cell)
