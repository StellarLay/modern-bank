import React, { useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/statistics.css';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';

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

    const options = [
        { value: '••••4345', label: '••••4345' },
        { value: '••••4345', label: '••••5275' },
        { value: '••••4345', label: '••••7843' }
    ]

    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <div className="graph-block">
            <div className="graph-block__header">
                <div className="graph-block__header-left">
                    <h2 className="graph-block__title">Статистика для</h2>
                    <Select
                        className="select-block"
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        styles={customStyles}
                        options={options}
                    />
                </div>
                <div className="graph-block__header-right">
                    <span className="graph-block__filter">День</span>
                    <span className="graph-block__filter">Неделя</span>
                    <span className="graph-block__filter">Месяц</span>
                    <span className="graph-block__filter">Год</span>
                </div>
            </div>
        </div>
    )
}

export default Graph;