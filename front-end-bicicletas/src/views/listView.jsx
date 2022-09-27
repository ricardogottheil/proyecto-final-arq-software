import React from "react";

export const ListView = () => {
    return (
        <div className="px-10 py-5">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Color</th>
                            <th>Modelo</th>
                            <th>Ubicacion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Blanco</td>
                            <td>Ruta</td>
                            <td>101,101</td>
                            <td className="flex center">
                                <button className="btn btn-sm btn-primary mr-2">
                                    Mostrar
                                </button>
                                <button className="btn btn-sm btn-secondary mr-2">
                                    Editar
                                </button>
                                <button className="btn btn-sm btn-third">
                                    Eliminar
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td>Negro</td>
                            <td>Ruta</td>
                            <td>6.167689,-75.595522</td>
                            <td className="flex center">
                                <button className="btn btn-sm btn-primary mr-2">
                                    Mostrar
                                </button>
                                <button className="btn btn-sm btn-secondary mr-2">
                                    Editar
                                </button>
                                <button className="btn btn-sm btn-third">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
