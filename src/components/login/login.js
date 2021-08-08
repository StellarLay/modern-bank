import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/login.css';

var Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    var clickClose = () => { props.isClose(false); }
    var clickLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            setError(true);
        }
        else {
            setError(false);
            props.isClose(false);
            props.isLogin(true);
            props.changeLogin(true);
            props.usernameAndPass(username, password);
        }
    }

    var changeLogin = (e) => {
        setUsername(e.target.value);
    }

    var changePass = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-block">
            <h1 className="login-title">Авторизация</h1>
            <div className="login-form">
                <label>Имя пользователя:</label>
                <input type="text" value={username} onChange={(e) => changeLogin(e)} />
                <label>Пароль:</label>
                <input type="password" onChange={(e) => changePass(e)} />
                <button className="login-btn" onClick={() => clickLogin()}>Войти</button>
                {error ? <span className="error-text">Введите логин и пароль</span> : null}
            </div>
            <FontAwesomeIcon className="icons-close" icon={faTimes} onClick={() => clickClose()} />
        </div>
    )
}

export default Login;