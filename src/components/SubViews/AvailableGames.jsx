import {useEffect, useState} from "react";
import {helpFunc} from "../../utils/helpFunc";
import { Dropdown } from 'reactjs-dropdown-component';

import GameCard from "../SubComponents/GameCard";

export default function AvailableGames (props) {
    const {setPop, debug = false} = props;
    const [gameIdsList, setIdList] = useState([])
    const [selectedGameType, setSelected] = useState("all");
    const help = helpFunc();

    useEffect(() => {
        loadAvailGameList();
    },[])

    const generatePopup = (id) => {
        setPop(<GameCard gameId={id}/>)
    }

    const loadAvailGameList = () => {
        let tempGameIdList = [];
        if(debug){
            const gameNumbers = help.randNumber(1,9);
            for(let i=0; i < gameNumbers; i++){
                const fakeGameId = help.randNumber(300, 500);
                tempGameIdList.push(fakeGameId);
            }
            setIdList(tempGameIdList)
        }
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
        <div className="game_tab_wrapper">
            <div>
                <Dropdown
                    name="filter"
                    title="Filtre"
                    list={gameList}
                    onChange={(item, name) => {
                    setSelected(item.value);
                    }}
                />
            </div>
            <div className="game_grid">
                {gameIdsList.length > 0 ? gameIdsList.map(
                    el => {
                        return(
                            <GameCard gameId={el} action={generatePopup} debug={debug} selectedType={selectedGameType}/>
                        )
                    }
                ): <></>}
            </div>
        </div>
    )
}