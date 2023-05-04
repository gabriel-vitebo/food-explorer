import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { EditFood } from "./pages/EditFood"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <EditFood />
    </ThemeProvider>
  </React.StrictMode>
)
