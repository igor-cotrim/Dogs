import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginForm from "../../components/LoginForm";
import LoginCreate from "../../components/LoginCreate";
import LoginPasswordLost from "../../components/LoginPasswordLost";
import LoginPasswordReset from "../../components/LoginPasswordReset";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { login } = useContext<any>(UserContext)

  if (login === true) return <Navigate to='/conta' />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
