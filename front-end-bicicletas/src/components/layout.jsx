import React from "react";
import { Navbar } from "./navbar";

export const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
        </>
    );
};
