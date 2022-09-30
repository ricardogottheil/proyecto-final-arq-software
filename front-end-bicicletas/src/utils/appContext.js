import { createContext, useContext, useState } from 'react';

const bicicletasContext = createContext();

export const useBicicletas = () => {
  const context = useContext(bicicletasContext);
  if (!context) {
    throw new Error(
      'useBicicletas debe estar dentro del proveedor de bicicletas'
    );
  }
  return context;
};

export const BicicletasProvider = ({ children }) => {
  const [bicicletas, setBicicletas] = useState([]);

  return (
    <bicicletasContext.Provider value={{ bicicletas, setBicicletas }}>
      {children}
    </bicicletasContext.Provider>
  );
};
