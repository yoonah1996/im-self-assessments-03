import React, { Component } from "react";
import FishTableRow from "./FishTableRow";

//TODO: FishTable will have many FishTableRows

class FishTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fishes : this.props.fishes
        };
    }
    

    render(){
        return(
            <div>
                {this.state.fishes.map(el => (
                    <FishTableRow 
                    fish = {el} 
                    setState = {this.fishTableRow}
                    />

                ))}
            </div>
        )
    }
}

export default FishTable;
