export default function PercentVariations(props){
    const {value} = props;
    return(
        <span style={value < 0? {color:"red"}:{color:"#00e700"}}>{value > 0?"+":""}{value}%</span>
    )
}