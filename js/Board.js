import React, {Component} from "react";
import Puzzle from "./Puzzle";



export default class Board extends Component {
     constructor(props){
         super(props);
         this.srcs= [];
    }     
    renderimage(i,src) {
         return (
        <div key={i} style={{backgroundColor:'yellow'}}>
            <img src={src} ></img>
        </div>
        );
     }
     componentDidMount() {
      this.srcs = this.splitImage();
    }
    componentDidUpdate() {
      this.srcs = this.splitImage();
    }
    splitImage() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const imgs = [];
    const img = new Image();
    img.crossOrigin = "";
    img.src = 'http://i.imgur.com/3zvEK12.jpg';
    img.onload = () => {
        console.log("loaded bitch");
     //  ctx.drawImage(img,0,0,400,400);
        for(let j=0;j<16;j++){
            canvas.width = 100;
            canvas.height= 100;
        const characterX = Math.floor(img.width/4)*(j%4);
        const characterY = Math.floor(img.height/4)*Math.floor(j/4);      
        let small_image = new Image();
        ctx.drawImage(img,characterX,characterY,img.width/4,img.height/4,0,0,canvas.width,canvas.height);
        small_image.src =  canvas.toDataURL();
                               console.log(small_image.src);
        small_image.setAttribute('crossOrigin', 'anonymous');
        imgs.push(small_image);
       }
        
    };
    return imgs;    
}


    render(){
        const imgs = [];
        for(let j =0;j<16;j++){
            imgs.push(this.renderimage(j,this.srcs[j]));
        }
        
        return (
            <div style={{width:'400px',height:'800px', backgroundColor:'#ff9600',display:'flex',alignItems:'center'}}>
            <canvas ref="canvas" id="canvas"></canvas>
            {imgs}
            <Puzzle/>
            </div>
        );
    }
} 