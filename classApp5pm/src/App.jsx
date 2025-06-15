

const App=()=>{
    const show=(nm,ct,e)=>{
          alert(`Hello i am  ${nm} i am from ${ct} Type:${e.type}`)
    }
    return(
        <>
          <h1>Events!!</h1>
          <button onClick={(e)=>{show("shivani","bhopal",e)}}>click</button>
        </>
    )
}
export default App;