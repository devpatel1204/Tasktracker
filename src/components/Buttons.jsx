import PropTypes  from "prop-types"
const Buttons=({color,text,onclick})=>{
    // const onclick=(e)=>{
    //     console.log(e)
    // }

    return(
        <button className='btn'
         style={{backgroundColor:color}}
        onClick={onclick}
         >{text}</button>
    )
}
Buttons.defaultProps={
    color:'blue'
}
export default Buttons