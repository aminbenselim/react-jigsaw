 import React , {Component} from 'react';

 export default class Piece extends Component{
     render(){
         return (
            <img style={{border:'1px solid black',width:'200px',height:'200px'}} src={this.props.src}></img>
        );
     }
 }
 