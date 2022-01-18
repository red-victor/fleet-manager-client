const AppDate = ({ name, label, classes, placeholder, value, onChange }) => {
    return (
        <div className="fv-row mb-7">
            <label className="required fw-bold fs-6 mb-2">{label}</label>
            <input
                type="date"
                name={name}
                className={`form-control form-control-solid mb-3 mb-lg-0 ${classes}`}
                // placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default AppDate;