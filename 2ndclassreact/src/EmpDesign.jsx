
let sno=0;
const EmpDesign=(props)=>{
  sno++;
    return(
        <>
          <tr>
            <td>{sno}</td>
            <td>{props.nm}</td>
            <td>{props.eno}</td>
            <td>{props.dpt}</td>
            <td>{props.sal}</td>
          </tr>
        </>
    )
}
export default EmpDesign;