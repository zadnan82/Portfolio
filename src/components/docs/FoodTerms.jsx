export default function FoodTerms() {
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
              Giggli - Food Ingredients Scanner
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
            
            {/* Agreement to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By downloading, installing, or using Giggli - Food Ingredients Scanner or Cosmetics Checker mobile applications (collectively, the "Apps"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the Apps.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                These Terms constitute a legally binding agreement between you and ("we," "us," or "Company").
              </p>
            </section>

            {/* Description of Service */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Giggli - Food Ingredients Scanner</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Scans ingredient labels on food products</li>
                  <li>Identifies potentially harmful additives</li>
                  <li>Provides health information and warnings</li>
                  <li>Allows creation of custom ingredient blacklists</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Food Checker</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Scans ingredient labels on Food products</li>
                  <li>Identifies potentially harmful chemicals</li>
                  <li>Provides safety ratings and health information</li>
                  <li>Allows creation of custom ingredient blacklists</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Limitations</h3>
                <p className="text-gray-700 font-medium">
                  Our Apps provide <span className="font-bold">informational content only</span> and are <span className="font-bold">not a substitute for professional medical advice</span>. Always consult healthcare professionals for medical decisions.
                </p>
              </div>
            </section>

            {/* Eligibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Minimum age: 13 years (16 in EU)</li>
                    <li>Under 18 requires parental consent</li>
                    <li>Users under minimum age prohibited</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Geographic Restrictions</h3>
                  <p className="text-gray-700">
                    The Apps are available worldwide, but some features may be limited in certain jurisdictions due to local laws.
                  </p>
                </div>
              </div>
            </section>

            {/* Account Registration */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Account Registration</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Account Creation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>You must provide accurate information</li>
                    <li>You are responsible for account security</li>
                    <li>Notify us immediately of unauthorized access</li>
                    <li>One account per person</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Account Termination</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>You may delete your account anytime</li>
                    <li>We may suspend accounts for violations</li>
                    <li>Termination ends your right to use the Apps</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Acceptable Use</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Permitted Uses</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Personal, non-commercial use</li>
                    <li>Scanning ingredient labels</li>
                    <li>Creating personal ingredient lists</li>
                    <li>Sharing the Apps (not accounts)</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Uses</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Commercial use without permission</li>
                    <li>Reverse engineering the Apps</li>
                    <li>Removing proprietary notices</li>
                    <li>Violating laws or regulations</li>
                    <li>Unauthorized access attempts</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Health Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Health and Safety Disclaimers</h2>
              
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Disclaimer</h3>
                <p className="text-gray-700 font-medium">
                  <span className="font-bold">IMPORTANT:</span> The Apps provide general information only and are NOT:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                  <li>Medical advice or professional recommendations</li>
                  <li>A substitute for healthcare professionals</li>
                  <li>Intended to diagnose, treat, cure, or prevent conditions</li>
                  <li>Guaranteed to be complete or up-to-date</li>
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Use at Your Own Risk</h3>
                <p className="text-gray-700">
                  You acknowledge that use of the Apps is at your own risk and you should verify information independently.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Disclaimer of Warranties</h3>
                <p className="text-gray-700 mb-4">
                  THE APPS ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Limitation of Damages</h3>
                <p className="text-gray-700">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR LIABILITY IS LIMITED TO THE AMOUNT YOU PAID FOR THE APPS (IF ANY).
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. App Store Compliance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Apple App Store</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Terms are between you and us, not Apple</li>
                    <li>• Apple has no obligation for support</li>
                    <li>• You comply with Apple's Terms</li>
                    <li>• Apple is a third-party beneficiary</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Google Play Store</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Terms are between you and us, not Google</li>
                    <li>• Google is not responsible for the Apps</li>
                    <li>• You comply with Google Play Terms</li>
                  </ul>
                </div>
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
        </div>
      </div>
    </div>
  );
}