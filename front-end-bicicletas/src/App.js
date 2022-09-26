import { Routes, Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import { HomeView, ListView } from "./views";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/list" element={<ListView />} />
        </Routes>
    );
};

export default withAuthenticationRequired(App, {
    onRedirecting: () => <>Loading...</>,
});
