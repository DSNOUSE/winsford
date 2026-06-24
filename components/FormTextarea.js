export default function FormTextarea({ 
  label, 
  name, 
  required = false, 
  placeholder = '', 
  rows = 4,
  className = '',
  value,
  onChange,
  ...props 
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent ${className}`}
        value={value}
        onChange={onChange}
        {...props}
      ></textarea>
    </div>
  )
}
