
const App=()=>{
    const show=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       console.log(name,value)
    }
    return(
        <>
        <h1>Events!!</h1>
        <button name="btn" value="mybtn" onClick={show}>Click</button>
        </>
    )
}
export default App;