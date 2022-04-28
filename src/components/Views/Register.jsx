import Background from "../SubComponents/Background";
import BasicTab from "../UI/BasicTab";
import Input from "../UI/Input";
import {Route, Routes, useNavigate} from "react-router-dom";
import {React, useEffect, useState} from "react";
import Button from "../UI/Button";
import InputPass from "../UI/InputPass";
import WebFont from 'webfontloader';
import "../../styles/Views/Login.css";

export default function Register(props){
    const {debug=false} = props;
    const navigate = useNavigate();
    const defaultValues = {name:"", mail:"", pass:"", tel:""}
    const [values, setValues] = useState(defaultValues);
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
            <div className="login-wrapper register">
                <div className="logo-style">
                    <span style={{color: "rgb(255 0 0 / 65%)"}}>Casino</span><span style={{color: "white"}}>bankers</span>
                </div>
                <BasicTab style={{minWidth:"30%", minHeight:"60%", margin:"5% 0% 8% 0%", padding: "2% 3% 3% 3%"}}>
                    <span style={{padding:"30px 0px", fontWeight: "600"}}>Se connecter</span>
                    <div className="body-wrapper">
                        <form onSubmit={handleSubmit}>
                            <Input name={"name"} value={values.name} onChange={handleInputChange} placeholder={"Nom complet"}/>
                            <Input name={"tel"} value={values.tel} type={"tel"} onChange={handleInputChange} placeholder={"Téléphone"}/>
                            <Input name={"mail"} value={values.mail} type={"email"} onChange={handleInputChange} placeholder={"Adresse mail"}/>
                            <InputPass name={"pass"} value={values.pass} onChange={handleInputChange}
                                       placeholder={"Mot de passe"}/>
                            <Button style={{
                                backgroundColor: "rgb(255 0 0 / 65%)",
                                fontSize: "1.1em",
                                borderColor: "transparent",
                            }} type={"submit"}>
                                Connexion
                            </Button>
                        </form>
                    </div>
                    <div role="separator" id="mat-divider"
                         className="mat-divider mat-divider-horizontal" aria-orientation="horizontal" style={{width: "50%", background: "white",
                        margin: "30px 0px 10px 0px"}}></div>
                    <span style={{fontSize: "14px", cursor:"pointer"}} onClick={()=>{navigate("/")}}>Vous etes deja inscrit?</span>
                </BasicTab>
            </div>
            <span style={{
                textAlign: "right",
                color: "white",
                fontSize: "17px", cursor:"pointer"}}>Mentions légales</span>
        </Background>
    )
}