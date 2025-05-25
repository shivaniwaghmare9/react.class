
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,Remove,RemoveTask,taskComplete,taskInComplete,myEdit } from "../todoSlice";
const TodoApp=()=>{
    const data=useSelector(state=>state.todo.task)
    const dispatch=useDispatch();
    const [val,setVal]=useState("");
    const[btn,setBtn]=useState(true);
    const[myid,setMyid]=useState("");
    console.log(data);
    const dataEdit=(id,work)=>{
        setVal(work);
        setBtn(false);
        setMyid(id);
    }
    const myEditData=()=>{
        dispatch(myEdit({id:myid, work:val}))
        setBtn(true);
    }
    let sno=0;
    const ans=data.map((key,index)=>{
        sno++;
        return(
            <>
             <tr>
                <td>{sno}</td>
                <td>{key.taskStatus?(
                    <span style={{color:"red",textDecoration:"line-through"}}>{key.work}</span>
                ):(
                    <>{key.work}</>
                )}

                </td>
                <td>
                    <button onClick={()=>{dispatch(Remove({id:index}))}}>Remove</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(RemoveTask({id:key.id}))}}>Delete</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(taskComplete({id:key.id}))}}>Complete</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>InComplete</button>
                </td>
                <td>
                    <button onClick={()=>{dataEdit(key.id,key.work)}}>Edit</button>
                </td>
             </tr>

            </>
        )
    })
    return(
        <>
          <h1>ToDo App!!</h1>
          Enter Task: <input type="text" value={val} 
          onChange={(e)=>{setVal(e.target.value)}}/><br/><br/>
          {btn?(
            <>
            <button onClick={()=>{dispatch(addTask({id:Date.now(),work:val, taskStatus:false}))}}>Add!!</button>
            </>
          ):(
             <>
             <button onClick={myEditData}>EditSave!!</button>
             </>
          )}
          
           <table border="2" width="700px">
            <tr>
                <th>SNO</th>
                <th>TASK</th>
                <th>REMOVE</th>
                <th>DELETE</th>
                <th>COMPLETE</th>
                <th>INCOMPLETE</th>
                <th>EDIT</th>
            </tr>
            {ans}
           </table>
        </>
    )
}
export default TodoApp;