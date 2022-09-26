/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Bicicletas</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/list">Listar bicicletas</a>
                    </li>
                </ul>
            </div>

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                    <li>
                        <a>Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
