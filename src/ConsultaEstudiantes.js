import React, { useState } from 'react';
import axios from 'axios';

function ConsultaEstudiantes() {
  const [carnet, setCarnet] = useState('');
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [seccion, setSeccion] = useState('');
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`https://test-deploy-12.onrender.com/estudiantes/${carnet}`);
      setNombres(response.data.nombres);
      setCorreo(response.data.correo);
      setSeccion(response.data.seccion);
      setError('');
    } catch (err) {
      setError('Error al buscar el estudiante. Verifique el número de carnet.');
    }
  };

  const handleLimpiar = () => {
    setCarnet('');
    setNombres('');
    setCorreo('');
    setSeccion('');
    setError('');
  };

  const handleCancelar = () => {
    // Logica para cancelar la operación
    setCarnet('');
    setNombres('');
    setCorreo('');
    setSeccion('');
    setError('');
  };

  return (
    <div>
      <h1>Consulta de Alumnos</h1>
      <label>
        Carnet:
        <input 
          type="text" 
          value={carnet} 
          onChange={(e) => setCarnet(e.target.value)} 
        />
      </label>
      <br />
      <label>
        Nombres:
        <input 
          type="text" 
          value={nombres} 
          readOnly 
        />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input 
          type="text" 
          value={correo} 
          readOnly 
        />
      </label>
      <br />
      <label>
        Sección:
        <input 
          type="text" 
          value={seccion} 
          readOnly 
        />
      </label>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleBuscar}>Buscar</button>
      <button onClick={handleLimpiar}>Limpiar</button>
      <button onClick={handleCancelar}>Cancelar</button>
    </div>
  );
}

export default ConsultaEstudiantes;
