import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tabla from './components/Tabla';
import FormularioAgregar from './components/FormularioAgregar';
import FormularioEditar from './components/FormularioEditar';


function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormularioAgregar, setMostrarFormularioAgregar] = useState(false);
  const [mostrarFormularioEditar, setMostrarFormularioEditar] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7249/api/Usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const agregarUsuario = (nuevoUsuario) => {
    axios.post('https://localhost:7249/api/Usuarios', nuevoUsuario)
    .then(response => {
      setUsuarios([...usuarios, response.data]); // Agregar el nuevo usuario al final de la lista de usuarios
      setMostrarFormularioAgregar(false); // Ocultar el formulario después de agregar el nuevo usuario
    })
    .catch(error => {
      console.log(error);
    });
  } 

  const editarUsuario = (usuario) => {
    setUsuarioEditando(usuario);
    setMostrarFormularioEditar(true);
  }

  const eliminarUsuario = (id) => {
    axios.delete(`https://localhost:7249/api/Usuarios/${id}`)
      .then(response => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  }

  const actualizarUsuario = async (id, usuarioActualizado) => {
    console.log(usuarioActualizado);
    await axios.put(`https://localhost:7249/api/Usuarios/${id}`, usuarioActualizado);
    const nuevosUsuarios = usuarios.map((usuario) => {
      if (usuario.id === id) {
        return { ...usuario, ...usuarioActualizado };
      } else {
        return usuario;
      }
    });
    setUsuarios(nuevosUsuarios);
    setMostrarFormularioEditar(false);
    setUsuarioEditando({});
  };

  const toggleMostrarFormularioAgregar = () => {
    setMostrarFormularioAgregar(!mostrarFormularioAgregar);
  }
  const toggleMostrarFormularioEditar = (value) => {
    setMostrarFormularioEditar(value);
    setUsuarioEditando(null);
  };
  console.log(usuarioEditando);

  return (
    <div className="App container">
      <div className="container d-flex justify-content-center">
        <h1>CRUD de Usuarios</h1>
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={toggleMostrarFormularioAgregar} className='btn btn-primary btn-sm'>Agregar Usuario</button>
      </div>
      <Tabla usuarios={usuarios} eliminarUsuario={eliminarUsuario} editarUsuario={editarUsuario}/>
      {mostrarFormularioAgregar && <FormularioAgregar agregarUsuario={agregarUsuario} />}
      {mostrarFormularioEditar && usuarioEditando ? 
        <FormularioEditar usuario={usuarioEditando} handleMostrarFormulario={toggleMostrarFormularioEditar} handleEditarUsuario={actualizarUsuario} /> 
        : null
      }


    </div>
  );
}

export default App;
