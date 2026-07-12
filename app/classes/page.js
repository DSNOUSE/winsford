import prisma from '@/lib/prisma'

export const revalidate = 3600

async function getClasses() {
  try {
    const classes = await prisma.class.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return classes
  } catch (error) {
    console.error('Error fetching classes:', error)
    return []
  }
}

export default async function ClassesPage() {
  const classes = await getClasses()

  const groupedByLevel = classes.reduce((acc, cls) => {
    if (!acc[cls.level]) {
      acc[cls.level] = []
    }
    acc[cls.level].push(cls)
    return acc
  }, {})

  const levelLabels = {
    nursery: 'Nursery',
    primary: 'Primary',
    secondary: 'Secondary'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
          <p className="text-xl text-blue-100">
            Explore our classes across nursery, primary, and secondary levels
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {Object.entries(groupedByLevel).map(([level, levelClasses]) => (
          <div key={level} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{levelLabels[level]}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {levelClasses.map((cls) => (
                <a
                  key={cls.id}
                  href={`/classes/${cls.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                      <p className="text-gray-600 capitalize">{level}</p>
                    </div>
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}