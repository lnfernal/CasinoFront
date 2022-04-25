import {useEffect, useState} from "react";
import {helpFunc} from "../../utils/helpFunc";
import GameCard from "../SubComponents/GameCard";

export default function AvailableGames (props) {
    const {setPop, debug = false} = props;
    const [gameIdsList, setIdList] = useState([])
    const [selectedGameType, setSelected] = useState("roulette");
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

    return(
        <div className="game_tab_wrapper">
            <div className="game_grid">
                {gameIdsList.length > 0 ? gameIdsList.map(
                    el => {
                        return(
                            <GameCard gameId={el} action={generatePopup} debug={debug}/>
                        )
                    }
                ): <></>}
            </div>
        </div>
    )
}