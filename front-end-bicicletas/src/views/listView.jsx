import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { BicycleModalCreate } from '../components/bicycleModalCreate';
import { BicycleModalUpdate } from '../components/bicycleModalUpdate';

import apiService from '../utils/apiService';
import { useBicicletas } from '../utils/appContext';

export const ListView = () => {
  const MySwal = withReactContent(Swal);
  const { bicicletas, setBicicletas } = useBicicletas();

  const getBicycles = async () => {
    const data = await apiService.obtenerBicicletas();
    if (data.ok === true) {
      setBicicletas(data.bicicletas);
    }
  };

  const eliminarBicicleta = async (bicicleta) => {
    if (!bicicleta) return;

    const bicicletaEliminar = {
      color: bicicleta.color,
      modelo: bicicleta.modelo,
      ubicacion: [bicicleta.latitud, bicicleta.longitud],
      id: bicicleta._id,
      accion: 'eliminar',
    };

    const data = await apiService.accionBicicleta(bicicletaEliminar);
    if (data.ok === true) {
      toast.success('Bicicleta eliminada con éxito');
      getBicycles();
    } else {
      toast.error('No se pudo eliminar la bicicleta');
    }
  };

  useEffect(() => {
    getBicycles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModalCreate = () => {
    MySwal.fire({
      title: <p className='font-bold text-lg pb-2'>Añadir bicicleta</p>,
      html: <BicycleModalCreate />,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
    });
  };

  const openModalUpdate = (bicicleta) => {
    MySwal.fire({
      title: <p className='font-bold text-lg pb-2'>Actualizar bicicleta</p>,
      html: <BicycleModalUpdate bicicletaData={bicicleta} />,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
    });
  };

  return (
    <div className='px-10 py-5'>
      <div className='flex mb-6'>
        <button className='btn' onClick={openModalCreate}>
          Añadir bicicleta
        </button>
        <button className='btn ml-2' onClick={getBicycles}>
          Recargar
        </button>
      </div>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
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
            {bicicletas?.map((bicicleta) => (
              <tr key={bicicleta?._id}>
                <th>{bicicleta?._id}</th>
                <td>{bicicleta?.color}</td>
                <td>{bicicleta?.modelo}</td>
                <td>{`${bicicleta?.ubicacion[0]}, ${bicicleta?.ubicacion[1]}`}</td>
                <td className='flex center'>
                  <button
                    className='btn btn-sm btn-primary mr-2'
                    onClick={() => openModalUpdate(bicicleta)}>
                    Actualizar
                  </button>
                  <button
                    className='btn btn-sm btn-third'
                    onClick={() => eliminarBicicleta(bicicleta)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
