import { useState } from "react";
import initialState from "../initialState";

/**
 * useInitialState - Global variables initializer
 *
 * Return:
 *        {Object}      state           - App store
 *
 */
const useInitialState = () => {
    const [user, setUser] = useState(initialState.user);
    const [bicycle, setBicycle] = useState(initialState.requesterId);

    const updateUser = (payload) => {
        setUser({
            ...user,
            user: payload,
        });
    };

    const updateBicycles = (payload) => {
        setBicycle({
            ...user,
            Bicycles: payload,
        });
    };

    return {
        user,
        bicycle,
        updateUser,
        updateBicycles,
    };
};

export default useInitialState;
