import { useEffect, useMemo, useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import { useLocation, useNavigate } from 'react-router-dom'
import { Upload, Building2, FileText, Briefcase, CheckCircle } from 'lucide-react'
import { track } from '../utils/tracking'

const positions = [
  'Performance Marketing Manager (Paid Media)',
  'SEO & Content Lead',
  'CRO/Analytics Specialist',
  'Affiliate Partnerships Manager',
  'MarTech Engineer (Tracking/Automation)'
]

const MAX_FILE_SIZE_MB = 5
const ACCEPTED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]

const CareerApply = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const preselectedRole = useMemo(() => location.state?.role || '', [location.state])

  const [formData, setFormData] = useState({
    position: preselectedRole || '',
    fullName: '',
    email: '',
    phone: '',
    totalExperienceYears: '',
    currentlyWorking: 'no',
    currentCompany: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    message: ''
  })
  const [resumeFile, setResumeFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (preselectedRole) {
      setFormData((prev) => ({ ...prev, position: preselectedRole }))
    }
  }, [preselectedRole])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) {
      setResumeFile(null)
      return
    }
    const tooLarge = file.size > MAX_FILE_SIZE_MB * 1024 * 1024
    const badType = !ACCEPTED_TYPES.includes(file.type)
    const fileErrors = {}
    if (tooLarge) fileErrors.resume = `Max file size is ${MAX_FILE_SIZE_MB}MB`
    if (badType) fileErrors.resume = 'Allowed types: PDF, DOC, DOCX'
    setErrors((prev) => ({ ...prev, ...fileErrors }))
    if (!tooLarge && !badType) {
      setResumeFile(file)
    } else {
      setResumeFile(null)
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.position) newErrors.position = 'Please select a position'
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.totalExperienceYears.trim()) newErrors.totalExperienceYears = 'Total experience is required'
    else if (Number.isNaN(Number(formData.totalExperienceYears))) newErrors.totalExperienceYears = 'Enter a valid number'
    if (formData.currentlyWorking === 'yes' && !formData.currentCompany.trim()) newErrors.currentCompany = 'Company name is required'
    if (!formData.currentSalary.trim()) newErrors.currentSalary = 'Current salary is required'
    else if (Number.isNaN(Number(formData.currentSalary))) newErrors.currentSalary = 'Enter a valid amount'
    if (!formData.expectedSalary.trim()) newErrors.expectedSalary = 'Expected salary is required'
    else if (Number.isNaN(Number(formData.expectedSalary))) newErrors.expectedSalary = 'Enter a valid amount'
    if (!resumeFile) newErrors.resume = 'Resume is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      const payload = new FormData()
      Object.entries(formData).forEach(([k, v]) => payload.append(k, v))
      if (resumeFile) payload.append('resume', resumeFile)

      // TODO: integrate real API endpoint here
      track('apply_full_submit', { ...formData, hasResume: Boolean(resumeFile) })
      // eslint-disable-next-line no-alert
      alert('Application submitted successfully!')
      navigate('/career/career-openings')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimatedSection>
            <h1 className="text-3xl md:text-4xl font-bold">Apply for a Position</h1>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-white/90">Fill in all required fields and upload your resume.</p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position<span className="text-red-500"> *</span></label>
              <select name="position" value={formData.position} onChange={handleChange} className={`w-full rounded-lg border ${errors.position ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`}>
                <option value="">Select a position</option>
                {positions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.position && <p className="text-red-600 text-xs mt-1">{errors.position}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Experience (years)<span className="text-red-500"> *</span></label>
              <input name="totalExperienceYears" type="number" min="0" step="0.1" value={formData.totalExperienceYears} onChange={handleChange} className={`w-full rounded-lg border ${errors.totalExperienceYears ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="e.g., 4.5" />
              {errors.totalExperienceYears && <p className="text-red-600 text-xs mt-1">{errors.totalExperienceYears}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name<span className="text-red-500"> *</span></label>
              <input name="fullName" type="text" value={formData.fullName} onChange={handleChange} className={`w-full rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Your full name" />
              {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email<span className="text-red-500"> *</span></label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="you@example.com" />
              {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone<span className="text-red-500"> *</span></label>
              <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className={`w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Your phone number" />
              {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currently Working?<span className="text-red-500"> *</span></label>
              <select name="currentlyWorking" value={formData.currentlyWorking} onChange={handleChange} className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          {formData.currentlyWorking === 'yes' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Company<span className="text-red-500"> *</span></label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                <input name="currentCompany" type="text" value={formData.currentCompany} onChange={handleChange} className={`w-full pl-9 rounded-lg border ${errors.currentCompany ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="Company name" />
              </div>
              {errors.currentCompany && <p className="text-red-600 text-xs mt-1">{errors.currentCompany}</p>}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Salary (CTC)<span className="text-red-500"> *</span></label>
              <input name="currentSalary" type="number" min="0" step="0.01" value={formData.currentSalary} onChange={handleChange} className={`w-full rounded-lg border ${errors.currentSalary ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="e.g., 8.5" />
              {errors.currentSalary && <p className="text-red-600 text-xs mt-1">{errors.currentSalary}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary (CTC)<span className="text-red-500"> *</span></label>
              <input name="expectedSalary" type="number" min="0" step="0.01" value={formData.expectedSalary} onChange={handleChange} className={`w-full rounded-lg border ${errors.expectedSalary ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500`} placeholder="e.g., 12" />
              {errors.expectedSalary && <p className="text-red-600 text-xs mt-1">{errors.expectedSalary}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notice Period</label>
              <input name="noticePeriod" type="text" value={formData.noticePeriod} onChange={handleChange} className="w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="e.g., 30 days" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Resume (PDF/DOC/DOCX, max {MAX_FILE_SIZE_MB}MB)<span className="text-red-500"> *</span></label>
            <div className={`border-2 border-dashed rounded-lg p-4 flex items-center justify-between ${errors.resume ? 'border-red-500' : 'border-gray-300'}`}>
              <div className="flex items-center space-x-3">
                <Upload className="w-5 h-5 text-gray-500" />
                <div className="text-sm text-gray-600">
                  {resumeFile ? (
                    <span className="text-gray-800 font-medium">{resumeFile.name}</span>
                  ) : (
                    <span>Drag & drop or choose file</span>
                  )}
                  <div className="text-xs text-gray-400">Accepted: PDF, DOC, DOCX</div>
                </div>
              </div>
              <label className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-3 py-2 rounded-lg cursor-pointer">
                Browse
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
            {errors.resume && <p className="text-red-600 text-xs mt-1">{errors.resume}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter / Message</label>
            <div className="relative">
              <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full pl-9 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Tell us about your relevant experience and results." />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button type="button" onClick={() => navigate('/career/career-openings')} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
            <button type="submit" disabled={isSubmitting} className={`px-5 py-2 rounded-lg text-white font-semibold transition ${isSubmitting ? 'bg-orange-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>

          <div className="pt-2 text-xs text-gray-500 flex items-center space-x-2">
            <Briefcase className="w-3 h-3" />
            <span>We only use your data for recruitment and do not share it externally.</span>
          </div>

          <div className="pt-1 text-xs text-green-600 flex items-center space-x-2">
            <CheckCircle className="w-3 h-3" />
            <span>Tip: Attach a portfolio or case studies with quantified results for faster review.</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CareerApply


