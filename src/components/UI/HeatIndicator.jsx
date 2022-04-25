import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
export default function HeatIndicator(props){
    const {value} = props;
    const heatStyle = {
        background: "linear-gradient(180deg, rgba(65,255,0,1) 0%, rgba(236,255,0,1) 50%, rgba(255,0,0,1) 100%)",
        height: "95%",
        borderRadius: "25px",
        width: "100%",
        margin: "9px 0px"
    }
    const heatIndWrapper = {
        height: "inherit",
        minWidth: "7%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "center",
        flexWrap: "nowrap"
    }

    const arrowWrapper ={
        height: "100%",
        position: "absolute",
        display: "flex",
    }
    const subWrapper = {}
    const arrowStyle = (value) => {
        let padding = value * 6.5/100;
        padding = '' + padding;
        return (
            {
                paddingTop: padding + "em",
                position: "absolute",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                width: "max-content",
                right: "-2.55em",
            }
        )
    }
    return (
        <div style={heatIndWrapper}>
            <div style={heatStyle}/>
            <div style={arrowWrapper}>
                <div style={arrowStyle(value)}>
                <div style={{fontSize: "130%"}}>----</div>
                <ArrowLeftIcon style={{position: "relative"}}/>
                </div>
            </div>
        </div>
    )
}