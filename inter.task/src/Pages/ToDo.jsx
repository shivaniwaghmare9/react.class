
import { useSelector,useDispatch } from "react-redux";
import { addTask,Deletetask,DeleteByIndex,Complete,InComplete } from "../TodoSlice";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const ToDo=()=>{
    const data=useSelector(state=>state.todo.task);
    const dispatch=useDispatch();
    const[val,setVal]=useState("");
    let sno=0;
    const show=data.map((key,index)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.taskStatus?(
                       <>
                       <span style={{color:"red",textDecoration:"line-through"}}>
                           {key.work}
                       </span>
                       </>
                    ):(
                       <>
                        {key.work}
                       </>
                   )}
                </td>
                <td>
                    <button onClick={()=>{dispatch(Deletetask({id:key.id}))}}>Delete</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(DeleteByIndex({id:index}))}}>Remove</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(Complete({id:key.id}))}}>Complete</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(InComplete({id:key.id}))}}>InComplete</button>
                </td>
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Todo App!!!</h1>
        Enter task: <input type="text"value={val} 
        onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
        <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val,taskStatus:false}))}}>Add!!!</button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Remove</th>
          <th>Complete</th>
          <th>Incomplete</th>
        </tr>
      </thead>
      <tbody>
        {show}
      </tbody>
      </Table>
        
        </>
    )
}
export default ToDo;