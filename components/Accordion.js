'use client'

import { useState } from 'react'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white border-t border-gray-200">
              <div className="prose prose-sm max-w-none text-gray-700">
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
