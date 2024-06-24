import React from "react";

class ImageContent extends React.Component {
  
    render(){  console.log("imageprops",this.props)
        return(
            <div>
                <img src={this.props.imgLink} alt={this.props.textInfo} style={this.props.style}  />
            </div>
        )
    }
}
export default ImageContent;