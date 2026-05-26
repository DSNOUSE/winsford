export default function FormSelect({ 
  label, 
  name, 
  options = [], 
  required = false, 
  placeholder = 'Select an option',
  className = '',
  ...props 
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <select
        name={name}
        required={required}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
