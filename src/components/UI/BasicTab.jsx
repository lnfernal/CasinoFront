import "../../styles/UI/BasicTab.css";
export default function BasicTab(props){
    const {children, style="", extraClass=""} = props;

    return (
        <div className={extraClass === ""? "basic-tab shadow":"basic-tab shadow "+extraClass}  style={style}>
            {children}
        </div>
    )

}