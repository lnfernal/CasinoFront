import {useEffect, useState} from "react";
import {helpFunc} from "../../utils/helpFunc";
import "../../styles/HistoricView.css";
import GameCard from "../SubComponents/GameCard";
import EventList from "../UI/EventList";
import Graphics from "../UI/Graphics";

export default function HistoricView (props) {
    const {setPop, debug = false} = props;
    const [gameIdsList, setIdList] = useState([])
    const [selectedGameType, setSelected] = useState("all");
    const help = helpFunc();

    useEffect(() => {
        loadHotGameList();
    },[])

    const generatePopup = (id) => {
        setPop(<GameCard gameId={id} debug={debug} popup={true} setPop={setPop}/>)
    }

    const loadHotGameList = () => {
        let tempGameIdList = [];
        if(debug){
            for(let i=0; i < 3; i++){
                const fakeGameId = help.randNumber(300, 500);
                tempGameIdList.push(fakeGameId);
            }
            setIdList(tempGameIdList)
        }
    }

    const statWrapperStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }

    const gameList = [
        {
            label: 'Bacarra',
            value: 'bacarra',
        },
        {
            label: 'Blackjack',
            value: 'blackjack',
        },
        {
            label: 'Roulette',
            value: 'roulette',
        },
        {
            label: 'All',
            value: 'all',
        }
    ];

    return(
        <div className="game_tab_wrapper historic">
            <div className="game_grid"  style={gameIdsList.length < 4? {overflow: "hidden"}:{} }>
                {gameIdsList.length > 0 ? gameIdsList.map(
                    el => {
                        return(
                            <GameCard gameId={el} action={generatePopup} debug={debug} selectedType={selectedGameType}/>
                        )
                    }
                ): <></>}
            </div>
            <div style={statWrapperStyle}>
                <Graphics debug={debug}/>
                <EventList debug={debug}/>
            </div>
        </div>
    )
}