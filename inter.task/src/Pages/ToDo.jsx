
import { useSelector,useDispatch } from "react-redux";
import { addTask,Deletetask } from "../TodoSlice";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const ToDo=()=>{
    const data=useSelector(state=>state.todo.task);
    const dispatch=useDispatch();
    const[val,setVal]=useState("");
    let sno=0;
    const show=data.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.work}</td>
                <td>
                    <button onClick={()=>{dispatch(Deletetask({id:key.id}))}}>Delete</button>
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
        <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val}))}}>Add!!!</button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Username</th>
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