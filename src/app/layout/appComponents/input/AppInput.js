const AppInput = ({ name, label, type, placeholder, value, onChange, labelClasses, inputClasses }) => {
  return (
    <>
      <label className={labelClasses ? labelClasses : undefined}>{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        className={inputClasses ? inputClasses : undefined}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default AppInput;