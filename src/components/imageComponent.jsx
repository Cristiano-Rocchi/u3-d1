import React from "react";

class ImageContent extends React.Component {
    render(){
        return(
            <div>
                <img src={this.props.imgLink} alt="" />
            </div>
        )
    }
}
export default ImageContent;