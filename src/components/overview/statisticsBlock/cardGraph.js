import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/statistics.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import Graphyc from './graph';

var Graph = (props) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            borderColor: 'red',
            borderRadius: '4px',
            borderStyle: 'none',
            borderWidth: '0px',
            color: '#5b72e0',
            transition: '.2s linear',
            ':hover *': {
                color: '#4b5ebe',
                transition: '.2s linear'
            }
        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: '#5b72e0',
            letterSpacing: '3px',
            fontSize: '1.2em'
        }),
        singleValue: (provided, state) => ({
            ...provided,
            transition: '.2s linear',
            color: '#5b72e0',
            letterSpacing: '3px',
            fontSize: '1.2em'
        }),
        option: (provided, state, isFocused) => ({
            ...provided,
            cursor: 'pointer',
            width: '150px',
            padding: '10px',
            letterSpacing: '3px',
            backgroundColor: 'white',
            color: '#000',
            transition: '.2s linear',
            ':hover': {
                backgroundColor: '#5b72e0',
                color: '#fff',
                transition: '.2s linear'
            }
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: '#5b72e0',
            paddingRight: '20px'
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none'
        })
    }

    const [selectOptions, setSelectOptions] = useState([]);
    const [currentOption, setCurrentOption] = useState([]);

    useEffect(() => {
        if (props.getCards.length > selectOptions.length) {
            const options = [];

            for (let i = 0; i < props.getCards.length; i++) {
                options[i] = {
                    value: '••••' + props.getCards[i].number.substr(props.getCards[i].number.length - 4),
                    label: '••••' + props.getCards[i].number.substr(props.getCards[i].number.length - 4)
                }
            }
            setSelectOptions(options);
            setCurrentOption(options[0]);
        }
    });

    return (
        <div className="graph-block">
            <div className="graph-block__header">
                <div className="graph-block__header-left">
                    <h2 className="graph-block__title">Статистика для</h2>
                    <Select
                        className="select-block"
                        onChange={setCurrentOption}
                        styles={customStyles}
                        options={selectOptions}
                        value={currentOption}
                    />
                </div>
                <div className="graph-block__header-right">
                    <span className="graph-block__filter">День</span>
                    <span className="graph-block__filter">Неделя</span>
                    <span className="graph-block__filter">Месяц</span>
                    <span className="graph-block__filter">Год</span>
                </div>
            </div>
            <div className="card-info__block">
                <div className="card-info__balance">
                    <span className="card-info__text">Баланс</span>
                    <span className="card-info__balance-value">45000 руб.</span>
                </div>
                <div className="card-info__income">
                    <span className="card-info__text">Доход</span>
                    <span className="card-info__income-value">6000 руб.</span>
                </div>
                <div className="card-info__expenses">
                    <span className="card-info__text">Затраты</span>
                    <span className="card-info__expenses-value">1200 руб.</span>
                </div>
            </div>
            <Graphyc />
        </div>
    )
}

export default Graph;