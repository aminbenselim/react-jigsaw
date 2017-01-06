import React, {Component} from "react";
import Puzzle from "./Puzzle";

export default class Board extends Component {
    render(){
        return (
            <div style={{width:'400px',height:'800px', backgroundColor:'#ff9600',display:'flex',alignItems:'center'}}>
            <Puzzle/>
            </div>
        );
    }
} 