import React, {Component} from "react";
import Cell from "./Cell";

export default class Board extends Component {
    render(){
        return (
            <div style={{width:'500px',height:'800px', backgroundColor:'#ff9600',display:'flex'}}>
            <Cell/>
            </div>
        );
    }
} 