import { Routes, Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

//HOOKS
import AppContext from "./utils/appContext";
import useInitialState from "./hooks/useInitialState";

import { HomeView, ListView } from "./views";
import { Layout } from "./components/layout";

import "./App.css";

const App = () => {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/list" element={<ListView />} />
                </Routes>
            </Layout>
        </AppContext.Provider>
    );
};

export default withAuthenticationRequired(App, {
    onRedirecting: () => <>Cargando...</>,
});
