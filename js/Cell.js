import React, {Component} from "react";
//import update from 'immutability-helper';


import {DropTarget} from "react-dnd";

const cellTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    console.log(delta);
    console.log(item);
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);
console.log(left + '' + top);
    return {left, top };
   // component.dropPiece(item.id, left, top);
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

  dropImage(Piece, left, top){
    
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
