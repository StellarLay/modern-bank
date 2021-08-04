import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/addCard.css';
import visa from '../img/visa.svg';
import mastercard from '../img/mastercard.svg';
import mir from '../img/mir.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faWifi } from '@fortawesome/free-solid-svg-icons';

var AddCard = (props) => {
    return (
        <div className="addCard-block">
            <h1 className="addCard-title">Оформление новой карты</h1>
            <div className="addCard-paysystem">
                <span className="paysystem-text">Платежная система</span>
                <img src={visa} width="60" alt="visa" />
                <img src={mastercard} width="60" alt="visa" />
                <img src={mir} width="60" alt="visa" />
            </div>
            <div className="addCard-personal">
                <span className="personal-title">Личные данные</span>
                <div className="personal-fInputs">
                    <label>Фамилия*</label>
                    <input type="text" placeholder="Иванов" />
                </div>
                <div className="personal-nInputs">
                    <label>Имя*</label>
                    <input type="text" placeholder="Иван" />
                </div>
                <div className="personal-mInputs">
                    <label>Отчество*</label>
                    <input type="text" placeholder="Иванович" />
                </div>
            </div>
            <div className="addCard__card-data">
                <span className="card-data__title">Данные карты</span>
                <div className="card-data__number">
                    <label>Номер карты*</label>
                    <input type="text" placeholder="4255 0102 0074 4345" />
                </div>
                <div className="card-data__valid-thru">
                    <label>Годен до*</label>
                    <input type="text" placeholder="04/25" disabled />
                </div>
            </div>
        </div>
    )
}

export default AddCard;