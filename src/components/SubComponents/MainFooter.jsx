import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import {useEffect, useState} from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import Variations from "../UI/Variations";
import {helpFunc} from "../../utils/helpFunc";
export default function MainFooter (props){
    useEffect(()=> {
        loadGameData();
    },[])
    const {debug, symbol = "%"} = props;
    const help = helpFunc();
    const defaultValues = {
        bacarra: 0,
        blackjack: 0,
        roulette: 0,
        poker: 0,
    };
    const [pnlList, setList]               = useState(defaultValues);
    const loadGameData = () => {
        let localValue = {}
        if(debug){
            localValue.bacarra = help.randNumber(-10, 10, true);
            localValue.blackjack = help.randNumber(-10, 10, true);
            localValue.roulette = help.randNumber(-10, 10, true);
            localValue.poker = help.randNumber(-10, 10, true);
            setList(localValue);
        }
    }

    const styleStatWrapper = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }

    const nameStyle = {
        color: "white",
        fontSize: "1rem",
        marginRight: "5px",
    }

    const responsive = {
        0: {
            items: 6
        },
    };
    return (
        <div className={"footer"}>
            <AliceCarousel
                animationDuration={5000}
                autoPlay={true}
                startIndex = {1}
                fadeOutAnimation={true}
                mouseDragEnabled={true}
                playButtonEnabled={true}
                responsive={responsive}
                autoPlayInterval={0}
                autoPlayDirection="rtl"
                autoPlayActionDisabled={true}
                infinite={true}
                disableDotsControls
                disableButtonsControls
            >
                <div style={styleStatWrapper}>
                    <p style={nameStyle}>Bacarra: </p>
                    <Variations value={pnlList.bacarra} showArrow={true}/>
                </div>
                <div style={styleStatWrapper}>
                    <p style={nameStyle}>Blackjack: </p>
                    <Variations value={pnlList.blackjack} showArrow={true}/>
                </div>
                <div style={styleStatWrapper}>
                    <p style={nameStyle}>Roulette: </p>
                    <Variations value={pnlList.roulette} showArrow={true}/>
                </div>
            </AliceCarousel>
        </div>
    )
}