import { useState } from 'react';
import apiService from '../utils/apiService';
import toast from 'react-hot-toast';

export const BicycleModalUpdate = ({ bicicletaData }) => {
  const [bicicletaUpdate, setBicicletaUpdate] = useState({
    color: bicicletaData.color,
    modelo: bicicletaData.modelo,
    latitud: bicicletaData.ubicacion[0],
    longitud: bicicletaData.ubicacion[1],
  });

  const handleChange = ({ target: { value, name } }) =>
    setBicicletaUpdate({ ...bicicletaUpdate, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bicicletaFormatted = {
      id: bicicletaData._id,
      color: bicicletaUpdate.color || bicicletaData.color,
      modelo: bicicletaUpdate.modelo || bicicletaData.modelo,
      ubicacion: [bicicletaUpdate.latitud, bicicletaUpdate.longitud] || [
        bicicletaData.ubicacion[0],
        bicicletaData.ubicacion[1],
      ],
      accion: 'actualizar',
    };

    console.log(bicicletaFormatted);

    const data = await apiService.accionBicicleta(bicicletaFormatted);
    if (data.ok === true) {
      setBicicletaUpdate({
        id: '',
        color: '',
        modelo: '',
        latitud: 0,
        longitud: 0,
      });
      toast.success('Bicicleta actualizada con éxito');
    } else {
      toast.error('No se pudo actualizar la bicicleta');
    }
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className='flex flex-col p-6'>
        <div className='py-2 flex flex-col'>
          <label htmlFor='bicycle-color' className='font-bold mb-1'>
            Color:
          </label>
          <select
            name='color'
            id='bicycle-color'
            className='select select-bordered w-full'
            defaultValue={bicicletaData.color}
            onChange={handleChange}>
            <option disabled>Seleccione un color</option>

            <option>Blanco</option>
            <option>Negro</option>
            <option>Rojo</option>
            <option>Verde</option>
          </select>
        </div>

        <div className='py-2 flex flex-col'>
          <label htmlFor='bicycle-model' className='font-bold mb-1'>
            Modelo:
          </label>
          <select
            name='modelo'
            id='bicycle-model'
            className='select select-bordered w-full'
            defaultValue={bicicletaData.modelo}
            onChange={handleChange}>
            <option disabled>Seleccione un modelo</option>

            <option>Ruta</option>
            <option>Cross</option>
            <option>Montain</option>
            <option>Turismo</option>
          </select>
        </div>

        <div className='py-2 flex flex-col'>
          <label htmlFor='bicycle-lat' className='font-bold mb-1'>
            Latitud:
          </label>

          <input
            name='latitud'
            id='bicycle-lat'
            type='number'
            placeholder='0.000000'
            className='input input-bordered w-full'
            defaultValue={bicicletaData.ubicacion[0]}
            onChange={handleChange}
          />
        </div>

        <div className='py-2 flex flex-col'>
          <label htmlFor='bicycle-lon' className='font-bold mb-1'>
            Longitud:
          </label>

          <input
            name='longitud'
            id='bicycle-lon'
            type='number'
            placeholder='0.000000'
            className='input input-bordered w-full'
            defaultValue={bicicletaData.ubicacion[1]}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary pt-2 pb-2 mt-2'>
          Actualizar
        </button>
      </form>
    </>
  );
};
