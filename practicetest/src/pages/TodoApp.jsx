
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../todoSlice";
const TodoApp=()=>{
    const data=useSelector(state=>state.todo.task)
    const dispatch=useDispatch();
    const [val,setVal]=useState("");
    let sno=0;
    const ans=data.map((key)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{key.sno}</td>
                <td>{key.task}</td>
             </tr>

            </>
        )
    })
    return(
        <>
          <h1>ToDo App!!</h1>
          Enter Task: <input type="text" value={val} 
          onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
          <button onClick={()=>{dispatch(addTask({task:val}))}}>Add!!</button>
           <table>
            <tr>
                <th>SNO</th>
                <th>TASK</th>
                <th></th>
                <th></th>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default TodoApp;