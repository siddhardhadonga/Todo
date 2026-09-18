import React, { useContext } from "react";
import { GlobalVar } from "../Global/Index";
import './TodoList.css'
function Index() {
  const { isLogin,setIsLogin} = useContext(GlobalVar);
  const remove=(task_no)=>{
    let existed=isLogin.todo.find(i=>i.task_no===task_no)
    if(existed){
        const updateTodo=isLogin.todo.filter(i=>i.task_no!==task_no)
        setIsLogin({...isLogin,todo: updateTodo})
    }
  }
  return (
    <div className="todo-list">
      {isLogin.todo.map((i) => {
        return (
            <div key={i.task_no} className="todo-item"> {i.task} <button onClick={()=>remove(i.task_no)}>task is completed</button></div>
        )
      })}
    </div>
  );
}

export default Index;
