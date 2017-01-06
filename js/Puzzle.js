import React, {Component} from "react";
import Cell from "./Cell";

export default class Puzzle extends Component {
    render(){
        return (
            <div style={{width:'400px',height:'400px', backgroundColor:'#0f0f69',display:'flex'}}>
            <Cell/>
            </div>
        );
    }
} 