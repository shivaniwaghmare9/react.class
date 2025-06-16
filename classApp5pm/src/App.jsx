
const App=()=>{
    const Record=["PHP","Html","Java","Mern"]
    const ans=Record.map((key)=>{
        return(
            <>
            <li>{key}</li>
            </>
        )
    })
    return(
        <>
        <h1>Arrray!!</h1><br/><br/>
         <ul>{ans}</ul>

        </>
    )
}
export default App;