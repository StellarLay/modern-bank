import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/cards.css';
import visa from '../img/visa.svg';
import mastercard from '../img/mastercard.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faWifi } from '@fortawesome/free-solid-svg-icons';
import AddCard from './addCard';

var Cards = (props) => {
    const cards = [
        { id: 1, balance: 250000, number: "4255 0102 0074 4345", validThru: "04/22", logo: visa, zIndex: 20 },
        { id: 2, balance: 35000, number: "4255 0102 0074 2376", validThru: "02/24", logo: mastercard, zIndex: 19 },
        { id: 3, balance: 650000, number: "4255 0102 0074 9867", validThru: "02/24", logo: mastercard, zIndex: 18 }
    ];

    const sort = [
        { arrow: faChevronDown, sort: true },
        { arrow: faChevronUp, sort: false }
    ];

    const [isSort, setIsSort] = useState(true);
    const [id, setId] = useState(1);
    const [list, setList] = useState(cards);
    const [isAdd, setIsAdd] = useState(false);

    const listItem = list.find(i => i.id === id);
    const listFiltered = list.filter(i => i.id !== id);

    var totalBalance = list.reduce(function (prev, cur) { return prev + cur.balance; }, 0);

    // Подгрузим баланс
    useEffect(() => { props.totalSum(totalBalance); });

    // Отправим карты по иерархии выше
    useEffect(() => { props.getCards(list) })

    var closeAddCard = () => { setIsAdd(false) }
    var focusedCard = (e, i) => { setId(i) }
    var clickSort = () => { isSort ? setIsSort(false) : setIsSort(true); }
    var getCardData = (value) => { setList([...list, value]); };

    // Как задать стиль атрибут: style={{ zIndex: listItem.zIndex }}

    return (
        <div className="cards-block">
            <div className="cards-block__options">
                <div className="cards-block__main" onClick={() => clickSort()}>
                    <span className="cards-block__title">Карты</span>
                    {sort.filter(i => i.sort === isSort).map((sortIcon, i) => (
                        <FontAwesomeIcon key={i} className="icons-card__arrow" icon={sortIcon.arrow} />
                    ))}
                </div>
                <span className="cards-block__add-text" onClick={() => setIsAdd(true)}>Добавить новую</span>
            </div>
            <div className="cards-block__list">
                <div className="cards-block__card" style={{ zIndex: 200 }}>
                    <div className="cards-block__header">
                        <span className="cards-block__name">Баланс</span>
                        <FontAwesomeIcon className="icons-card__wifi" icon={faWifi} />
                    </div>
                    <span className="cardBalance-value">{listItem.balance} руб.</span>
                    <span className="number-card">{listItem.number}</span>
                    <div className="ValidAndLogo-block">
                        <div>
                            <span className="valid-title">Годен до</span>
                            <span className="valid-text">{listItem.validThru}</span>
                        </div>
                        <img src={listItem.logo} width="60" />
                    </div>
                </div>
                <CSSTransition
                    in={isSort}
                    timeout={300}
                    unmountOnExit
                    classNames="cardSort"
                >
                    <TransitionGroup className={null}>
                        {listFiltered.map((card, i) => (
                            <CSSTransition
                                key={card.id}
                                timeout={300}
                                classNames="item"
                            >
                                <div key={card.id} className="cards-block__card second-card" style={{ zIndex: card.zIndex }} onClick={(e) => focusedCard(e, card.id)}>
                                    <span className="cardBalance-value">{card.balance} руб.</span>
                                    <div className="ValidAndLogo-block">
                                        <img src={card.logo} width="40" />
                                        <span className="number-card">··{card.number.substr(card.number.length - 4)}</span>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))
                        }
                    </TransitionGroup>
                </CSSTransition>
            </div>
            <CSSTransition
                in={isAdd}
                timeout={300}
                unmountOnExit
                classNames="cardSort"
            >
                <AddCard formdata={getCardData} countCards={list.length} countZindex={list[list.length - 1].zIndex} checkClose={closeAddCard} />
            </CSSTransition>
        </div>
    )
}

export default Cards;