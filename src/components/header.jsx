const Header =props=>{
    console.log("header props", props)
    return(
        <header style={props.style}>
           <div >{props.title}</div> 
           <div style={props.styleDiv}>Home</div>
            
        </header>
    )
}
export default Header