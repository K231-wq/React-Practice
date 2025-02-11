import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from 'react-dom';

import P2 from "./P2";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <P2/>
    </StrictMode>
)