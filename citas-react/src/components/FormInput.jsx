export default function FormInput({
  label,
  name,
  id,
  type,
  onChange,
  placeholder,
  classes,
  required,
  value,
}) {
  //const isRequiredAndEmpty = required && value === "";

  return (
    <div className="mt-2 mb-2">
      <label htmlFor={name} className="block text-gray-700 uppercase font-bold">
        {label}
      </label>
      <input
        id={id}
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${classes} border-2 w-full p-2 placeholder-gray-400 rounded-md`}
        required={required}
      />
      {/* {isRequiredAndEmpty && <p>Este campo es requerido</p>} */}
    </div>
  );
}
