import FormSelect from './FormSelect'

export const GRADE_OPTIONS = [
  { value: 'primary1', label: 'Primary 1' },
  { value: 'primary2', label: 'Primary 2' },
  { value: 'primary3', label: 'Primary 3' },
  { value: 'primary4', label: 'Primary 4' },
  { value: 'primary5', label: 'Primary 5' },
  { value: 'primary6', label: 'Primary 6' },
  { value: 'jss1', label: 'JSS 1' },
  { value: 'jss2', label: 'JSS 2' },
  { value: 'jss3', label: 'JSS 3' },
  { value: 'sss1', label: 'SSS 1' },
  { value: 'sss2', label: 'SSS 2' },
  { value: 'sss3', label: 'SSS 3' },
]

export default function GradeSelect({ label = "Student's Current Grade/Class", name = 'grade', required = false, value, onChange, ...props }) {
  return (
    <FormSelect
      label={label}
      name={name}
      options={GRADE_OPTIONS}
      required={required}
      placeholder="Select grade"
      value={value}
      onChange={onChange}
      {...props}
    />
  )
}
