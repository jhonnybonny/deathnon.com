import React from "react";
import { Route, HashRouter as Router, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    const [globalInput, setGlobalInput] = React.useState("");
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route
                        path="/search"
                        element={
                            <SearchPage globalInput={globalInput} setGlobalInput={setGlobalInput} />
                        }
                    />
                    <Route path="/" element={<Home setGlobalInput={setGlobalInput} />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <Outlet />
            </Router>
        </div>
    );
}

export default App;