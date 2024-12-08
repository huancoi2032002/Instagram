import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import SocketProvider from "./Hook/SocketContext.tsx";

const loggedInUserId =
    localStorage.getItem("userID") || "6739d6501910d4b22d21a29b";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <SocketProvider userId={loggedInUserId}>
                <App />
            </SocketProvider>
        </BrowserRouter>
    </StrictMode>
);
