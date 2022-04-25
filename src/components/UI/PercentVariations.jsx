import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export default function PercentVariations(props){
    const {value, showArrow = false} = props;
    const percentStyle = () => {
        let color = "red";
        if(value > 0) {
            color = "#00e700";
        }
        if(showArrow){
            return (
                {
                    color: color,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                }
            )
        }
        else{
            return (
                {
                    color: color
                }
            )
        }
    }
    return(
        <span style={percentStyle()}>{value > 0?"+":""}{value}% {showArrow?<ArrowRightAltIcon style={value > 0?{transform: "rotate(320deg)"}: {transform: "rotate(50deg)"}}/>:<></>}</span>
    )
}