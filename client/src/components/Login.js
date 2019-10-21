import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Login = ({ history }) => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        history.push("/bubbles");
      })
      .catch(err => console.log(err.response));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={creds.username}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        value={creds.password}
      />
      <button type="submit">Log In Here!</button>
    </form>
  );
};

export default Login;
