import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = ({
  heading = 'Ready to grow faster?',
  sub = 'Get a free strategy session and tailored quote.',
  primary = { to: '/contact', label: 'Get Started' },
  secondary = { to: '/service', label: 'See Services' },
  onPrimaryClick,
}) => {
  return (
    <section className="py-12 bg-orange-600 text-white rounded-xl">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-orange-100 mb-6">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={primary.to}
            onClick={onPrimaryClick}
            className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center justify-center"
          >
            {primary.label}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to={secondary.to}
            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-full transition duration-300"
          >
            {secondary.label}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection


