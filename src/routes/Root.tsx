import { Outlet } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";
import { defaultTheme } from "../css/theme";

const GlobalStlye = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color:inherit
  }
  body {
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
  }

`;

function Root() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStlye />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Root;
