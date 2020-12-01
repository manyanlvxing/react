import React from "react";

class ImageComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <img src={this.props.url} alt={this.props.altTips}/>
        )


    }
}

export default ImageComp;