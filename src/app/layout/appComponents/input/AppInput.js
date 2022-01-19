const AppInput = ({ name, label, type, classes, placeholder, value, onChange }) => {
  return (
    <>
      <label className="required fw-bold fs-6 mb-2">{label}</label>
      <input
        type={type ? type : "text"}
        name={name}
        className={`form-control form-control-solid mb-3 mb-lg-0 ${classes}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

export default AppInput;