export const newsItems = [
  {
    slug: '0',
    title: 'WASSCE 2024 Results: 95% Pass Rate',
    excerpt: 'Our students achieved outstanding results in the West African Senior School Certificate Examination.',
    content: 'Winsford Schools celebrates exceptional WASSCE outcomes, with 95% of candidates recording strong pass grades. This performance reflects sustained collaboration between students, teachers, and families throughout the session.',
    date: 'November 2024',
    category: 'Academics',
  },
  {
    slug: '1',
    title: 'Student Wins National Science Competition',
    excerpt: 'Congratulations to our student for winning first place in the National Science Competition.',
    content: 'Our student\'s first-place finish in the National Science Competition highlights the school\'s commitment to practical inquiry and innovation. We applaud the student and mentoring teachers for this national recognition.',
    date: 'October 2024',
    category: 'Achievements',
  },
  {
    slug: '2',
    title: 'New Computer Laboratory Commissioned',
    excerpt: 'We are excited to announce the opening of our new state-of-the-art computer laboratory.',
    content: 'The newly commissioned computer laboratory expands access to digital learning resources and supports technology-enabled instruction across multiple subject areas.',
    date: 'September 2024',
    category: 'Facilities',
  },
  {
    slug: '3',
    title: 'Annual Sports Day Success',
    excerpt: 'Another successful sports day with amazing performances from students across all levels.',
    content: 'Students showcased teamwork, resilience, and sportsmanship during our annual sports day. The event was a strong reminder of the role of athletics in holistic student development.',
    date: 'August 2024',
    category: 'Events',
  },
]

export function getNewsItem(slug) {
  return newsItems.find((item) => item.slug === slug)
}
