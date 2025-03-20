import React from "react";
import Head from "next/head";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Privacy Policy - Squiz Matrix Asset ID Copier</title>
        <meta name="description" content="Privacy Policy for Squiz Matrix Asset ID Copier Chrome Extension" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-2 text-blue-100">Squiz Matrix Asset ID Copier Chrome Extension</p>
          </div>

          <div className="px-6 py-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                This Privacy Policy explains how the &rdquo;Squiz Matrix Asset ID Copier&rdquo; Chrome handles user
                data. We are committed to protecting your privacy and ensuring transparency in our data practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Data Collection and Usage</h2>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">2.1 URL Analysis</h3>
                <p className="text-gray-600">
                  The Extension examines URLs of web pages you visit solely to determine if you are on a Squiz Matrix
                  admin page. This detection is based on identifying specific patterns in the URL path (such as
                  &quot;_admin&quot;) and is essential for activating the Extension&apos;s features only on relevant
                  pages.
                </p>

               
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Clipboard Interaction</h2>
              <p className="text-gray-600">
                When you use the designated keyboard shortcut while on a Squiz Matrix admin page, the extension performs
                the following actions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  <strong>Identifies the Selected Element:</strong> The extension locates the element you have selected
                  on the page.
                </li>
                <li>
                  <strong>Extracts Asset ID:</strong> It extracts the value of the{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">data-assetid</code> attribute from
                  the selected element.
                </li>
                <li>
                  <strong>Copies to Clipboard:</strong> This value is then copied to your clipboard, making it available
                  for pasting.
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                This process happens only at your explicit request through the keyboard shortcut.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Transmission</h2>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-700">
                  <strong>Important:</strong> The Extension does not collect, store, or transmit any personal data to
                  external servers.
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>All data processing occurs locally within your web browser</li>
                <li>No user tracking or browsing history collection</li>
                <li>Clipboard data is only handled momentarily during the copy operation</li>
                <li>The only stored data is your preferred keyboard shortcut setting, saved locally in your browser</li>
              </ul>
            </section>

            <section className="max-w-3xl mx-auto p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">5. Required Permissions</h2>

              <div className="bg-gray-50 rounded-xl p-6 space-y-6 shadow-sm">
                <div className="bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    storage
                  </h3>
                  <p className="text-gray-600 ml-4">
                    This allows the extension to save your preferred keyboard shortcut so you don&apos;t have to set it
                    every time.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    activeTab
                  </h3>
                  <p className="text-gray-600 ml-4">
                    This is necessary to check the URL of the current tab to determine if it&apos;s a Squiz Matrix admin
                    page, ensuring the extension only functions when needed.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    scripting
                  </h3>
                  <p className="text-gray-600 ml-4">
                    This permission enables the extension to interact with the webpage to find and copy the asset ID
                    when you activate the shortcut.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 transition-all duration-200 hover:shadow-md border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    tabs
                  </h3>
                  <p className="text-gray-600 ml-4">
                    This allows the extension to communicate with the active tab to perform the copy action.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Deletion</h2>
              <p className="text-gray-600">
                All Extension data (including your keyboard shortcut preference) is automatically removed when you
                uninstall the Extension from your browser. You can also reset your shortcut settings at any time through
                the Extension&apos;s popup interface.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Legal Compliance</h2>
              <p className="text-gray-600">
                This Privacy Policy is provided for informational purposes only and does not constitute legal advice. If
                you have specific questions about data privacy or compliance, please consult with a legal professional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
              <p className="text-gray-600">
                For questions or concerns about this Privacy Policy or the Extension&apos;s data practices, please
                contact:
              </p>
              <div className="mt-4 bg-gray-50 rounded-lg p-6">
                <p className="text-gray-900 font-medium">Abdellatif Anaflous - Developper</p>
                <div className="flex space-x-2">
                  <p className="text-gray-600">Email:</p>
                  <a href="mailto:abdellatif@anaflous.com" className="text-blue-600 hover:text-blue-800 underline">
                    abdellatif@anaflous.com
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Updates to This Policy</h2>
              <p className="text-gray-600">
                This Privacy Policy may be updated periodically. Any changes will be reflected on this page and, if
                significant changes are made, we will provide a more prominent notice.
              </p>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200 flex justify-center">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
