let sno=0;
const Design=(props)=>{
    sno++;
    return(
        <>
     <tr>
        <td>{sno}</td>
        <td>{props.nm}</td>
        <td>{props.rollno}</td>
        <td>{props.city}</td>
        <td>{props.fees}</td>
     </tr>
        </>
    )
}
export default Design;