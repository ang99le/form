const TextAreaField= ({label,type,value,onChange,required})=>{
    
    return (
        <div>
            <form className="myForm">
            <label>{label}</label>
            <textarea type={type} value={value} onChange={onChange} required={required} rows={10} cols={30}></textarea>
            </form>
        </div>
    )
}

export default TextAreaField;