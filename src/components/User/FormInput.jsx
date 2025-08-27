const FormInput = ({
  label,
  nameInput,
  type,
  placeHolder,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={nameInput}>{label}</label>
      <input
        type={type}
        name={nameInput}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default FormInput;
