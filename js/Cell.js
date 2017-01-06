import React, {Component} from 'react';
export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
        this.toggleHover = this.toggleHover.bind(this);
    }
    render(){
        let style;
        (this.state.hover) ? style = {width:'100%', height:'100%',border: '1px solid green'}
         : style = {width:'100%', height:'100%'};
        return (
            <div 
            className="cell" 
            style={style} 
            onMouseEnter={this.toggleHover} 
            onMouseLeave={this.toggleHover}>
            {this.props.children}
            </div>
            );
    }
    toggleHover(){
        this.setState({hover: !this.state.hover});
    };
};