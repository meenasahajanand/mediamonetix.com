import { Star } from 'lucide-react'

const Testimonials = ({ items = [] }) => {
  if (!items.length) return null
  return (
    <section className="py-12 bg-gray-50 rounded-xl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-center mb-3">
                {[...Array(t.rating || 5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">“{t.content}”</p>
              <div className="font-semibold text-gray-800">{t.name}</div>
              <div className="text-orange-500 text-sm">{t.role}{t.company ? `, ${t.company}` : ''}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials


