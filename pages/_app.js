import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Work+Sans:wght@200&display=swap');
body{
  padding:0;
  margin:0;
  font-family: 'Poppins', sans-serif;
  
}
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
