import black from "../../assets/pictures/gameIlus/blackjack.png";
import bacarra from "../../assets/pictures/gameIlus/bacarra.png";
import roulette from "../../assets/pictures/gameIlus/roulette.png";
import fire from "../../assets/pictures/gameIlus/fire.png";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import TableBarIcon from '@mui/icons-material/TableBar';
import {helpFunc} from "../../utils/helpFunc";
import "../../styles/GameCard.css";
import {useEffect, useState} from "react";
import WebFont from 'webfontloader';
import PercentVariations from "../UI/PercentVariations";
import HeatIndicator from "../UI/HeatIndicator";

export default function GameCard(props) {
    useEffect(()=> {
        WebFont.load({
            google: {
                families: ['Montserrat']
            }
        });
        loadGameData();
    },[])
    const register = () => {

    }
    const help = helpFunc();
    const {gameId, action=register, debug=false, selectedType="all"}         = props;
    const defaultValues = {
        gameType                        : "bacarra",
        active                   : false,
        playerCount                   : "0",
        password                    : '',
        minEntry   : 0,
        maxEntry                 : 0,
        minTime          : 0,
        nextGame              : 0,
        renew           : false,
        lastHourPnl           : 0,
        lastHalfPnl           : 0,
        lastQuarterPnl           : 0,
        heatIndex : 0,
    };
    const [values, setValues]               = useState(defaultValues);
    const gameIllus = {bacarra:bacarra, blackjack:black , roulette:roulette};
    const backGrad = {  bacarra: {
                            background: "linear-gradient(90deg,rgba(169 0 255 / 0.1) 0%, rgba(169 0 255 / 0.4) 44%, rgb(169 0 255 / 60%) 100%)",
                        },
                        blackjack: {
                            background: "linear-gradient(90deg, rgba(14,255,0,0.1) 0%, rgba(14,255,0,0.4) 44%, rgba(14,255,0,0.5998774509803921) 100%)",
                        },
                        roulette: {
                            background: "linear-gradient(90deg, rgba(255,0,0,0.1) 0%, rgba(255,0,0,0.4009978991596639) 44%, rgba(255,0,0,0.5998774509803921) 100%)",
                        }
                    };

    const loadGameData = () => {
        let localValue = {}
        if(debug){
            let games = Object.keys(gameIllus);
            localValue.gameType = games[help.randNumber(0,games.length-1)]
            localValue.active = false;
            localValue.playerCount = help.randNumber(50, 100);
            localValue.minEntry = help.randNumber(50, 100);
            localValue.maxEntry = help.randNumber(101, 5000);
            localValue.minTime = help.randNumber(300, 3600);
            localValue.nextGame = help.randNumber(300, 1000);
            localValue.renew = help.randNumber(-10, 10);
            localValue.lastHourPnl = help.randNumber(-10, 10, true);
            localValue.lastHalfPnl = help.randNumber(-10, 10, true);
            localValue.lastQuarterPnl = help.randNumber(-10, 10, true);
            localValue.renew = false;
            localValue.heatIndex = help.randNumber(1, 100);
            setValues(localValue);
        }
    }

    const titleStyle = {
        color:"#999999",
        fontSize: "0.9rem",
    }

    const statWrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "space-between",
        marginTop: "20px",
    }
    const backImageStyle = {
        backgroundImage: "url(" + gameIllus[values.gameType] + ")",
        backgroundRepeat: "no-repeat",
        justifySelf: "flex-start",
        backgroundPositionY: "-30px",
        backgroundSize: "104%",
    }

    const statStyle = {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        lineHeight: "20px",
    }

    const subDataStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    }

    if((selectedType !== undefined && selectedType === values.gameType)|| selectedType === "all") {
        return (
            <div className="game-tag mat-card table-card shadow" style={backImageStyle}>
                <div className="table-header" style={backGrad[values.gameType]}>
                    {help.capitalize(values.gameType)}
                    {values.heatIndex > 80 ? <img src={fire}/> : <></>}
                </div>
                <div className="card-details">
                    <div className={"reference"}>
                        <div className="highlight-cercle" style={titleStyle}>
                            <TableBarIcon style={{
                                minWidth: "auto",
                            }}/> Ref : #{gameId}
                        </div>
                        <div style={titleStyle}>
                            <div className="highlight-cercle"><GroupsIcon/> {values.playerCount} </div>
                            <div className="highlight-cercle"><PersonIcon/> {help.randNumber(5, 15)} </div>
                        </div>
                    </div>
                    <div className={"table-data"}>
                        <div>
                            <div style={subDataStyle}>
                                <div><span style={titleStyle}>Ticket minimum: </span>{values.minEntry} $</div>
                                <div><span
                                    style={titleStyle}>Duree minimum participation: </span> {help.secToFormatted(values.minTime)}
                                </div>
                                <div><span
                                    style={titleStyle}>Prochain roulement de Bankers: </span> {help.secToFormatted(values.nextGame)}
                                </div>
                                <div style={{display: "flex"}}><span
                                    style={titleStyle}>Mise min: </span> {values.minEntry} $ <div
                                    style={{padding: "0px 10px"}}></div><span
                                    style={titleStyle}>Mise max: </span> {values.maxEntry} $
                                </div>
                            </div>
                            <HeatIndicator value={values.heatIndex}/>
                        </div>
                        <div style={statWrapper}>
                            <div style={statStyle}>
                                <span style={{color: "rgb(153, 153, 153)"}}>Last 1h</span>
                                <PercentVariations value={values.lastHourPnl}/>
                            </div>
                            <div style={statStyle}>
                                <span style={{color: "rgb(153, 153, 153)"}}>Last 1/2h</span>
                                <PercentVariations value={values.lastHalfPnl}/>
                            </div>
                            <div style={statStyle}>
                                <span style={{color: "rgb(153, 153, 153)"}}>Last 1/4h</span>
                                <PercentVariations value={values.lastQuarterPnl}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className={"mat-button"} onClick={() => {
                            action(gameId)
                        }}>
                            S'inscrire
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}