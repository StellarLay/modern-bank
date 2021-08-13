import React, { useState, useEffect, Component } from 'react';
import '../css/graph.css';
import { Line } from 'react-chartjs-2';

const Graphyc = (props) => {
    const getIncomeData = props.getDataOper.income;
    const getExpensesData = props.getDataOper.expenses;

    const data = {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [{
            label: 'Доход',
            data: getIncomeData,
            borderWidth: 1,
            backgroundColor: 'rgba(84, 230, 198, 0.8)',
            fill: true,
            borderColor: "rgba(84, 230, 198, 0.8)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#acecde",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
        },
        {
            label: 'Затраты',
            data: getExpensesData,
            borderWidth: 1,
            backgroundColor: 'rgba(252, 109, 144, 0.8)',
            fill: true,
            borderColor: "rgba(252, 109, 144, 0.8)",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#ffdae3",
            pointBorderWidth: 3,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
        }
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            }
        },
        elements: {
            line: {
                tension: 0.3
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
        }
    };

    return (
        <div className="graphStats-view" >
            <Line data={data} options={options} className="graphstyle" height={120} />
        </div>
    )
}

export default Graphyc;