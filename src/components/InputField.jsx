const InputField= ({label,type,value,onChange,required})=>{


    return (
        <div>
           <form className="myForm">
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} required={required}/>
            </form>
        </div>

    )
}

export default InputField;