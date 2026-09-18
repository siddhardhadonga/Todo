import React, { useContext } from "react";
import { GlobalVar } from "../Global/Index";

function Index() {
  const { isLogin } = useContext(GlobalVar);
  return (
    <div>
      {isLogin.todo.map((i) => {
        return (
            <div key={i.task_no}> {i.task} </div>
        )
      })}
    </div>
  );
}

export default Index;
