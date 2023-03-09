import React, { useState , useEffect } from "react";
import "./Home.css";
import Search from "../../components/Search";
import "../../components/BannerHeader.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';

// import "../../components/BannerSK.css";

// const logos = [
//     { src: 'logo1.png', alt: 'Logo 1' },
//     { src: 'logo2.png', alt: 'Logo 2' },
//     { src: 'logo3.png', alt: 'Logo 3' },
//     // Add more logos here
//   ];
  
//   const Banner = () => {
//     const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
  
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         setCurrentLogoIndex((currentLogoIndex + 1) % logos.length);
//       }, 5000);
  
//       return () => {
//         clearInterval(intervalId);
//       };
//     }, [currentLogoIndex]);

//     return (
//         <header className="banner">
//           <img
//             className="banner__logo"
//             src={logos[currentLogoIndex].src}
//             alt={logos[currentLogoIndex].alt}
//           />
//         </header>
//       );
// };


function Home({ setGlobalInput }) {
    const [isBannerVisible,setIsBannerVisible] = React.useState(true)
    const handleCloseButtonClick = () => setIsBannerVisible(false)
    return (
        <div className="home" >
        {isBannerVisible && (
            <header className="banner">
                    <>
                        <h1 className="banner__title">Search engine for your leaked data. Beta 2.0. Only ru leaked data!</h1>
                        <button className="banner__close-button" onClick={handleCloseButtonClick}>
                        &times;
                        </button>
                    </>
            </header>
            )}
            <div className="home__body">
                <p>
                    dea<span style={{ color: "#FFF" }}>th</span>non<span style={{ color: "#e3ff73" }}>.</span>com
                </p>
                <div className="home_inputContainer">
                    <Search setGlobalInput={setGlobalInput} />
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

export default Home; 