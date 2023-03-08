const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Síntomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
    </div>
  );
};

export default Paciente;
