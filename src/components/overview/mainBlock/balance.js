import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/balance.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign } from '@fortawesome/free-solid-svg-icons';

var Balance = (props) => {
    return (
        <div className="balance-block">
            <span className="balance-title">Общий баланс</span>
            <span className="balance-value">{props.balance} руб.</span>
        </div>
    )
}

export default Balance;