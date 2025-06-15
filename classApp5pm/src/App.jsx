
const App=()=>{
    const handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       //alert(`Name: ${name} Value: ${value} Type: ${e.type}`)
       console.log({[name]:value})
    }
    return(
        <>
        <h1>Events!!</h1>
      Enter Name: <input type="text" name="city" value="indore" onChange={handleInput}/><br/><br/>
      
        </>
    )
}
export default App;