import Buttons from "./Buttons"

const Appheader=({title,onAdd, showAdd})=>{
    const onclick=()=>{
        console.log('click')
    }
    return(
         <header >
         <h1 className='header'>{title}</h1>
         <Buttons color={showAdd?'red':'green'} text={showAdd?'close':'Add'} onclick={onAdd}></Buttons>
         </header>
    )
}
export default Appheader