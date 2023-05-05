import React, { useState } from 'react';


const FormularioEditar = ({ usuario, handleEditarUsuario, handleCancelarEditar }) => {
  const [nombre, setNombre] = useState(usuario.nombre);
  const [correo, setCorreo] = useState(usuario.correo);
  const [cuenta, setCuenta] = useState(usuario.cuenta);

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioActualizado = {
      id: usuario.id,
      nombre,
      correo,
      cuenta
    };
    handleEditarUsuario(usuarioActualizado.id,usuarioActualizado);
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
        Guardar
      </button>
      <button type="button" className="btn btn-secondary" onClick={handleCancelarEditar}>
        Cancelar
      </button>
    </form>
  );
};

export default FormularioEditar;
