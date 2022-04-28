import {helpFunc} from "../../utils/helpFunc";
import "../../styles/UI/Table.css";
export default function Table(props){
    const help = helpFunc();
    const {bets = [
        {date: "", hour: "", bet: 0, pnl: 0, percent:0},
    ]} = props;

    const sticky = {
        position: "sticky", top: "0", zIndex: "1", backgroundColor:"#2A2A47",
        boxShadow: "-1px 6px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%)"
    }

    const renderTableHeader = () =>{
        let header = Object.keys(bets[0])
        return header.map((key, index) => {
            if(index % 2){
                return <th key={index}>{help.capitalize(key)}</th>
            }
            else{
                return <th className="light-col" key={index}>{help.capitalize(key)}</th>
            }
        })
    }

    const renderTableData= () =>{
        return bets.map((student, index) => {
            const { date, heure, mise, pnl, pourcent } = student //destructuring
            return (
                <tr>
                    <td className="light-col">{date}</td>
                    <td>{heure}</td>
                    <td className="light-col">{mise}</td>
                    <td>{pnl}</td>
                    <td className="light-col">{pourcent}</td>
                </tr>
            )
        })
    }

    return (
            <table id='bets'>
                <tbody>
                <tr style={sticky}>{renderTableHeader()}</tr>
                {renderTableData()}
                </tbody>
            </table>
    )
}
