import React from 'react';

const Tabla = ({ usuarios, eliminarUsuario, editarUsuario }) => {
  const handleEdit = (usuario) => {
    // Lógica para editar el usuario con el id proporcionado
    editarUsuario(usuario)
  };

  const handleDelete = (id) => {
    // Lógica para eliminar el usuario con el id proporcionado
    eliminarUsuario(id);
  };
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Cuenta</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.correo}</td>
            <td>{usuario.cuenta}</td>
            <td>
              <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(usuario)}>
                Editar
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(usuario.id)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
