import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { NewFood } from "./pages/NewFood"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NewFood />
    </ThemeProvider>
  </React.StrictMode>
)
