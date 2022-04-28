import "../../styles/UI/NavButton.css"
import {useState} from "react";
export default function NavButton (props) {
    const {text, style="nav_buttons mat-stroked-button", action=undefined, clicked} = props;
    const clickStyle = {
        backgroundColor: "#db0000",
        borderColor: "transparent",
    }
    return(
        <button className={style} style={clicked?clickStyle:{}} onClick={action}>
            {text}
        </button>
    )
}