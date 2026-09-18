import { useContext, useState } from "react";
import { GlobalVar } from "../Global/Index";
import './Todo.css'
function Index() {
  const { isLogin, setIsLogin } = useContext(GlobalVar);

  const [form, setForm] = useState({
    task_no: "",
    task: "",
  });
  const { task_no, task } = form;
  const handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submit = () => {
    let existed = isLogin.todo.find((i) => i.task_no === task_no);
    if (existed) {
      alert("task_no is alloted");
    } else {
      setIsLogin({ ...isLogin, todo: [...isLogin.todo, form] });
      setForm({
        task_no: "",
        task: "",
      });
    }
  };
  return (
    <div className="todo-container">
      <label>
        Task no
        <input type="text" name="task_no" value={task_no} onChange={handler} />
      </label>
      <br />
      <label>
        Task <textarea name="task" value={task} onChange={handler} />
      </label>
      <button onClick={submit}>add task</button>
    </div>
  );
}

export default Index;
