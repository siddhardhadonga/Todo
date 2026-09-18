import "./login.css";
import Input from "./Input";
import { useContext } from "react";
import { GlobalVar } from "../Global/Index";
function Index() {
  const { account,setAccount, isLogin, setIsLogin, form, setForm } = useContext(GlobalVar);
  const { username, password } = form;
  const login = () => {
    let existed = account.find(
      (i) => i.username === username && i.password === password,
    );
    if (existed) {
      setIsLogin(existed);
    } else {
      alert("incorrect password");
    }
  };
  const logout = () => {
    const updateLatest=account.map(i=>i.username===username? isLogin : i)
    setAccount(updateLatest)
    setIsLogin(null);
    setForm({
      username: "",
      password: "",
    });
  };
  return (
    <div className="login-page">
      {!isLogin && <Input />}
      <div>
        <button onClick={!isLogin ? login : logout}>
          {!isLogin ? "login" : "logout"}
        </button>
      </div>
    </div>
  );
}

export default Index;
