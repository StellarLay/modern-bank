import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/overview.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import Login from '../login/login';
import Balance from './mainBlock/balance';
import Cards from './mainBlock/cards';
import Stats from './statisticsBlock/main';

function Overview(props) {
    const [isStatusLogin, setIsStatusLogin] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState("none");
    const [balance, setBalance] = useState(0);
    const [cardList, setCardList] = useState(null);

    var clickLogin = () => { setIsStatusLogin(true); }
    var openCloseLogin = (value) => { setIsStatusLogin(value); }
    var openLogin = (value) => { setIsLogin(value); }
    var getLoginAndPass = (username, pass) => { setUsername(username); }
    var totalBalance = (value) => { setBalance(value) }

    // Передаём список карт в статы
    const cardItems = (data) => { setCardList(data) }

    // Переключаем логин или кнопку
    useEffect(() => {
        if (props.statusLogin === false) { setIsLogin(false); }
    });


    return (
        <div className="overview-block">
            <div className="overview-block__header">
                <h1 className="overview-title">Главная</h1>
                <div className="user-panel">
                    <FontAwesomeIcon className="icons-panel" icon={faSearch} />
                    <FontAwesomeIcon className="icons-panel" icon={faBell} />
                    {isLogin
                        ? <div className="isLogin-block">
                            <span className="isLogin-name">{username}</span>
                            <div className="image-block">{username[0]}</div>
                        </div>
                        : <button className="signIn-btn" onClick={() => clickLogin()}>Вход</button>
                    }
                </div>
                <CSSTransition
                    in={isStatusLogin}
                    timeout={300}
                    unmountOnExit
                    classNames="alert"
                >
                    <Login
                        isClose={openCloseLogin}
                        isLogin={openLogin}
                        changeLogin={props.changeLogin}
                        usernameAndPass={getLoginAndPass}
                    />
                </CSSTransition>
            </div>
            {!isLogin ? <h1 className="notLogin-text">Необходимо войти в аккаунт!</h1> :
                <div className="content-block">
                    <div className="balanceCard-block">
                        <Balance balance={balance} />
                        <Cards totalSum={totalBalance} getCards={cardItems} />
                    </div>
                    {cardList !== null ?
                        <Stats listCards={cardList} />
                        : null}
                </div>
            }
        </div>
    );
}

export default Overview;
