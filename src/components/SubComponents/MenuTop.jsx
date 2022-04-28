import logo from "../../assets/pictures/cazzLogo.png";
import defAvatar from "../../assets/pictures/no-pic.png";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { grey } from '@mui/material/colors';
import "../../styles/SubComponents/MenuTop.css";

export default function MenuTop() {
    const user_menu_wrapper = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "-webkit-fill-available",
        flexDirection: "row",
    }
    const balanceStyle = {
        width: "max-content",
        height: "50%",
        backgroundColor: "white",
        borderRadius: "5px",
        borderWidth: "0px",
        textAlign: "right",
        padding: "2px 7px",
        margin: "0% 1%",
    }
    let balance = 1500;
    let currency = "€";
    let userName = "Julien";
    let avatar = defAvatar;
    return (
        <div className="top-header header-layout">
            <img src={logo} style={{width: "14%"}}/>
            <div style={user_menu_wrapper}>
                <p style={balanceStyle}>
                    {balance} {currency}
                </p>
                <img src={avatar} className={"mat-icon"} style={{margin: "0 5px"}}/>
                <p style={{color: "white"}}>
                    {userName}
                </p>
                <KeyboardArrowDownIcon sx={{color: grey[50]}}/>
            </div>
        </div>

    )
}