export default function FoodPrivacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="text-lg text-gray-600 mb-2">
              ScanMyFood & Cosmetics Checker
            </div>
            <div className="text-sm text-gray-500">
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy describes how Zainab Adnan ("we," "our," or "us") collects, uses, and shares 
                information when you use our mobile applications ScanMyFood and Cosmetics Checker (collectively, the "Apps").
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, and password when you create an account</li>
                <li><strong>User-Generated Content:</strong> Custom ingredient lists and preferences you create</li>
                <li><strong>Communications:</strong> Messages you send to us for support or feedback</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                <li><strong>Usage Data:</strong> App features used, session duration, crash reports</li>
                <li><strong>Camera/Photo Data:</strong> Images you take or select for ingredient scanning (processed locally and not stored)</li>
                <li><strong>Log Information:</strong> IP address, app version, error logs</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Information from Third Parties</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Authentication Services:</strong> If you sign in with Google or Apple, we receive basic profile information (name, email)</li>
                <li><strong>Firebase Services:</strong> Analytics and crash reporting data through Google Firebase</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and maintain our Apps' functionality</li>
                <li>Process and analyze ingredient information from images</li>
                <li>Sync your account data across devices</li>
                <li>Send important updates about our services</li>
                <li>Improve our Apps through analytics</li>
                <li>Provide customer support</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We <strong>DO NOT</strong> sell, trade, or rent your personal information. We may share information in these limited circumstances:
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Service Providers</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Google Firebase:</strong> For authentication, analytics, and crash reporting</li>
                <li><strong>Cloud Storage:</strong> For syncing your account data across devices</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-700 mb-4">We may disclose information if required by law or to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Comply with legal process</li>
                <li>Protect our rights and property</li>
                <li>Ensure user safety</li>
                <li>Investigate potential violations of our terms</li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Encryption:</strong> Data transmission is encrypted using industry-standard protocols</li>
                <li><strong>Firebase Security:</strong> We use Google Firebase's security features</li>
                <li><strong>Access Controls:</strong> Limited access to personal information on a need-to-know basis</li>
                <li><strong>Regular Security Reviews:</strong> We regularly review and update our security practices</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Account Management</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> View your account information in the Apps</li>
                <li><strong>Update:</strong> Modify your profile information at any time</li>
                <li><strong>Delete:</strong> Delete your account and associated data through the Apps</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Data Portability</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Export:</strong> Request a copy of your data by contacting us</li>
                <li><strong>Transfer:</strong> Move your custom lists between our Apps using the same account</li>
              </ul>
            </section>

            {/* Regional Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Regional Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 European Users (GDPR)</h3>
              <p className="text-gray-700 mb-4">EU/EEA residents have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Object:</strong> Object to processing of your personal data</li>
                <li><strong>Restrict:</strong> Request restriction of processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 California Residents (CCPA)</h3>
              <p className="text-gray-700 mb-4">California residents have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Know what personal information is collected</li>
                <li>Delete personal information</li>
                <li>Opt-out of the sale of personal information (we don't sell information)</li>
                <li>Non-discrimination for exercising these rights</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700">
                Our Apps are not intended for children under 13 (or 16 in the EU). We do not knowingly collect 
                personal information from children. If we become aware that we have collected personal information 
                from a child, we will delete it immediately.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our data practices:
                </p>
                <div className="text-gray-700 space-y-2">
                  <p><strong>Email:</strong> privacy@zadnan.com</p>
                  <p><strong>Website:</strong> www.zadnan.com</p>
                  <p><strong>In-App:</strong> Use the "Contact Support" feature in our Apps</p>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically. When we do, we'll post the updated policy in our Apps, 
                notify you of significant changes, and revise the "Last Updated" date. Continued use of the Apps 
                constitutes acceptance of changes.
              </p>
            </section>

            {/* App Store Compliance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. App Store Compliance</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Apple App Store Data Types We Collect:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-green-600 font-medium">✅ We Collect:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Contact Info (Email)</li>
                      <li>• User Content (Custom lists)</li>
                      <li>• Identifiers (Device ID)</li>
                      <li>• Usage Data (Analytics)</li>
                      <li>• Diagnostics (Crash reports)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-600 font-medium">❌ We Don't Collect:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Financial Info</li>
                      <li>• Location Data</li>
                      <li>• Browsing History</li>
                      <li>• Search History</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Google Play Data Safety:</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Personal Info:</strong> Email address, Name</li>
                  <li><strong>App Activity:</strong> App interactions, In-app search history</li>
                  <li><strong>App Info:</strong> Crash logs, Diagnostics</li>
                  <li><strong>Device Info:</strong> Device or other IDs</li>
                  <li><strong>Data Sharing:</strong> NO - We don't share data with third parties</li>
                  <li><strong>Data Security:</strong> YES - Data is encrypted in transit</li>
                  <li><strong>Data Deletion:</strong> YES - You can request data deletion</li>
                </ul>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Zainab Adnan. All rights reserved.</p>
          <p className="mt-2">
            For questions about this policy, contact us at{" "}
            <a href="mailto:privacy@zadnan.com" className="text-blue-600 hover:text-blue-800">
              privacy@zadnan.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}