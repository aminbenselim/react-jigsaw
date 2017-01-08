 import React , {Component} from 'react';

 export default class Piece extends Component{
     render(){
         return (
            <img src={this.props.src}>{this.props.children}</img>
        );
     }
 }
 