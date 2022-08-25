/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Colors from "../../Utils/colors";
import { isMusicband, isAdmin, isPlace } from "../../Utils/auth.controller";

const RegisterStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterStyleContJr = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Green_Nigth};
  width: 70%;
  height: 70%;
  font-family: "New Rocker", cursive;
  font-size: 8rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BACK_URI = "http://localhost:3001";
const user = () => {
  if (isMusicband()) return <p>This is musicband component</p>;
  if (isPlace()) return <p>This is place component</p>;
  if (isAdmin()) return <p>This is admin component</p>;
  return <p>Component by default</p>;
};

function InciarSesion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await axios({
      method: "POST",
      data: {
        email,
        password,
      },
      withCredentials: true,
      url: `${BACK_URI}/login`,
    });
    if (response) {
      const { token } = response.data;
      localStorage.setItem("user-token", token);
      const header = new Headers();
      header.append("authorization", token);
      window.location.replace("http://localhost:3000/");
    }
  };

  const logout = () => {
    localStorage.removeItem("user-token");
  };

  return (
    <RegisterStyleCont>
      <NavBar LogIn FondoImg Home />
      <RegisterStyleContJr>
        <h3>Login</h3>
        <label htmlFor="input-email">Email</label>
        <input
          name="input-email"
          id="input_email"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="input-password">Password</label>
        <input
          name="input-password"
          id="input_password"
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={login}>
          LOGIN
        </button>
        <button type="submit" onClick={logout}>
          Logout
        </button>
        {
          user()
        }
      </RegisterStyleContJr>
    </RegisterStyleCont>
  );
}

export default InciarSesion;
