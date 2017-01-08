import React, {Component} from "react";
import Puzzle from "./Puzzle";
import Piece from './Piece';

export default class Board extends Component {
    constructor(props){
        super(props);
        this.imgs = [];
        this.splitImage();
    } 

    generateRandomNumber() {
        let n = Math.floor(Math.random()*800);
        if(n< 200 || n > 600) return n +'px';
        else return (n<400) ?  n-200 +'px' : n +200 + 'px'; 
    }    

    renderImage(i,src) {
        const left = Math.floor(Math.random()*350) + 'px';
        const top = this.generateRandomNumber();
        const styles = {
            position: 'aboslute',
            top: top,
            left: left,
        };
        return (
            <div key={i} style={styles}>
                <Piece src={src} />
            </div>
        );
     }
     
    splitImage() {
        const canvas = document.createElement("canvas");
        const div = document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "";
        img.src = 'http://i.imgur.com/3zvEK12.jpg';
        img.onload = () => {
            for(let j=0;j<16;j++){
                canvas.width = 100;
                canvas.height= 100;
                const pieceX = Math.floor(img.width/4)*(j%4);
                const pieceY = Math.floor(img.height/4)*Math.floor(j/4);      
                ctx.drawImage(img,pieceX,pieceY,img.width/4,img.height/4,0,0,canvas.width,canvas.height);
                let url = canvas.toDataURL();
                const img1 = new Image();
                img1.crossOrigin = "";
                img1.src = url;
                div.appendChild(img1);
                this.imgs.push(url);
            }
        };
    }

    render(){
        var s = this.imgs.map(function(url, index){
                return renderImage(index,url);
            });
        return (
            <div style={{width:'400px',height:'800px', backgroundColor:'#ff9600',position:'relative',display:'flex',alignItems:'center'}}>
            {s}
            </div>
        );
    }
} 