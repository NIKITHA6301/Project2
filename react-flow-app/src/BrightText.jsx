function BrightText({color}){
    const textStyle={
        color:color
    }
    return(
        <>
        
        <p style={textStyle} >this is {color} text </p>
        </>
    )
}
export default BrightText;