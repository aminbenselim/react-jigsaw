import React, {Component} from "react";
import Cell from "./Cell";

export default class Puzzle extends Component {
   renderCell(i) {
  return (
    <div key={i}
         style={{ width: '25%', height: '25%' }}>
                  <Cell/>
</div>
  );
  }
    render(){
        const Cells = [];
        for(let j=0; j<16;j++){
            Cells.push(this.renderCell(j));
        }
        const styles = {
            width:this.props.width,
            height:'400px', 
            backgroundColor:'#0f0f69',
            display:'inline-flex',
            flexWrap:'wrap',
            'zIndex': 1
        };
        return (
            <div style={styles}>
            {Cells}
            </div>
        );
    }
} 