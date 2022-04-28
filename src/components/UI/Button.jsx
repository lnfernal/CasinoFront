import {React} from "react";

export default function Button(props){
    const {children, extraClass="", style, type="", action=()=>{}} = props;
    return(
        <button className={extraClass!==""? "mat-button "+extraClass:"mat-button"} style={style} type={type} onClick={action}>
            {children}
        </button>
    )
}