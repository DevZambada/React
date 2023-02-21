const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Propietario: {""}
        <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Email: {""}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10 Diciembre de 2022</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minim
          earum reiciendis autem dolorum totam recusandae ullam obcaecat tempore
          natus neque, dolor maxime a quos! Natus voluptatum commodi consequatur
          cupiditate.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
