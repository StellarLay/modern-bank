import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/statistics.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import Graph from './cardGraph';


var Stats = (props) => {
    return (
        <div className="stats-block">
            <Graph getCards={props.listCards} />
        </div>
    )
}

export default Stats;