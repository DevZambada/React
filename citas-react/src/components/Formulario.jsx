import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación de formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      console.log("Hay al menos un campo vacio");

      setError(true);
      return;
    }

    setError(false);

    //objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editar Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            placeholder="Describe los Síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
             hover:bg-indigo-700 cursor-pointer transition-colors"
          value={paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;

/*
import { useState, useEffect } from "react";
import Error from "./Error";
import FormInput from "./FormInput";

const Formulario = ({ pacientes, setPacientes }) => {
  const [form, setForm] = useState({
    nombre: "",
    propietario: "",
    email: "",
    fechaDeAlta: "",
    sintomas: "",
  });

  const { nombre, propietario, email, fechaDeAlta, sintomas } = form;

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    //Validación de formulario
    // if ([nombre, propietario, email, fechaDeAlta, sintomas].includes("")) {
    //   console.log("Hay al menos un campo vacio");

    //   setError(true);
    //   return;
    // }

    setError(false);

    //objeto de Paciente
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fechaDeAlta,
      sintomas,
    };

    setPacientes([...pacientes, objetoPaciente]);

    //Reiniciar el formulario
    setForm({
      nombre: "",
      propietario: "",
      email: "",
      fechaDeAlta: "",
      sintomas: "",
    });
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <FormInput
          name={"mascota"}
          id={"mascota"}
          type={"text"}
          onChange={handleChange}
          value={nombre}
          placeholder={"Nombre de la mascota"}
        />
        <FormInput
          name={"propietario"}
          id={"propietario"}
          type={"text"}
          value={propietario}
          onChange={handleChange}
          placeholder={"Nombre del propietario"}
        />
        <FormInput
          name={"email"}
          id={"email"}
          type={"email"}
          value={email}
          onChange={handleChange}
          placeholder={"Email"}
        />
        <FormInput
          name={"fechaDeAlta"}
          id={"fechaDeAlta"}
          type={"date"}
          value={fechaDeAlta}
          onChange={handleChange}
          placeholder={"Fecha de alta"}
        />
        <FormInput
          name={"sintomas"}
          id={"sintomas"}
          type={"text"}
          value={sintomas}
          onChange={handleChange}
          placeholder={"Sintomas"}
          classes={"block"}
        />
        <button
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
             hover:bg-indigo-700 cursor-pointer transition-colors"
        >
          Agregar paciente
        </button>
      </form>
    </div>
  );
};

export default Formulario;
*/
