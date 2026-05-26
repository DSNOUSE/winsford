import { Icon } from './icons'

export default function CheckList({ items, icon = 'check_circle', iconColor = 'icon-sky-blue' }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <Icon name={icon} className={`${iconColor} mr-3 mt-1`} size={20} />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  )
}
