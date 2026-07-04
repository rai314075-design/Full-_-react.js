import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Products from "./Component/Products";
import MY_APP from "./MY_APP";
// import App from './App.tsx'
// import Index from './Index.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Index /> */}
    <MY_APP />
  </StrictMode>,
);
