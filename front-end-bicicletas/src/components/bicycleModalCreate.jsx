import { useState } from 'react';
import apiService from '../utils/apiService';
import toast from 'react-hot-toast';

export const BicycleModalCreate = () => {
  const [bicicletaCreate, setBicicletaCreate] = useState({
    color: '',
    modelo: '',
    latitud: 0,
    longitud: 0,
  });

  const handleChange = ({ target: { value, name } }) =>
    setBicicletaCreate({ ...bicicletaCreate, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bicicletaFormatted = {
      color: bicicletaCreate.color,
      modelo: bicicletaCreate.modelo,
      ubicacion: [bicicletaCreate.latitud, bicicletaCreate.longitud],
      accion: 'crear',
    };
    const data = await apiService.accionBicicleta(bicicletaFormatted);
    if (data.ok === true) {
      toast.success('Bicicleta creada con éxito');
    } else {
      toast.error('No se pudo crear la bicicleta');
    }

    setBicicletaCreate({
      color: '',
      modelo: '',
      latitud: 0,
      longitud: 0,
    });
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
            defaultValue='Seleccione un color'
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
            defaultValue='Seleccione un modelo'
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
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='btn btn-primary pt-2 pb-2 mt-2'>
          Añadir
        </button>
      </form>
    </>
  );
};
