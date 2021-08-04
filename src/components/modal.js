import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/modal.css';
import { CSSTransition } from 'react-transition-group';

function ModalWin(props) {
    var clickNo = () => {
        document.querySelector('.active') && document.querySelector('.active').classList.remove('active');
        props.isActive(false);
    }

    var clickYes = () => {
        document.querySelector('.active') && document.querySelector('.active').classList.remove('active');
        props.isLogin(false);
        props.isActive(false);
    }

    return (
        <React.Fragment>
            <div className="modal-page">
                <span className="modal-title">Вы действительно хотите выйти с аккаунта?</span>
                <div className="modal-btns">
                    <button className="modal-button" onClick={() => clickYes()}>Да</button>
                    <button className="modal-button" onClick={(e) => clickNo(e)}>Нет</button>
                </div>
            </div>
            <div className="black-screen"></div>
        </React.Fragment>
    );
}

export default ModalWin;