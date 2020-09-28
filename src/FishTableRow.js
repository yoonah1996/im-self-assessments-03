import React, { Component } from "react";

//TODO: FishTable has many FishTableRows

class FishTableRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fish : this.props.fish
        };
    }
    

    render(){
        return(
            <div>
        <div>{this.state.fish.name}</div>
        <div>
            <img
				src={this.state.fish.image}>
            </img>
        </div>
        <div>
            {this.state.fish.description}
        </div>
    </div>
        )
    }
}
    
export default FishTableRow;
