import {helpFunc} from "../../utils/helpFunc";
import { Line }            from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import {useEffect, useState} from "react";

export default function Graphics(props){
    const {debug=false} = props;
    const [days, getDays] = useState([]);
    const [historic, getHistoric] = useState({});
    const help = helpFunc();
    useEffect(()=>{
        loadUserHistorical();
    },[]);

    const optionsGains = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    font: {
                        family: "Montserrat",
                        weight: "900"
                    }
                }
            },
            title: {
                display: true,
                text: 'Gains de la semaine',
                align: 'start',
                font: {size:20,
                    family:'Poppins'},
                color:'#6a6b72',
            },
            tooltip: {
                bodyFont: {
                    family: "Montserrat",
                    weight: "900"
                },
                titleFont: {
                    family: "Montserrat",
                    weight: "900"
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "Montserrat",
                        weight: "900"
                    }
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12,
                        family: "Montserrat",
                        weight: "900"
                    }
                }
            }
        }

    };
    const data = (days, historic) => {
        return {
            labels: days,
            datasets: [
                {
                    label: 'Gains',
                    data: historic,
                    fill: true,
                    backgroundColor: 'rgba(45,255,0,0.44)',
                    borderColor: "rgb(45,255,0)",
                    borderWidth: 3,
                    lineTension: 0.3,
                    radius: 4
                }
            ],
        }
    };
    const loadUserHistorical = () =>{
        if(debug){
            let lastWeek = help.getSpecDate(new Date(), -7);
            getDays(help.getDaysList(lastWeek, new Date()));
            let localData = [];
            for(let i=0; i < 8; i++){
                localData.push(help.randNumber(-300, 300))
            }
            getHistoric(localData);
        }
    }
    return(
        <div style={{ position: "relative", width: "60%", height:"-webkit-fill-available"}}>
            <Line options={optionsGains} data={data(days,historic)} width={10} height={5}/>
        </div>
    )
}