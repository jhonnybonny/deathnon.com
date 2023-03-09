import React, { useState , useEffect } from "react";
import "./ErrorPage.css";
import Search from "../../components/Search";
import "../../components/BannerHeader.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; 
import { render } from 'react-dom';
import { useNavigate } from "react-router-dom";


function ErrorPage({ setGlobalInput }) {
    const [isBannerVisible, setIsBannerVisible] = React.useState(true);
    const [secondsLeft, setSecondsLeft] = React.useState(5);
    const handleCloseButtonClick = () => setIsBannerVisible(false);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
        if (secondsLeft === 0) {
            navigate("/");
        }
        return () => clearInterval(intervalId);
    }, [secondsLeft, navigate]);

    return (
        <div className="home">
            {isBannerVisible && (
                <header className="banner">
                    <>
                        <h1 className="banner__title">
                            Search engine for your leaked data. Beta 2.0. Only ru leaked data!
                        </h1>
                        <button
                            className="banner__close-button"
                            onClick={handleCloseButtonClick}
                        >
                            &times;
                        </button>
                    </>
                </header>
            )}
            <div className="home__body">
                <p>
                    dea<span style={{ color: "#FFF" }}>th</span>non
                    <span style={{ color: "#e3ff73" }}>.</span>com
                </p>
                <div className="redirect__body">
                    <p>Redirecting in <span style={{ color: "#e3ff73" }}>{secondsLeft}</span> seconds...</p>
                </div>
            </div>
            <Footer backgroundColor="#161616" 
                columns={[ 
                {
                    // icon: (
                    // <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                    // ),
                    // title: '语雀',
                    // url: 'https://yuque.com',
                    // openExternal: true,
                },
                ]}
                bottom="Copyright © 2023 Deathnon All rights reserved."

            />,
        </div>
    );
}

export default ErrorPage;