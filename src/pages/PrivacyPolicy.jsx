const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed">
                  At MediaMonetix, we collect information you provide directly to us (for example when you request a quote, subscribe, or contact support). This can include your name, company, email, phone, website URL, budget range and project details you share. 
                  We also collect certain data automatically such as device information, IP address, pages visited and interactions with our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc 
                3-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Run digital marketing campaigns (paid media, email) with your consent</li>
                  <li>Measure conversions and attribute revenue to campaigns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                  except as described in this policy. We may share your information in certain limited circumstances, such as 
                  with service providers who assist us in operating our website or conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">4. Cookies, Pixels and Analytics</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies (including pixels and tags) to operate the site, remember preferences and understand performance. We also use analytics tools (e.g., Google Analytics 4) to measure usage, and advertising platforms (e.g., Google/Meta/LinkedIn) to run campaigns and measure conversions.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>You can control cookies via your browser settings.</li>
                  <li>We may use server-side tagging or third‑party platforms for more accurate attribution.</li>
                  <li>Data is aggregated and not used to identify you personally unless you submit forms.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">5. Affiliate Links and Monetisation</h2>
                <p className="text-gray-700 leading-relaxed">
                  Some pages may contain affiliate links or promotional offers. If you click an affiliate link and make a purchase, we may receive a commission at no additional cost to you. We only recommend tools or services we believe can provide value.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">7. Your Choices</h2>
                <p className="text-gray-700 leading-relaxed">You can opt‑out of marketing communications at any time and request access, correction or deletion of your data, subject to applicable law.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">8. Legal Basis</h2>
                <p className="text-gray-700 leading-relaxed">We process personal data based on consent, contract performance, legitimate interests and/or legal obligations, depending on the context.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  privacy policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@mediamonetix.com<br />
                    <strong>Phone:</strong> +91 9033409898<br />
                    <strong>Address:</strong> 531A Upper Cross Street, #04-95 Hong Lim Complex, Singapore-051531
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
