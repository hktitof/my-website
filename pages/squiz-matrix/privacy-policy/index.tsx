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
                <h3 className="text-lg font-medium text-gray-900">2.1 Website URLs</h3>
                <p className="text-gray-600">
                  The Extension examines URLs of web pages you visit solely to determine if you are on a Squiz Matrix
                  admin page. This detection is based on identifying specific patterns in the URL path (such as
                  &quot;_admin&quot;) and is essential for activating the Extension&apos;s features only on relevant
                  pages.
                </p>

                <h3 className="text-lg font-medium text-gray-900">2.2 Clipboard Data</h3>
                <p className="text-gray-600">
                  When you use the designated keyboard shortcut while on a Squiz Matrix admin page, the Extension reads
                  the &quot;asset ID&quot; of the selected element and copies it to your clipboard. This happens only at
                  your explicit request through the keyboard shortcut.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Storage and Transmission</h2>
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

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Required Permissions</h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">storage</h3>
                  <p className="text-gray-600">Required to save your keyboard shortcut preferences locally</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">activeTab</h3>
                  <p className="text-gray-600">
                    Required to access the current tab&apos;s URL for Squiz Matrix admin page detection
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">scripting</h3>
                  <p className="text-gray-600">Required to copy asset IDs from the page when requested</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">tabs</h3>
                  <p className="text-gray-600">Required to communicate with the active tab for copying functionality</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Deletion</h2>
              <p className="text-gray-600">
                All Extension data (including your keyboard shortcut preference) is automatically removed when you
                uninstall the Extension from your browser. You can also reset your shortcut settings at any time through
                the Extension&apos;s popup interface.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
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
