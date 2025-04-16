import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { StateStore } from "./Context/AppContext";
import { createRoot } from "react-dom/client";

import App from "./App";
import ScrollToTop from "./Components/_ScrollToTop";
import { ThemeProvider } from "./Context/ThemeContext";
// import { ChakraProvider } from "@chakra-ui/react";

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(
//   <StrictMode>
//     <ThemeProvider>
//       <BrowserRouter>
//         <StateStore>
//           <ScrollToTop />
//           <App />
//         </StateStore>
//       </BrowserRouter>
//     </ThemeProvider>
//   </StrictMode>
// );

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
