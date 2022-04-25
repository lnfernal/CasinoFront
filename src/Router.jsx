import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainView from "./components/MainView";
import { Component, React } from "react";

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                            <Routes>
                                <Route path="*" element={<MainView />}/>
                                <Route path="/register" element={<MainView />}/>
                                <Route path="/dashboard" element={<MainView />}/>
                            </Routes>
            </BrowserRouter>);
    }
}

export default AppRouter;

