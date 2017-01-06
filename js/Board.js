import React, {Component} from "react";

export default class Board extends Component {
    render(){
        return (
            <div style={{width:'500px',height:'800px', 'background-color':'#ff9600'}}>
                {this.props.children}
            </div>
        );
    }
} 