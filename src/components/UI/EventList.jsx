import {React, useEffect, useState} from "react";
import { format } from "date-fns";
import {helpFunc} from "../../utils/helpFunc";

export default function EventList(props){
    const {debug=false} = props;
    const [eventList, getEvents] = useState([])
    const help = helpFunc();
    const fakeHistoric = ["Table BlackJack ferme", "Gain de 569€", "Inscription Table Bacarra"];
    useEffect(() => {
        loadEventList();
    },[])

    const commLineStyle = {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
        alignItems: "center",
        lineHeight: "2.5em"
    }

    const titleStyle = {
        color: "white",
        fontWeight: "600",
    }

    const eventWrapper = {
        backgroundColor: "#2A2A47",
        borderRadius: "5px",
        padding: "40px 20px",
        width: "30%",
        height: "80%",
    }
    const loadEventList = () => {
        if(debug){
            const tempHistoric = [];
            const gameNumbers = help.randNumber(5,9);
            let yesterday = help.getSpecDate(new Date(), - 1);
            for(let i=0; i < gameNumbers; i++){
                let hourJump = help.randNumber(1,3);
                let fakeDate = format(help.getSpecDate(yesterday,hourJump,"hour"), "dd.MM à HH:mm");
                let fakeComm = fakeHistoric[help.randNumber(0,2)]
                tempHistoric.push({date:fakeDate, comm:fakeComm});
            }
            getEvents(tempHistoric)
        }

    }
    return(
        <div style={eventWrapper}>
            <span style={titleStyle}>Liste Évènements</span>
            <div className="comm-wrapper">
            {eventList.map(el => {
                return (
                    <>
                        <div style={commLineStyle}>
                            <span style={{paddingRight: "1em", color: "#ffffff2e"}}>{el.date}</span>
                            <span style={{paddingRight: "1em", color: "#ffffffbf"}}>{el.comm}</span>
                        </div>
                        <div role="separator" id="mat-divider"
                             className="mat-divider mat-divider-horizontal" aria-orientation="horizontal" style={{width: "-webkit-fill-available"}}></div>
                    </>
                )
            })}
            </div>
        </div>
    )
}