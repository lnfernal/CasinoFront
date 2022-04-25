import "../styles/InfoCard.css"
export default function InfoCard(props){
    const {cardId=undefined, icon, infoName, data, symbol=undefined} = props;
    let localIcon = icon;
    let localName = infoName;
    let localData = data;
    let localSymbol = symbol;

    const titleStyle = {
        opacity: "0.3",
        fontSize: "0.9rem",
    }
    const dataStyle = {
        color: "white",
        fontSize: "1rem"
    }

    return (
        <div className="info_card shadow mat-card">
            <div className="mat-icon">
                {localIcon}
            </div>
            <span style={titleStyle}>
                {localName}
            </span>
            <span style={dataStyle}>
                    {localData+" "}
                <span style={titleStyle}>
                    {localSymbol}
                </span>
            </span>

        </div>
    )

}