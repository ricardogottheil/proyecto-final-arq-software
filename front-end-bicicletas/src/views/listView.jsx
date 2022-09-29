import React from "react";

const BicycleModalCreateButton = () => {
    return (
        <>
            <label
                htmlFor="bicycle-modal-create-button"
                className="btn modal-button"
            >
                Añadir bicicleta
            </label>
            <input
                type="checkbox"
                id="bicycle-modal-create-button"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-2">Añadir bicicleta</h3>
                    <hr />
                    <form className="flex flex-col">
                        <div className="py-2 flex flex-col">
                            <label
                                htmlFor="bicycle-color"
                                className="font-bold mb-1"
                            >
                                Color:
                            </label>
                            <select
                                name="color"
                                id="bicycle-color"
                                className="select select-bordered w-full"
                            >
                                <option disabled selected>
                                    Seleccione un color
                                </option>

                                <option>Blanco</option>
                                <option>Negro</option>
                                <option>Rojo</option>
                                <option>Verde</option>
                            </select>
                        </div>

                        <div className="py-2 flex flex-col">
                            <label
                                htmlFor="bicycle-model"
                                className="font-bold mb-1"
                            >
                                Modelo:
                            </label>
                            <select
                                name="modelo"
                                id="bicycle-model"
                                className="select select-bordered w-full"
                            >
                                <option disabled selected>
                                    Seleccione un modelo
                                </option>

                                <option>Ruta</option>
                                <option>Cross</option>
                                <option>Montain</option>
                                <option>Turismo</option>
                            </select>
                        </div>

                        <div className="py-2 flex flex-col">
                            <label
                                htmlFor="bicycle-lat"
                                className="font-bold mb-1"
                            >
                                Latitud:
                            </label>

                            <input
                                name="latitud"
                                id="bicycle-lat"
                                type="number"
                                placeholder="0.000000"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div className="py-2 flex flex-col">
                            <label
                                htmlFor="bicycle-lon"
                                className="font-bold mb-1"
                            >
                                Longitud:
                            </label>

                            <input
                                name="longitud"
                                id="bicycle-lon"
                                type="number"
                                placeholder="0.000000"
                                className="input input-bordered w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary pt-2 pb-2 mt-2"
                        >
                            Añadir
                        </button>
                    </form>
                    <div className="modal-action">
                        <label
                            htmlFor="bicycle-modal-create-button"
                            className="btn"
                        >
                            Cerrar
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export const ListView = () => {
    return (
        <div className="px-10 py-5">
            <div className="flex mb-6">
                <BicycleModalCreateButton />
            </div>
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
