import React , {Component} from 'react';
import {DragSource} from  'react-dnd';

function collect(connect,monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const imageSource = {
    beginDrag(props) {
        return {
            pieceId: props.id
        };
    }
};
class Piece extends Component{
     render(){
        const { connectDragSource, isDragging } = this.props;
         return connectDragSource(
            <img style={{border:'1px solid black',width:'200px',height:'200px'}} src={this.props.src}></img>
        );
     }
 }
 
 export default DragSource('PIECE',imageSource,collect)(Piece);