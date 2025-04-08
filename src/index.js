import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateStore } from "./Context/AppContext";

import App from "./App";
import ScrollToTop from "./Components/_ScrollToTop";
import { ThemeProvider } from "./Context/ThemeContext";
// import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ThemeProvider>
    <StrictMode>
      <BrowserRouter>
        <StateStore>
          <ScrollToTop />
          {/* <ChakraProvider> */}

          <App />

          {/* </ChakraProvider> */}
        </StateStore>
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
