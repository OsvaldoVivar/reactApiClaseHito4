import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [persona, setPersona] = useState({});

  useEffect(() => {
    async function obtenerDatos() {
      const res = await fetch("https://randomuser.me/api");
      const data = await res.json();
      console.log(data);

      setPersona({
        nombre: `${data.results[0].name.first} ${data.results[0].name.last}`,
        telefono: data.results[0].phone,
        imagen: data.results[0].picture.medium,
      });
    }
    obtenerDatos();
  }, []);
  const nombre = useRef();

  const handleBoton = () => {
    console.log(nombre.current.value);
  };

  return (
    <div>
      <h1 className="text-4xl">Componentes</h1>
      <input ref={nombre} />
      <button onClick={handleBoton}>ver nombre</button>
      <p>
        nombre: <span>{persona.nombre}</span>
      </p>
      <p>
        telefono: <span>{persona.telefono}</span>
      </p>
      <p>
        <img src={persona.imagen} alt="" />
      </p>
    </div>
  );
}

export default App;
