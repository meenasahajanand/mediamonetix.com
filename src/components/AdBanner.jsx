import { ExternalLink } from 'lucide-react'

const AdBanner = ({ title = 'Sponsored', image, href = '#', label = 'Learn More', onClick }) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md overflow-hidden">
      {image && (
        <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-32 object-cover" />
        </a>
      )}
      <div className="p-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase text-gray-500">{title}</div>
          <div className="text-sm text-gray-700">Ad space — 300x250</div>
        </div>
        <a
          href={href}
          onClick={onClick}
          target="_self"
          rel="noopener noreferrer"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
        >
          {label}
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  )
}

export default AdBanner


