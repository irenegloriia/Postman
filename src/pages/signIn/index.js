import React, { useState } from 'react';
import { setCookie } from '../../utils/cookie';
import { newAuthService } from '../../services';
import { login } from '../../assets';
import './style.css';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLoginLoading, setLoginLoading] = useState(false);

  const onSubmitLogin2 = () => {
    // console.log(username + password);
    setLoginLoading(true);
    axios.post('http://167.99.78.155:8080/api/login', {
      username: username,
      password: password,
    });
    newAuthService
      .login(username, password)
      .then((res) => {
        console.log(res.token);
        const cookieToken = res.token;
        const cookieUserId = res.userId;
        const cookieUsername = res.username;
        setCookie('userId', JSON.stringify(cookieUserId), 10000);
        setCookie('username', JSON.stringify(cookieUsername), 1000);
        setCookie('token', JSON.stringify(cookieToken), 10000);
        // console.log(res.status);
        // console.log(res.data);
        // console.log(res.data.userId);
        // console.log(res.data.username);
        // console.log(res.data.token);
        // console.log('tes');
      })
      .catch((err) => {
        console.log(err);
        // console.log(err.status);
        // console.log(err.data);
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  return (
    <div className="card" id="home">
      <div className="container">
        <div className="leftContent">
          {/* <div className="loginPage"> */}
          <img alt="login" src={login} />
        </div>
        <div className="rightContent">
          <h1> Login </h1>
          <form
            className="login_form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitLogin2();
            }}
          >
            <label htmlFor="username">
              <p>Username</p>
              <input
                className="kotak"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              <p> Password </p>
              <input
                className="kotak"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <input
              className="enter"
              type="submit"
              value="Submit"
              disabled={isLoginLoading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;