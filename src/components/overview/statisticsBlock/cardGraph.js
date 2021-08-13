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
    const [currentBalance, setCurrentBalance] = useState([]);
    const [operationData, setOperationData] = useState(null);
    const [totalIncome, setTotalIncome] = useState(null);
    const [totalExpenses, setTotalExpenses] = useState(null);

    // Заполним массив с данными об операциях для примера
    const loadOperData = () => {
        let cardOperData = {
            income: [],
            expenses: []
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        }

        for (let i = 0; i < 7; i++) {
            cardOperData.income[i] = getRandomInt(200, 10000);
            cardOperData.expenses[i] = getRandomInt(200, 10000);
        }

        setOperationData(cardOperData);
    }
    useEffect(() => { loadOperData(); }, []);

    // Загрузить статы о картах
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
            setCurrentBalance(props.getCards[0].balance);
        }

        // Подгружаем баланс
        if (currentOption.length !== 0) {
            const getCurrentNumber = currentOption.value.substr(currentOption.value.length - 4);
            const filterArray = props.getCards.filter(i => i.number.substr(i.number.length - 4) == getCurrentNumber);
            setCurrentBalance(filterArray[0].balance);
        }

        // Подгружаем доходы и затраты
        if (operationData !== null) {
            let sumIncome = operationData.income.reduce(function (sum, current) {
                return sum + current;
            });
            let sumExpenses = operationData.expenses.reduce(function (sum, current) {
                return sum + current;
            });
            setTotalIncome(sumIncome);
            setTotalExpenses(sumExpenses);
        }
    });

    const changeSelect = (e) => {
        setCurrentOption(e);
        loadOperData();
    }

    return (
        <div className="graph-block">
            <div className="graph-block__header">
                <div className="graph-block__header-left">
                    <h2 className="graph-block__title">Статистика для</h2>
                    <Select
                        className="select-block"
                        onChange={(e) => changeSelect(e)}
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
                    <span className="card-info__balance-value">{currentBalance} руб.</span>
                </div>
                <div className="card-info__income">
                    <span className="card-info__text">Доход</span>
                    <span className="card-info__income-value">{totalIncome} руб.</span>
                </div>
                <div className="card-info__expenses">
                    <span className="card-info__text">Затраты</span>
                    <span className="card-info__expenses-value">{totalExpenses} руб.</span>
                </div>
            </div>
            {operationData !== null ? <Graphyc getDataOper={operationData} /> : null}
        </div>
    )
}

export default Graph;