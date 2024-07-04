
function Input({ type, text, name, placeholder, handleOnChange, value, multiple }) {
  return (
    <div className="flex flex-col mb-2">
      <label className='mb-1 font-bold text-xs placeholder:text-xs' htmlFor={name}>{text}:</label>
      <input className='p-1 rounded-md'
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : '')}
      />
    </div>
  )
}

export default Input