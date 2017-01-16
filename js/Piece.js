import React, {Component} from "react";

import {DragSource} from "react-dnd";

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const imageSource = {
  beginDrag(props) {
    const { id, left, top } = props;
    return { id, left, top };
  },
  endDrag(props, monitor, component){
    if(monitor.didDrop()){
      const {left, top} = monitor.getDropResult();
      component.setState({left,top,z:2});
    }  
  }
};

class Piece extends Component {
  constructor(props){
      super(props);
      this.state = {
          left: this.props.left,
          top: this.props.top,
          z: 0
      };
  }
  
  render() {
    const { connectDragSource, isDragging, children } = this.props;

    const left = this.state.left;
    const top = this.state.top;
    const z = this.state.z;
    const styles = {position: "absolute", cursor: 'move', top: `${top}px`, left:`${left}px`,zIndex: {z}};
    return connectDragSource(
      <div style={styles} >
        <img style={{border: "1px solid black"}} src={this.props.src}></img>
        </div>
    );
  }
}

export default DragSource("PIECE", imageSource, collect)(Piece);
