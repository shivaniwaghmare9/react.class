

const App=()=>{
    const show=(nm,ct)=>{
          alert(`Hello i am  ${nm} i am from ${ct}`)
    }
    return(
        <>
          <h1>Events!!</h1>
          <button onClick={()=>{show("shivani","bhopal")}}>click</button>
        </>
    )
}
export default App;