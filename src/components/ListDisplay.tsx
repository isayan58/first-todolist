import React, {Component} from "react";

class ListDisplay extends Component
{
    render()
    {
        console.log(this.props.children);
        return(
            <div></div>
        )
    }
}

export default ListDisplay;