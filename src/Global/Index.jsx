import { createContext, useState } from "react";

export const GlobalVar = createContext();

export function GlobalFun({ children }) {
  const [account, setAccount] = useState([]);
  const [isLogin, setIsLogin] = useState(null);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  return (
    <>
      <GlobalVar.Provider value={{ account, setAccount, isLogin, setIsLogin,form,setForm}}>
        {children}
      </GlobalVar.Provider>
    </>
  );
}
