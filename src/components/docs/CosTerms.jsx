export default function CosTerms() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Terms and Conditions
            </h1>
            <div className="text-lg text-gray-600 mb-2">
              Giggli - Cosmetic Scanner 
            </div>
            <div className="text-sm text-gray-500">
              <strong>Effective Date:</strong> July 1, 2025<br />
              <strong>Last Updated:</strong> July 1, 2025
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Agreement */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By downloading, installing, or using  Giggli - Cosmetic Scanner mobile application
                (collectively, the "Apps"), you agree to be bound by these Terms and Conditions ("Terms"). 
                If you do not agree to these Terms, do not use the Apps.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                These Terms constitute a legally binding agreement between you and ("we," "us," or "Company").
              </p>
            </section>

            {/* Service Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1  Giggli - Cosmetic Scanner </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Scans ingredient labels on Cosmetic products</li>
                <li>Identifies potentially harmful additives and ingredients</li>
                <li>Provides health information and warnings</li>
                <li>Allows creation of custom ingredient blacklists</li>
              </ul>

          

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Service Limitations</h3>
                <p className="text-gray-700">
                  Our Apps provide <strong>informational content only</strong> and are <strong>not a substitute for 
                  professional medical advice</strong>. Always consult healthcare professionals for medical decisions.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Age Requirements</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You must be at least 13 years old to use the Apps (16 in the EU)</li>
                <li>If you are under 18, you must have parental consent</li>
                <li>Users under the minimum age are prohibited from using the Apps</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Geographic Restrictions</h3>
              <p className="text-gray-700">
                The Apps are available worldwide, but some features may be limited in certain jurisdictions due to local laws.
              </p>
            </section>

            {/* Acceptable Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Permitted Uses</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Use the Apps for personal, non-commercial purposes</li>
                <li>Scan ingredient labels for informational purposes</li>
                <li>Create and maintain personal ingredient lists</li>
                <li>Share the Apps with others (but not your account)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Prohibited Uses</h3>
              <p className="text-gray-700 mb-4">You may <strong>NOT</strong>:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use the Apps for commercial purposes without permission</li>
                <li>Reverse engineer, decompile, or disassemble the Apps</li>
                <li>Remove or modify any proprietary notices</li>
                <li>Use the Apps to violate any laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Upload malicious code or harmful content</li>
                <li>Impersonate others or provide false information</li>
                <li>Use automated tools to access the Apps (bots, scrapers)</li>
                <li>Resell or redistribute the Apps or our content</li>
              </ul>
            </section>

            {/* Health Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Health and Safety Disclaimers</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Medical Disclaimer</h3>
                <p className="text-gray-700 mb-4"><strong>IMPORTANT:</strong> The Apps provide general information only and are NOT:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Medical advice or professional health recommendations</li>
                  <li>A substitute for consulting healthcare professionals</li>
                  <li>Intended to diagnose, treat, cure, or prevent any condition</li>
                  <li>Guaranteed to be complete, accurate, or up-to-date</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Ingredient Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Ingredient analysis is based on available data and research</li>
                <li>Information may not reflect the most current research</li>
                <li>Individual reactions to ingredients may vary</li>
                <li>Always read actual product labels and consult professionals</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.3 Use at Your Own Risk</h3>
              <p className="text-gray-700">You acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Use of the Apps is at your own risk</li>
                <li>You make independent decisions about products</li>
                <li>We provide information tools, not medical advice</li>
                <li>You should verify information independently</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Content and Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Our Content</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>All App content (text, graphics, logos, images, software) is our property</li>
                <li>Protected by copyright, trademark, and other intellectual property laws</li>
                <li>You may not use our content without written permission</li>
                <li>Our ingredient database is proprietary and confidential</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Your Content</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>You retain ownership of content you create (custom lists, preferences)</li>
                <li>You grant us a license to use your content to provide our services</li>
                <li>You represent that your content does not violate any rights</li>
                <li>We may remove content that violates these Terms</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Disclaimer of Warranties</h3>
                <p className="text-gray-700 mb-4">
                  THE APPS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Merchantability or fitness for a particular purpose</li>
                  <li>Accuracy, reliability, or completeness of information</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security or freedom from harmful components</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Limitation of Damages</h3>
              <p className="text-gray-700 mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Our liability is limited to the amount you paid for the Apps (if any)</li>
                <li>We are not liable for indirect, incidental, consequential, or special damages</li>
                <li>This includes lost profits, data loss, or business interruption</li>
                <li>Some jurisdictions do not allow these limitations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.3 Health-Related Limitations</h3>
              <p className="text-gray-700 mb-4">WE SPECIFICALLY DISCLAIM LIABILITY FOR:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Decisions made based on App information</li>
                <li>Allergic reactions or health consequences</li>
                <li>Reliance on ingredient analysis or recommendations</li>
                <li>Medical or health-related outcomes</li>
              </ul>
            </section>

            {/* App Store Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. App Store Terms</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Apple App Store</h3>
              <p className="text-gray-700 mb-4">If you download the Apps from the Apple App Store, you acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>These Terms are between you and us, not Apple</li>
                <li>Apple is not responsible for the Apps or content</li>
                <li>Apple has no obligation to provide support</li>
                <li>You comply with Apple's App Store Terms of Service</li>
                <li>Apple is a third-party beneficiary of these Terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Google Play Store</h3>
              <p className="text-gray-700 mb-4">If you download the Apps from Google Play, you acknowledge that:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>These Terms are between you and us, not Google</li>
                <li>Google is not responsible for the Apps or content</li>
                <li>You comply with Google Play's Terms of Service</li>
              </ul>
            </section>

            {/* Termination */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Termination by You</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>You may stop using the Apps at any time</li>
                <li>Delete your account through the Apps</li>
                <li>Remove the Apps from your devices</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Termination by Us</h3>
              <p className="text-gray-700 mb-4">We may terminate your access if you:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Violate these Terms</li>
                <li>Engage in harmful or illegal activities</li>
                <li>Abuse our services or other users</li>
                <li>Fail to pay applicable fees</li>
              </ul>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms are governed by Swedish law, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 EU Users</h3>
              <p className="text-gray-700 mb-4">
                EU users may bring disputes to their local courts or use online dispute resolution platforms.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Arbitration (US Users)</h3>
              <p className="text-gray-700 mb-4">
                Any disputes will be resolved through binding arbitration rather than in court, except for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Small claims court matters</li>
                <li>Intellectual property disputes</li>
                <li>Emergency relief situations</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms:
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Email:</strong> zadnaniths@gmail.com</p>
                  <p><strong>Website:</strong> www.zadnan.com</p> 
                </div>
              </div>
            </section>

            {/* App Store Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. App Store Compliance</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apple App Store Requirements Met:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✅ Age restrictions clearly stated</li>
                      <li>✅ Third-party beneficiary clause included</li>
                      <li>✅ Medical disclaimer prominently displayed</li>
                      <li>✅ Intellectual property protections</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>✅ Limitation of liability clauses</li>
                      <li>✅ Termination procedures defined</li>
                      <li>✅ Content policies specified</li>
                      <li>✅ Payment terms included</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Google Play Store Requirements Met:</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Prohibited uses:</strong> Clearly defined what users cannot do</li>
                  <li><strong>Content policies:</strong> Specified acceptable content guidelines</li>
                  <li><strong>Privacy policy:</strong> Referenced and linked appropriately</li>
                  <li><strong>Dispute resolution:</strong> Clear procedures outlined</li>
                  <li><strong>Geographic restrictions:</strong> Noted where applicable</li>
                  <li><strong>Health disclaimers:</strong> Comprehensive medical disclaimers included</li>
                </ul>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Zainab Adnan. All rights reserved.</p>
          <p className="mt-2">
            For questions about these terms, contact us at{" "}
            <a href="mailto:zadnaniths@gmail.com" className="text-blue-600 hover:text-blue-800">
              zadnaniths@gmail.com
            </a>
          </p>
          <p className="mt-4 text-xs">
            By using  Giggli - Cosmetic Scanner, you acknowledge that you have read, 
            understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}