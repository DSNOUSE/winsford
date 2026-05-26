export default function FormInput({ 
  label, 
  type = 'text', 
  name, 
  required = false, 
  placeholder = '', 
  className = '',
  ...props 
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent ${className}`}
        {...props}
      />
    </div>
  )
}
