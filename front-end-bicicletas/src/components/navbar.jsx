/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    return (
        <div className="navbar bg-base-100 z-50">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Bicicletas</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/list">Listar bicicletas</Link>
                    </li>
                </ul>
            </div>

            {isAuthenticated && (
                <div className="dropdown dropdown-end ">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src={user.picture} alt={user.name} />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <button onClick={logout}>Salir</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
