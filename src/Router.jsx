import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainView from "./components/Views/MainView";
import Login from "./components/Views/Login";
import Register from "./components/Views/Register";
import { Component, React } from "react";

class AppRouter extends Component {
    render() {
        const debug = true;
        return (
            <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Login debug={debug}/>}/>
                                <Route path="/register" element={<Register debug={debug}/>}/>
                                <Route path="/dashboard/*" element={<MainView debug={debug}/>}/>
                            </Routes>
            </BrowserRouter>);
    }
}

export default AppRouter;

