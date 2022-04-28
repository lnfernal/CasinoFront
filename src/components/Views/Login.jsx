import Background from "../SubComponents/Background";
import BasicTab from "../UI/BasicTab";
import Input from "../UI/Input";
import {Route, Routes, useNavigate} from "react-router-dom";
import {React, useEffect, useState} from "react";
import Button from "../UI/Button";
import InputPass from "../UI/InputPass";
import WebFont from 'webfontloader';
import "../../styles/Views/Login.css";

export default function Login(props){
    const {debug=false} = props;
    const navigate = useNavigate();
    const defaultValues = {mail:"", pass:""}
    const [values, setValues] = useState(defaultValues);
    const [status, setStatus] = useState("login")
    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setValues({...values, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(debug){
            navigate("/dashboard");
        }
        /*setSubmitting(true);
        setLoad(true);
        auth.login(values.name, values.pass)
            .then(() => {
                setSubmitting(false);
                setLoggedIn(true);
                setResult({success: true, message: 'Login success'});setLoad(false);
                history.push("/Dashboard/dashboard-pbx");
            })
            .catch((error) => {
                setSubmitting(false);
                setLoggedIn(false);
                setResult({error: true, message: `Login error: ${error.message}`});setLoad(false);
                console.log('Login error', error);
            });*/
    };
    useEffect(()=> {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Radio Canada', 'Lato']
            }
        });
    },[])
return(
    <Background>
        <div className="login-wrapper">
            <div className="logo-style">
                <span style={{color: "rgb(255 0 0 / 65%)"}}>Casino</span><span style={{color: "white"}}>bankers</span>
            </div>
            <BasicTab style={{minWidth:"30%", minHeight:"46%", margin:"5% 0% 10% 0%", padding: "3% 3%"}}>
                <span style={{padding:"30px 0px", fontWeight: "600"}}>{status==="recover"?"Entrer votre email:":"Se connecter"}</span>
                <div className="body-wrapper">
                <form onSubmit={handleSubmit}>
                    <Input name={"mail"} value={values.mail} onChange={handleInputChange} placeholder={"Adresse mail"}/>
                    {status!=="recover"?<InputPass name={"pass"} value={values.pass} onChange={handleInputChange}
                                                   placeholder={"Mot de passe"}/>:<></>}

                    <Button style={{
                        backgroundColor: "rgb(255 0 0 / 65%)",
                        fontSize: "1.1em",
                        borderColor: "transparent",
                    }} type={"submit"}>
                        {status==="recover"?"Reinitialiser":"Connexion"}
                    </Button>
                </form>
                    {status!=="recover"?<span style={{fontSize: "14px", cursor:"pointer"}} onClick={()=>{setStatus("recover")}}>Mot de passe oublié?</span>:<></>}
                </div>
                <div role="separator" id="mat-divider"
                     className="mat-divider mat-divider-horizontal" aria-orientation="horizontal" style={{width: "50%", background: "white",
                    margin: "30px 0px 10px 0px"}}></div>
                {status==="recover"?<span style={{fontSize: "14px", cursor:"pointer"}} onClick={()=>{setStatus("login")}}>Vous souhaitez vous reconnecter?</span>:
                    <Button extraClass={"shadow"} style={{
                        fontSize: "1.1em",
                        borderColor: "transparent",
                        backgroundColor: "#2d2f4a",
                        width: "-webkit-fill-available"
                    }}
                            action={()=>{navigate("/register")}}
                    >
                        S'inscrire
                    </Button>
                }


            </BasicTab>
        </div>
        <span style={{
            textAlign: "right",
            color: "white",
            fontSize: "17px"}}>Mentions légales</span>
    </Background>
)
}