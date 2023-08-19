// import React from "react";
// import { styleReset } from "react95";
// import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

// import original from "react95/dist/themes/original";
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";

// import Title from "../../components/test/Title";
// import Window from "../../components/test/Window";

// const GlobalStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif}') format('woff2');
//     font-weight: 400;
//     font-style: normal
//   }
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif_bold}') format('woff2');
//     font-weight: bold;
//     font-style: normal
//   }
//   body, input, select, textarea {
//     font-family: 'ms_sans_serif';
//   }
//   ${styleReset}
// `;

// const PAGE_TITLES = ["Don't", "you", "just", "hate", "popups?"];

// const ThemeProviderProxy = ThemeProvider;

// export default function App() {
//   return (
//     <div>
//       <GlobalStyles />
//       <ThemeProviderProxy theme={original}>
//         {PAGE_TITLES.map((title) => (
//           <Page key={title}>
//             <Title>{title}</Title>
//           </Page>
//         ))}
//         <Page>
//           <Window />
//         </Page>
//       </ThemeProviderProxy>
//     </div>
//   );
// }

// const Page = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   & > h2 {
//     font-size: 10vw;
//   }
// `;
