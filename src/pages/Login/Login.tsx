import React, { FormEvent, useState } from "react";
import "./login.scss";
import axios from "@/services/axios";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      const data = response.data;
      const token = data.accessToken;

      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-page">
      <form className="login-page__form" onSubmit={handleLogin}>
        <input
          type="text"
          className="login-page__input"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-page__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-page__button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
