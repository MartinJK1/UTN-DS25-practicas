import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AgregarLibro({ catalogo, setCatalogo }) {
  const [formData, setFormData] = useState({
    titulo: "",
    autor: "",
    descripcion: "",
    tema: "ciencia-ficcion"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoLibro = {
      ...formData,
      imagen: "/img/libros/placeholder.jpg" // imagen fija
    };

    setCatalogo([...catalogo, nuevoLibro]);
    navigate("/catalogo");
  };

  return (
    <main className="container py-4">
      <h2 className="mb-4 text-center">Agregar nuevo libro</h2>

      <form className="bg-white p-4 rounded shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Autor:</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            value={formData.autor}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea
            className="form-control"
            name="descripcion"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tema:</label>
          <select
            className="form-select"
            name="tema"
            value={formData.tema}
            onChange={handleChange}
            required
          >
            <option value="ciencia-ficcion">Ciencia Ficción</option>
            <option value="historia">Historia</option>
            <option value="tecnologia">Tecnología</option>
            <option value="fantasia">Fantasía</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">Agregar libro</button>
      </form>
    </main>
  );
}