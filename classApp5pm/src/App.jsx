
const App=()=>{
    const Record=["PHP","Html","Java","Mern"]
    const ans=Record.map((key)=>{
        return(
            <>
            <h1>{key}</h1>
            </>
        )
    })
    return(
        <>
        <h1>Arrray!!</h1><br/><br/>
         <ol>{ans}</ol>

        </>
    )
}
export default App;