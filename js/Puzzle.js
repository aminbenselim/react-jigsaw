import React, {Component} from "react";
import Cell from "./Cell";

export default class Puzzle extends Component {
   renderCell(i) {
  const x = i % 4;
  const y = Math.floor(i / 4);
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
        return (
            <div style={{width:'400px',height:'400px', backgroundColor:'#0f0f69',display:'flex',flexWrap:'wrap'}}>
            {Cells}
            </div>
        );
    }
} 