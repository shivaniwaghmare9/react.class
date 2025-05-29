
import { useSelector,useDispatch } from "react-redux";
import { addTask } from "../TodoSlice";
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
                <td>{key.task}</td>
             </tr>
            </>
        )
    })
    return(
        <>
        <h1>Todo App!!!</h1>
        Enter task: <input type="text"value={val} 
        onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
        <button onClick={()=>{dispatch(addTask({task:val}))}}>Add!!!</button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Task</th>
          <th>Last Name</th>
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