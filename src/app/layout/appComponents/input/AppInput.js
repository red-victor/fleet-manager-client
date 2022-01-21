const AppInput = ({ name, label, type, placeholder, value, onChange, labelClasses, inputClasses, displayOnSameColon }) => {
  return (
    <>
      <label className={labelClasses ? labelClasses : undefined}>{label}</label>
      {!displayOnSameColon && 
        <input
          type={type ? type : "text"}
          name={name}
          className={inputClasses ? inputClasses : undefined}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }

      {displayOnSameColon && 
        <div className="col-lg-8 fv-row">
          <input
            type={type ? type : "text"}
            name={name}
            className={inputClasses ? inputClasses : undefined}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      }
    </>
  )
}

export default AppInput;