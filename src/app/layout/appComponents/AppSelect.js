const AppSelect = ({ name, label, classes, placeholder, value, onChange, options, valueSelector }) => {
    return (
        <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">{label}</label>
            <select
                name={name}
                className={`form-control form-control-solid mb-3 mb-lg-0 ${classes ? classes : ""}`}
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
            >
                {options.map((option, i) => (
                    <option key={i} value={i}>{option}</option>
                ))}

            </select>
        </div>
    )
}

export default AppSelect;