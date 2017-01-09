import React, {Component} from "react";
import Piece from './Piece';

export default class Board extends Component {
    constructor(props){
        super(props);
        //const imgs = this.splitImage();
        //console.log(imgs);
       // this.renderImage = this.renderImage.bind(this);
       // this.splitImage = this.splitImage.bind(this);
        this.state = {
            imgs: []
        };
    } 

    renderImage(i,src) {
        const left = Math.floor(Math.random()*350) + 'px';
        const top = Math.floor(Math.random()*350) + 'px';
        const styles = {
            position: 'absolute',
            top: top,
            left: left,
        };
        return (
            <div key={i} style={styles} >
                <Piece src={src} />
            </div>
        );
     }
     componentDidMount() {
          //const imgs = this.splitImage();
          this.loadImages().then((images) => {
            this.setState({imgs:images});
            console.log(images);
          });
     }
    
    loadImages(){
    return new Promise(function(resolve,reject){
        const img = new Image();
        let imgz = [];
        img.crossOrigin = "";
        img.src = 'http://i.imgur.com/3zvEK12.jpg';
        img.onload = function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        for(let j=0;j<2;j++){
            canvas.width = 200;
            canvas.height= 200;
            const pieceX = Math.floor(img.width/2)*(j%2);
            const pieceY = Math.floor(img.height/2)*Math.floor(j/2);      
            ctx.drawImage(img,pieceX,pieceY,img.width/2,img.height/2,0,0,canvas.width,canvas.height);
            let url = canvas.toDataURL();
            imgz.push(url);
        }
        resolve(imgz);
        };
    });
}
    splitImage() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext('2d');
        const img = new Image();
        let imgz = [];
        img.crossOrigin = "";
        img.src = 'http://i.imgur.com/3zvEK12.jpg';
        img.onload = () => {
            for(let j=0;j<2;j++){
                canvas.width = 200;
                canvas.height= 200;
                const pieceX = Math.floor(img.width/2)*(j%2);
                const pieceY = Math.floor(img.height/2)*Math.floor(j/2);      
                ctx.drawImage(img,pieceX,pieceY,img.width/2,img.height/2,0,0,canvas.width,canvas.height);
                let url = canvas.toDataURL();
                imgz.push(url);
            }
        };
        return imgz;
    }

    render(){  
      
        //setInterval(console.log(JSON.stringify(this.state.imgs.toString())),200);
        var pieces = this.state.imgs.map((url,i)=>{
                //console.log('okdn');
                return this.renderImage(i,url);
            });
        //console.log(pieces);   
        return (
            <div style={{width:'400px',height:'400px', backgroundColor:'#ff9600',position:'relative'}}>
            {pieces}
            </div>
        );
    }
} 