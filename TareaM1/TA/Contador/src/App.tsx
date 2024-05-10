import React, { useState } from 'react';

const ContadorProduccion: React.FC = () => {
  
  const [produccion, setProduccion] = useState<number>(0);
  
  const [ganancia, setGanancia] = useState<number>(0);
  
  const [mensaje, setMensaje] = useState<string>('');

  
  const aumentarProduccion = () => {
    // Aumentamos la producción en 1
    setProduccion(produccion + 1);
  
    setGanancia(produccion + 1);
    
    setMensaje('Producción aumentada en 1 unidad');
  };

  return (
    <div>
      <h2>Producción: {produccion}</h2>
      <h2>Ganancia: ${ganancia}</h2>
      <p>{mensaje}</p>
      <button onClick={aumentarProduccion}>Aumentar Producción</button>
    </div>
  );
};

export default ContadorProduccion;
