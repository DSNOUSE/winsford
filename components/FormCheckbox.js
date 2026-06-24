export default function FormCheckbox({ 
  label, 
  name, 
  required = false, 
  className = '',
  checked,
  onChange,
  ...props 
}) {
  return (
    <label className={`flex items-start ${className}`}>
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mr-3 mt-1 text-sky-blue"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <span className="text-sm text-gray-700">
        {label} {required && <span className="text-red">*</span>}
      </span>
    </label>
  )
}
