import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../css/addCard.css';
import visa from '../img/visa.svg';
import mastercard from '../img/mastercard.svg';
import mir from '../img/mir.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InputMask from "react-input-mask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

var AddCard = (props) => {
    const paysystem = [
        { id: 1, logo: visa, class: "pay-img active-card" },
        { id: 2, logo: mastercard, class: "pay-img" },
        { id: 3, logo: mir, class: "pay-img" }
    ];

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [numberCard, setNumberCard] = useState("");
    const [validThru, setValidThru] = useState("");
    const [isDisabledBtn, setIsDesabledBtn] = useState(true);
    const [logo, setLogo] = useState(visa);

    var cardClick = (e, i) => {
        document.querySelector('.active-card') && document.querySelector('.active-card').classList.remove('active-card');
        e.currentTarget.classList.add("active-card");
        if (i === 1) { setLogo(visa); }
        else if (i === 2) { setLogo(mastercard); }
        else { setLogo(mir) }
    };

    // get current date
    useEffect(() => {
        const date = new Date();
        const map = {
            mm: date.getMonth() + 1,
            dd: date.getDate(),
            yy: date.getFullYear().toString().slice(-2)
        }

        let endData = parseInt(map.yy) + 4;
        setValidThru(map.mm + "/" + endData);
    }, []);

    // check valid input values
    useEffect(() => {
        firstname === "" ||
            lastname === "" ||
            middlename === "" ||
            numberCard.length !== 19
            ? setIsDesabledBtn(true) : setIsDesabledBtn(false);
    });

    var clickAddBtn = () => {
        let formData = {
            "id": props.countCards + 1,
            "balance": 100,
            "number": numberCard,
            "validThru": validThru,
            "logo": logo,
            "zIndex": props.countZindex - 1
        }
        props.formdata(formData);
        props.checkClose();
    };

    return (
        <div className="addCard-block">
            <h1 className="addCard-title">Оформление новой карты</h1>
            <div className="addCard-paysystem">
                <span className="paysystem-text">Платежная система</span>
                {paysystem.map((logos) => (
                    <div key={logos.id} className={logos.class} onClick={(e) => cardClick(e, logos.id)}>
                        <img src={logos.logo} width="60" alt="visa" />
                    </div>
                ))}
            </div>
            <div className="addCard-personal">
                <span className="personal-title">Личные данные</span>
                <div className="personal-block">
                    <div className="personal-fInputs">
                        <label>Фамилия*</label>
                        <input type="text" placeholder="Иванов" value={lastname} onChange={(e) => setLastname(e.target.value)} className={lastname === "" ? "error-input" : ""} />
                    </div>
                    <div className="personal-nInputs">
                        <label>Имя*</label>
                        <input type="text" placeholder="Иван" value={firstname} onChange={(e) => setFirstname(e.target.value)} className={firstname === "" ? "error-input" : ""} />
                    </div>
                    <div className="personal-mInputs">
                        <label>Отчество*</label>
                        <input type="text" placeholder="Иванович" value={middlename} onChange={(e) => setMiddlename(e.target.value)} className={middlename === "" ? "error-input" : ""} />
                    </div>
                </div>
            </div>
            <div className="addCard__card-data">
                <span className="card-data__title">Данные карты</span>
                <div className="card-data__number">
                    <label>Номер карты*</label>
                    <InputMask mask="9999 9999 9999 9999" maskPlaceholder="" placeholder="4255 0102 0074 4345" value={numberCard} onChange={(e) => setNumberCard(e.target.value)} />
                </div>
                <div className="card-data__valid-thru">
                    <div className="card-data__input">
                        <label>Годен до*</label>
                        <input type="text" placeholder={validThru} disabled />
                    </div>
                    <button className="addCard-btn" onClick={() => clickAddBtn()} disabled={isDisabledBtn ? "disabled" : ""}>Добавить</button>
                </div>
            </div>
            <FontAwesomeIcon className="icons-card__close" icon={faTimes} onClick={() => props.checkClose()} />
        </div>
    )
}

export default AddCard;