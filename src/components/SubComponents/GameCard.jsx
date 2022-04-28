import black from "../../assets/pictures/gameIlus/blackjack.png";
import bacarra from "../../assets/pictures/gameIlus/bacarra.png";
import roulette from "../../assets/pictures/gameIlus/roulette.png";
import fire from "../../assets/pictures/gameIlus/fire.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import TableBarIcon from '@mui/icons-material/TableBar';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OnHoverScrollContainer from "../../utils/CustomScrollBar";
import {helpFunc} from "../../utils/helpFunc";
import "../../styles/SubComponents/GameCard.css";
import {React, useEffect, useState} from "react";
import WebFont from 'webfontloader';
import Variations from "../UI/Variations";
import HeatIndicator from "../UI/HeatIndicator";
import Table from "../UI/Table";
import Scrollbars from "react-custom-scrollbars-2";
import { format } from "date-fns";
import Input from "../UI/Input";

export default function GameCard(props) {
    useEffect(()=> {
        WebFont.load({
            google: {
                families: ['Montserrat']
            }
        });
        loadGameData();
        startTimer();
    },[])
    const register = () => {

    }
    const help = helpFunc();
    let [timer, setTimer] = useState(0);
    const [timeState, setTime] = useState(0);
    const {gameId, action=register, popup=false, debug=false, selectedType="all", gameStatus="available", setPop}         = props;
    const defaultValues = {
        gameType: "bacarra",
        active: false,
        playerCount: "0",
        bankersList: [],
        betsList: [],
        password: '',
        minEntry: 0,
        maxEntry: 0,
        minTime: 0,
        nextGame: 0,
        timeLeft: 0,
        renew: false,
        currPnl: 0,
        lastHourPnl: 0,
        lastHalfPnl: 0,
        lastQuarterPnl: 0,
        heatIndex: 0,
    };
    const [values, setValues]               = useState(defaultValues);
    const [pnlOpen, setPnl] = useState(true);
    const [betSum, setSum] = useState(0);
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
            let bankersCount = help.randNumber(5, 30);
            let localBankerList = [];
            for(let i= 0; i < bankersCount; i++){
                let index = i + 1;
                localBankerList.push(index+". Banker"+help.randNumber(1000, 5000))
            }
            let betsCount = help.randNumber(10, 30);
            let localBetsList = [];
            let today = format(new Date(), "dd.MM")
            for(let i= 0; i < betsCount; i++){
                let index = i + 1;
                let betHour = help.randNumber(0, 24)+"H"+help.randNumber(0, 59);
                let newFakeBet = {date: today, heure: betHour, mise: help.randNumber(50, 350)+" €", pnl: <Variations value={help.randNumber(-100, 100)} symbol="€"/>, pourcent:<Variations value={help.randNumber(-10, 10, true)}/>}
                localBetsList.push(newFakeBet);
            }
            localValue.active = help.randNumber(0, 1);
            localValue.bankersList = localBankerList;
            localValue.betsList = localBetsList;
            localValue.minEntry = help.randNumber(50, 100);
            localValue.maxEntry = help.randNumber(101, 5000);
            localValue.minTime = help.randNumber(300, 3600);
            localValue.timeLeft = help.randNumber(300, 3600);
            setTime(localValue.timeLeft);
            localValue.nextGame = help.randNumber(300, 1000);
            localValue.renew = help.randNumber(-10, 10);
            localValue.currPnl = help.randNumber(-300,300);
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
        marginRight: "5px"
    }

    const statWrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "space-between",
        marginTop: "15px",
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

    const betsWrapper = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    }

    const alignElements = {
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        flexWrap: "column",
    }

    const bankerList = (list) => {
        return(
            <div className="banker-list-wrapper">
                <span style={{
                    fontWeight: "600",
                    position:"sticky"
                }}>Liste d'attente</span>
                <OnHoverScrollContainer>
                    <div className="banker-wrapper">
                        {
                            list.map(el => {
                                let banker = el.split(".")
                                return (
                                    <div className="banker-rows">
                                        <span>{banker[0]}.</span>
                                        <span style={{color: "#ffffff96"}}>{banker[1]}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </OnHoverScrollContainer>
            </div>
        )
    }

    const betList = (list) => {

    }

    const renderTrack = ({ style, ...props }) => {
        const enhancedStyle = {
            ...style,
            right: 6,
            bottom: 2,
            top: 2,
            borderRadius: 3,
            backgroundColor: "#ffffff59",
            width: "2px"
        };

        return <div style={enhancedStyle} {...props} />;
    };

    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            borderRadius: 6,
            backgroundColor: "rgb(255,255,255)",
            width: "10px",
            left: "-4px"
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };

    const startTimer = () => {
        timer = setInterval(() => {
            setTime((timeState) => timeState - 1)
        }, 1000)
    }
    const stopTimer = () => {
        clearInterval(timer);
        setTime(0);
    }


    String.prototype.toHMS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    if((selectedType !== undefined && selectedType === values.gameType)|| selectedType === "all") {
        return (
            <>
            {popup?
            <div style={betsWrapper}>
            <div className="game-tag mat-card table-card shadow" style={backImageStyle} onClick={gameStatus ==="live"? () => {
                action(gameId)
            }: () => {}}>

                <div className={pnlOpen?"table-header table-header-pnl":"table-header"} style={backGrad[values.gameType]}>
                    <span className="titleStyle">{help.capitalize(values.gameType)}{gameStatus ==="live" ? <><FiberManualRecordIcon style={{
                        fill: "green",
                        paddingLeft: "30px"}}/><span style={{fontSize: "0.7em", fontWeight: "700",}}>Actif</span></>:<></>}</span>
                    {values.heatIndex > 80 ? <img src={fire}/> : <></>}
                </div>
                <div className="flex-row-9">
                    <img
                        className="x24-29 zoomable"
                        src="https://anima-uploads.s3.amazonaws.com/projects/61828a5312c01fb2008ac24d/releases/61fa6fa7bc3ab285affda288/img/24@2x.svg"
                        onClick={()=>{setPop(undefined)}}
                    />
                </div>
                <div className={pnlOpen?"card-details card-details-pnl":"card-details"} style={gameStatus ==="live"? {justifyContent: "flex-start"}:{}}>
                    <div className={"reference"}>
                        <div className="highlight-cercle" style={titleStyle}>
                            <TableBarIcon style={{
                                minWidth: "auto",
                            }}/> Ref : #{gameId}
                        </div>
                        <div style={titleStyle}>
                            <div className="highlight-cercle"><GroupsIcon/> {values.playerCount} </div>
                            <div className="highlight-cercle"><PersonIcon/> {values.bankersList.length} </div>
                        </div>
                    </div>
                    <div className={"table-data"} style={popup? {marginTop: "10px"}:{}}>
                        <div className="data-row">
                            <div style={subDataStyle}>
                                <div><span style={titleStyle}>Ticket minimum: </span>{values.minEntry} €</div>
                                <div><span
                                    style={titleStyle}>Duree minimum participation: </span> {help.secToFormatted(values.minTime)}
                                </div>

                                {gameStatus !=="live"?
                                    <>
                                <div><span
                                    style={titleStyle}>Prochain roulement de Bankers: </span> {help.secToFormatted(values.nextGame)}
                                </div>
                                    <div className="bet-wrapper">
                                        <span>Ma mise</span>
                                        <Input defaultValue={betSum} type="number" name="bet" onChange={(event) => {setSum(event.target.value)}} symbol={"€"}/>
                                    </div>
                                <div style={{display: "flex"}}>
                                    <span style={titleStyle}>Mise min: </span>
                                    {values.minEntry} €
                                    <div style={{padding: "0px 10px"}}></div>
                                    <span style={titleStyle}>Mise max: </span>
                                    {values.maxEntry} €
                                </div>
                                    </>
                                    :<>
                                        <span style={titleStyle}>Temps restant de la participation: </span>
                                        <div style={alignElements}>
                                            <div>
                                                <span className="white-indicator">{help.secToFormatted(help.randNumber(300, 3600))}</span>
                                                <button className={"mat-button"} style={{
                                                    backgroundColor: "#ff0000cc",
                                                    fontWeight: "900",
                                                    fontSize: "1.1em",
                                                    borderColor: "transparent",
                                                }} onClick={() => {}}>
                                                    Renouveler
                                                </button>
                                            </div>
                                        </div>
                                        <div role="separator" id="mat-divider"
                                             className="mat-divider mat-divider-horizontal" aria-orientation="horizontal" style={{width: "-webkit-fill-available"}}></div>
                                        <div style={alignElements}>
                                            <span className="shadow" style={{
                                                marginRight: "20px", backgroundColor:"#373758", padding:"1px 10px", borderRadius:"10px",
                                                display: "flex"}}><span style={{marginRight: "10px"}}>PNL</span> <Variations value={values.currPnl} showArrow={true} symbol={"€"}/></span>
                                            <button className={"mat-button shadow"} style={{display: "flex",fontSize: "1.1em",fontWeight: "900",alignItems: "center",
                                                justifyContent: "space-between", backgroundColor: "#373758",
                                                borderColor: "transparent"}} onClick={() => {
                                                    setPnl(!pnlOpen)}}>
                                                <span>Voir les mises</span> <ArrowRightAltIcon style={pnlOpen?{transform: "rotate(180deg)",
                                                transition: "all 0.5s ease"}:{transform: "rotate(360deg)", transition: "all 0.5s ease"}}/>
                                            </button>
                                        </div>
                                    </>}
                            </div>
                            {popup? bankerList(values.bankersList):<></>}
                            <HeatIndicator value={values.heatIndex}/>
                        </div>
                        {gameStatus !=="live"?
                            <div style={statWrapper}>
                                <div style={statStyle}>
                                    <span style={{color: "rgb(153, 153, 153)"}}>Last 1h</span>
                                    <Variations value={values.lastHourPnl}/>
                                </div>
                                <div style={statStyle}>
                                    <span style={{color: "rgb(153, 153, 153)"}}>Last 1/2h</span>
                                    <Variations value={values.lastHalfPnl}/>
                                </div>
                                <div style={statStyle}>
                                    <span style={{color: "rgb(153, 153, 153)"}}>Last 1/4h</span>
                                    <Variations value={values.lastQuarterPnl}/>
                                </div>
                            </div>:<></>}
                    </div>
                    {gameStatus !=="live"?
                        <div>
                            <button className={"mat-button"} style={{
                                backgroundColor: "#ff0000a8"}} onClick={() => {
                                action(gameId)
                            }}>
                                {gameStatus !=="live"? "S'inscrire": "Entrer"}
                            </button>
                        </div>:<></>
                    }
                </div>
            </div>
                {popup && values.betsList.length > 0 && gameStatus === "live" ?

                    <div className={pnlOpen ? "pnl-wrapper" : "pnl-wrapper closed"}>
                        <OnHoverScrollContainer topOverlap={122}>
                        <Table bets={values.betsList}/>
                        </OnHoverScrollContainer>
                    </div>
                    : <></>
                }
            </div>:
                    <>
                        <div className="game-tag mat-card table-card shadow" style={backImageStyle} onClick={gameStatus ==="live"? () => {
                            action(gameId)
                        }: () => {}}>
                            <div className="table-header" style={backGrad[values.gameType]}>
                                <span className="titleStyle">{help.capitalize(values.gameType)}</span>
                                {values.heatIndex > 80 ? <img src={fire}/> : <></>}
                            </div>
                            <div className="card-details" style={gameStatus ==="live"? {justifyContent: "flex-start"}:{}}>
                                <div className={"reference"}>
                                    <div className="highlight-cercle" style={titleStyle}>
                                        <TableBarIcon style={{
                                            minWidth: "auto",
                                        }}/> Ref : #{gameId}
                                    </div>
                                    <div style={titleStyle}>
                                        <div className="highlight-cercle"><GroupsIcon/> {values.playerCount} </div>
                                        <div className="highlight-cercle"><PersonIcon/> {values.bankersList.length} </div>
                                    </div>
                                </div>
                                <div className={"table-data"} style={popup? {marginTop: "10px"}:{}}>
                                    <div className="data-row">
                                        <div style={subDataStyle}>
                                            <div><span style={titleStyle}>Ticket minimum: </span>{values.minEntry} €</div>
                                            <div><span
                                                style={titleStyle}>Duree minimum participation: </span> {help.secToFormatted(values.minTime)}
                                            </div>
                                            {gameStatus !=="live"?
                                                <>
                                                    <div><span
                                                        style={titleStyle}>Prochain roulement de Bankers: </span> {help.secToFormatted(values.nextGame)}
                                                    </div>
                                                    <div style={{display: "flex"}}>
                                                        <span style={titleStyle}>Mise min: </span>
                                                        {values.minEntry} €
                                                        <div style={{padding: "0px 10px"}}></div>
                                                        <span style={titleStyle}>Mise max: </span>
                                                        {values.maxEntry} €
                                                    </div>
                                                </>
                                                :<>
                                                    <div><span
                                                        style={titleStyle}>Temps restant de la participation: </span> {timeState.toString().toHMS()}
                                                    </div>
                                                    <span className="shadow" style={{
                                                        marginRight: "20px", backgroundColor:"#373758", padding:"1px 10px", borderRadius:"10px",
                                                        display: "flex"}}><span style={{marginRight: "10px"}}>PNL</span> <Variations value={values.currPnl} symbol={"€"}/></span>
                                                </>}
                                        </div>
                                        {popup? bankerList(values.bankersList):<></>}
                                        <HeatIndicator value={values.heatIndex}/>
                                    </div>
                                    <div style={statWrapper}>
                                        <div style={statStyle}>
                                            <span style={{color: "rgb(153, 153, 153)"}}>Last 1h</span>
                                            <Variations value={values.lastHourPnl}/>
                                        </div>
                                        <div style={statStyle}>
                                            <span style={{color: "rgb(153, 153, 153)"}}>Last 1/2h</span>
                                            <Variations value={values.lastHalfPnl}/>
                                        </div>
                                        <div style={statStyle}>
                                            <span style={{color: "rgb(153, 153, 153)"}}>Last 1/4h</span>
                                            <Variations value={values.lastQuarterPnl}/>
                                        </div>
                                    </div>
                                </div>
                                {gameStatus !=="live"?
                                    <div>
                                        <button className={"mat-button"} style={{fontSize: "15px"}} onClick={() => {
                                            action(gameId)
                                        }}>
                                            {gameStatus !=="live"? "S'inscrire": "Entrer"}
                                        </button>
                                    </div>:<></>
                                }
                            </div>
                        </div>
                        <div>
                            {popup && values.betsList.length > 0?
                                <Table bets={values.betsList}/>:<></>
                            }
                        </div>
                    </>}
            </>
        )
    }
}