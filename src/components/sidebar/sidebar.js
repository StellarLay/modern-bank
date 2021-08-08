import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/sidebar.css';
import Modal from '../modal';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faShoppingBag, faHistory, faWallet, faSignal, faBullseye, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const settingKey = "settings";
    const exitKey = "exit";

    const menu = [
        { icons: faCreditCard, text: "Главная" },
        { icons: faShoppingBag, text: "Платежи" },
        { icons: faHistory, text: "История" },
        { icons: faWallet, text: "Кошелек" },
        { icons: faSignal, text: "Статистика" },
        { icons: faBullseye, text: "Цели" },
    ];

    var OpenCloseModal = (value) => {
        setShow(value);
    }

    var clickMenu = (i, e) => {
        setIndex(i);
        document.querySelector('.active') && document.querySelector('.active').classList.remove('active')
        e.currentTarget.className = "active";
    }

    var clickExit = (e, valueKey) => {
        document.querySelector('.active') && document.querySelector('.active').classList.remove('active')
        e.currentTarget.className = "active";
        if (valueKey === "exit") {
            setShow(true);
        }
    }

    var isLogin = (value) => { props.statusLogin(value); }

    // Set select first menu li
    useEffect(() => {
        const menuArr = document.querySelectorAll("li");
        menuArr[0].classList.add("active");
    }, []);

    return (
        <div className="sidebar-block">
            <CSSTransition
                in={show}
                timeout={300}
                unmountOnExit
                classNames="alert"
            >
                <Modal isActive={OpenCloseModal} isLogin={isLogin} />
            </CSSTransition>
            <div className="sidebar__top-block">
                <h1 className="sidebar-title"><a href="/modern-bank" className="sidebar-title">Modern<span>bank</span></a></h1>
                <nav className="sidebar-menu">
                    <ul className="sidebar-menu__inner">
                        {menu.map((step, i) => (
                            <li key={i} onClick={(e) => clickMenu(i, e)}>
                                <FontAwesomeIcon className="icons-menu" icon={step.icons} />
                                <a>{step.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="sidebar__bot-block">
                <nav className="sidebar__settings-menu">
                    <ul className="sidebar-menu__inner">
                        <li key={settingKey} onClick={(e) => clickExit(e, settingKey)}>
                            <FontAwesomeIcon className="icons-menu" icon={faCog} />
                            <a>Настройки</a>
                        </li>
                        <li key={exitKey} onClick={(e) => clickExit(e, exitKey)}>
                            <FontAwesomeIcon className="icons-menu" icon={faSignOutAlt} />
                            <a>Выйти</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default React.memo(Sidebar);
