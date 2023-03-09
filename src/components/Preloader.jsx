import React from "react";
import ContentLoader from "react-content-loader"

export const Preloader = () => {
    return (
        <div className={`preloader opacity-animation`}>
            <span className={`loader`} />
        </div>
    );
};



// export const Preloader = () => {
//     return (
//       <div>
//         <FadingLoaderCard1 />
//         <FadingLoaderCard2 />
//       </div>
//     );
//   };
  
//   const FadingLoaderCard1 = () => {
//     return (
//       <ContentLoader
//         width={500}
//         height={200}
//         backgroundColor="#ababab"
//         foregroundColor="#fafafa"
//       >
//         <rect x="70" y="15" rx="5" ry="5" width="380" height="25" />
//         <rect x="70" y="39" rx="5" ry="5" width="220" height="15" />
//         <rect x="70" y="59" rx="5" ry="5" width="200" height="15" />
//         <rect x="70" y="79" rx="5" ry="5" width="220" height="15" />
//         <rect x="70" y="99" rx="5" ry="5" width="200" height="15" />
//         <rect x="70" y="119" rx="5" ry="5" width="220" height="15" />
//         <rect x="70" y="139" rx="5" ry="5" width="200" height="15" />
//       </ContentLoader>
//     );
//   };
  
//   const FadingLoaderCard2 = () => {
//     return (
//       <ContentLoader
//         width={400}
//         height={200}
//         backgroundColor="#bfbfbf"
//         foregroundColor="#fafafa"
//       >
//         <rect x="70" y="15" rx="5" ry="5" width="300" height="18" />
//         <rect x="70" y="39" rx="5" ry="5" width="220" height="15" />
//       </ContentLoader>
//     );
//   };
  
//   export default Preloader;
  