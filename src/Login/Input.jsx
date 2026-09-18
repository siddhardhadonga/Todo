import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./login.css";
import { GlobalVar } from "../Global/Index";
function Index() {
  const { form, setForm } = useContext(GlobalVar);
  const { username, password } = form;
  const handler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <label>
        username
        <input
          type="text"
          name="username"
          value={username}
          onChange={handler}
        />
      </label>

      <label>
        password
        <input
          type="text"
          name="password"
          value={password}
          onChange={handler}
        />
      </label>

      <NavLink to="/createAccount">Create an account</NavLink>
    </>
  );
}

export default Index;
