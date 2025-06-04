

 const MapTable=()=>{
  const student=[
    {
      name:"shivani",
      rollono:123,
      city:"Bhopal",
      fees:45000
    },
    {
      name:"Sweta",
      rollono:123,
      city:"Bhopal",
      fees:25000
    },
    {
      name:"Divya",
      rollono:123,
      city:"Bhopal",
      fees:65000
    },
    {
      name:"Pritam",
      rollono:123,
      city:"Bhopal",
      fees:35000
    },
    {
      name:"Ram",
      rollono:123,
      city:"Bhopal",
      fees:55000
    }
  ]
  const ans=student.map((key)=>{
    return(
      <>
       <tr>
        <td>{key.name}</td>
        <td>{key.rollono}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
       </tr>
      </>
    )
  })
  return(
    <>
    <h1 align="center">Student Records!!!</h1><br/>
    <div className="tbl">
       
     <table border="1" cellPadding="15px" cellSpacing="10px">
      <tr>
        <th>Name</th>
        <th>Rollno</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {ans}
     </table>
    </div>
     
    </>
  )
}
export default MapTable;
