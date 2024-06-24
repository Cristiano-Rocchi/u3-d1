const ButtonComponent =props =>{
    console.log("BUTTONPROPS", props)
    return (
        <button id={props.id} >{props.buttonText}</button>
    )
}
export default ButtonComponent