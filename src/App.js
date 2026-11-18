import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado inicial con los campos unificados de la obra y el personal técnico
  const [obras, setObras] = useState([
    { 
      id: 1, 
      codigoProyecto: 'OBRA-2026-01', 
      nombreObra: 'Edificio Santa Ana', 
      responsable: 'Leider Rodríguez', 
      cargo: 'Arquitecto Residente', 
      correo: 'leider.rodriguez@example.com', 
      estado: 'En Ejecución', 
      avance: 65 
    }
  ]);

  const [nuevaObra, setNuevaObra] = useState({
    codigoProyecto: 'OBRA-2026-02',
    nombreObra: '',
    responsable: '',
    cargo: '',
    correo: '',
    estado: 'Planeación',
    avance: 0
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaObra({ ...nuevaObra, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaObra.nombreObra || !nuevaObra.responsable || !nuevaObra.correo) {
      setMensaje('Por favor completa los campos obligatorios.');
      return;
    }

    setObras([...obras, { id: Date.now(), ...nuevaObra }]);
    setMensaje('¡Registro de obra y personal asignado con éxito!');
    
    // Limpiar formulario dejando el código base
    setNuevaObra({
      codigoProyecto: `OBRA-2026-${obras.length + 2}`,
      nombreObra: '',
      responsable: '',
      cargo: '',
      correo: '',
      estado: 'Planeación',
      avance: 0
    });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto', background: '#fdfdfd' }}>
      <header style={{ borderBottom: '2px solid #007bff', paddingBottom: '15px', marginBottom: '20px' }}>
        <h1 style={{ color: '#007bff', margin: 0 }}>Control de Obras - Módulo de Gestión</h1>
        <p style={{ color: '#555', margin: '5px 0 0' }}>Sistema de Registro de Proyectos y Asignación de Personal Técnico</p>
      </header>

      {mensaje && (
        <div style={{ background: '#d4edda', color: '#155724', padding: '10px 15px', borderRadius: '4px', marginBottom: '20px', border: '1px solid #c3e6cb' }}>
          {mensaje}
        </div>
      )}

      <section style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', marginBottom: '25px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', border: '1px solid #e3e3e3' }}>
        <h3 style={{ marginTop: 0, color: '#333' }}>Registro y Asignación de Personal</h3>
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Código de Proyecto:</label>
            <input 
              type="text" 
              name="codigoProyecto" 
              value={nuevaObra.codigoProyecto} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Nombre de la Obra:</label>
            <input 
              type="text" 
              name="nombreObra" 
              placeholder="Ej. Edificio Los Rosales" 
              value={nuevaObra.nombreObra} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Responsable de Obra:</label>
            <input 
              type="text" 
              name="responsable" 
              placeholder="Nombre del profesional" 
              value={nuevaObra.responsable} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Cargo / Especialidad:</label>
            <input 
              type="text" 
              name="cargo" 
              placeholder="Ej. Arquitecto, Residente" 
              value={nuevaObra.cargo} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Correo Electrónico:</label>
            <input 
              type="email" 
              name="correo" 
              placeholder="correo@example.com" 
              value={nuevaObra.correo} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Estado del Proyecto:</label>
            <select 
              name="estado" 
              value={nuevaObra.estado} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            >
              <option value="Planeación">Planeación</option>
              <option value="En Ejecución">En Ejecución</option>
              <option value="Finalizada">Finalizada</option>
            </select>
          </div>

          <div style={{ gridColumn: 'span 2' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Porcentaje de Avance (%):</label>
            <input 
              type="number" 
              name="avance" 
              min="0" 
              max="100"
              value={nuevaObra.avance} 
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ gridColumn: 'span 2', background: '#007bff', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
          >
            Guardar Asignación y Registrar Obra
          </button>
        </form>
      </section>

      <section>
        <h3 style={{ color: '#333' }}>Listado General de Obras y Personal Asignado</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <thead>
              <tr style={{ background: '#007bff', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '12px' }}>Código</th>
                <th style={{ padding: '12px' }}>Obra</th>
                <th style={{ padding: '12px' }}>Responsable</th>
                <th style={{ padding: '12px' }}>Cargo</th>
                <th style={{ padding: '12px' }}>Correo</th>
                <th style={{ padding: '12px' }}>Estado</th>
                <th style={{ padding: '12px' }}>Avance</th>
              </tr>
            </thead>
            <tbody>
              {obras.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.codigoProyecto}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.nombreObra}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.responsable}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.cargo}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.correo}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.estado}</td>
                  <td style={{ padding: '12px', fontSize: '14px' }}>{item.avance}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default App;