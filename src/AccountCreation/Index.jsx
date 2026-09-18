import { useContext, useState } from "react";
import { GlobalVar } from "../Global/Index";
import './Account.css'
function Index() {
  const { account , setAccount} = useContext(GlobalVar);
  const [form, setForm] = useState({
    username: "",
    password: "",
    todo:[]
  });
  const { username, password } = form;
  const handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submit = () => {
setAccount([...account,form])
setForm({
    username: "",
    password: "",
    todo:[],
  })
  };
  return (
    <div className="mainContainer">
      <div className="div1">
        <label>
          username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handler}
          />
        </label>
        <br />
        <label>
          password
          <input
            type="text"
            name="password"
            value={password}
            onChange={handler}
          />
        </label>
        <br />
        <button onClick={submit}>submit</button>
      </div>
    </div>
  );
}

export default Index;
