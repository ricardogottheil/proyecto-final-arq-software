import axios from 'axios';

const apiUri = process.env.REACT_APP_API_URI;

const obtenerBicicletas = async () => {
  try {
    const { data } = await axios.get(`${apiUri}/bicicletas`);
    return data;
  } catch (error) {
    return { ok: false, error };
  }
};

const accionBicicleta = async (bicicleta) => {
  try {
    const { data } = await axios.post(`${apiUri}/bicicletas`, bicicleta);
    return data;
  } catch (error) {
    return { ok: false, error };
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { accionBicicleta, obtenerBicicletas };
