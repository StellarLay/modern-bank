import React, { useState, useEffect, Component } from 'react';
import '../css/graph.css';
import { Line } from 'react-chartjs-2';
import { AxisOptions, Chart } from "react-charts";

const Graphyc = () => {
    const data = {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        datasets: [{
            label: 'Доход',
            data: [1120, 3400, 1500, 4500, 8000, 5000, 15000],
            borderWidth: 1,
            backgroundColor: '#acecde',
            fill: true,
            borderColor: "#acecde",
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
            data: [15000, 4000, 7000, 14500, 8500, 9400, 1080],
            borderWidth: 1,
            backgroundColor: 'rgba(252, 109, 144, 0.5)',
            fill: true,
            borderColor: "#ffdae3",
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