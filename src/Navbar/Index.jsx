import { NavLink, Routes, Route } from "react-router-dom";
import Home from "../Home/Index";
import Login from "../Login/Index";
import CreateAccount from "../AccountCreation/Index";
import Todo from "../Todo/Index";
import List from "../TodoList/Index";
import "./Navbar.css";
import { useContext } from "react";
import { GlobalVar } from "../Global/Index";

function Index() {
  const { isLogin } = useContext(GlobalVar);
  return (
    <div>
      <nav className="navbar">
        {isLogin && <NavLink to="/todo">AddTodo</NavLink>}

        {isLogin && <NavLink to="/list">List</NavLink>}
        {!isLogin && <NavLink to="/">Home</NavLink>}
        <NavLink to="/login">Login</NavLink>
      </nav>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </main>
    </div>
  );
}

export default Index;
