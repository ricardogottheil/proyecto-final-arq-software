import { useEffect } from 'react';
import { BicycleMarker } from '../components/bicycle-marker';
import { LeafletMap } from '../components/leaflet-map';
import apiService from '../utils/apiService';
import { useBicicletas } from '../utils/appContext';

export const HomeView = () => {
  const { bicicletas, setBicicletas } = useBicicletas();

  useEffect(() => {
    const getBicycles = async () => {
      const data = await apiService.obtenerBicicletas();
      if (data.ok === true) {
        setBicicletas(data.bicicletas);
      }
    };
    getBicycles();
  }, [setBicicletas]);

  return (
    <div className='h-screen'>
      <LeafletMap height='100%' width='100%'>
        {bicicletas.map((bicycle) => (
          <BicycleMarker
            key={bicycle._id}
            position={[bicycle.ubicacion[0], bicycle.ubicacion[1]]}
          />
        ))}
      </LeafletMap>
    </div>
  );
};
