import { Icon } from './icons'

export default function ContactCard({ icon, title, children, className = '' }) {
  return (
    <div className={`flex items-start ${className}`}>
      <Icon name={icon} className="icon-sky-blue mr-3 mt-1" size={20} />
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {children}
      </div>
    </div>
  )
}
