import React, { useState } from 'react';

const FormularioAgregar = ({ agregarUsuario }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [cuenta, setCuenta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = { nombre, correo, cuenta };
    try {
      agregarUsuario(nuevoUsuario);
      setNombre('');
      setCorreo('');
      setCuenta('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo
        </label>
        <input
          type="email"
          className="form-control"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cuenta" className="form-label">
          Cuenta
        </label>
        <input
          type="text"
          className="form-control"
          id="cuenta"
          value={cuenta}
          onChange={(e) => setCuenta(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default FormularioAgregar;
