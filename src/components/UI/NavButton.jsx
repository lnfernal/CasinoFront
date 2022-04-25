import "../../styles/NavButton.css"
export default function NavButton (props) {
    const {text, style="nav_buttons mat-stroked-button", action=undefined} = props;
    return(
        <button className={style} onClick={action}>
            {text}
        </button>
    )
}