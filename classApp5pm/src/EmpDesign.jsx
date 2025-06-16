let sno=0;
const Design=(props)=>{
    sno++;
    return(
        <>
     <tr>
        <td>{sno}</td>
        <td>{props.nm}</td>
        <td>{props.roll}</td>
        <td>{props.ct}</td>
        <td>{props.fee}</td>
     </tr>
        </>
    )
}
export default Design;