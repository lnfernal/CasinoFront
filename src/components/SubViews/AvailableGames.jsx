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

    const filterWrapperStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
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
            <div style={filterWrapperStyle}>
                <span style={{color: "white", fontSize: "20px", marginRight: "30px"}}>Filtre</span>
                <Dropdown
                    name="filter"
                    title="All"
                    list={gameList}
                    onChange={(item, name) => {
                    setSelected(item.value);
                    }}
                    styles={{
                        headerTitle: {
                            fontSize: "20px",
                            background: "rgb(44 45 72)",
                            color: "white",
                        },
                        header: {
                            backgroundColor: "rgb(44 45 72)",
                            borderRadius: "25px",
                            border: "transparent"
                        },
                        scrollList: {
                            background: "#23243a",
                            color: "white",
                            fontFamily: "Montserrat",
                        fontWeight: "100",
                            borderRadius: "0px 0px 15px 15px"
                        },
                        listItem: {
                            fontSize: "20px"
                        },
                        list: {
                            border: "none",
                            boxShadow: "none",
                        },
                        wrapper: {
                            borderRadius: "0px 0px 20px 20px",
                        }
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