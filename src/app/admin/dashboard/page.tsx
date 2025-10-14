"use client";
import { useState } from "react";
import AdminForm from "@/components/AdminForm";
import ContactQueries from "@/components/ContactQueries";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'content' | 'queries'>('queries');

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 mt-10 text-center">
          🛠️ Admin Panel
        </h1>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setActiveTab('queries')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'queries'
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              📧 Contact Queries
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'content'
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              📝 Content Management
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'queries' ? (
          <ContactQueries />
        ) : (
          <AdminForm />
        )}
      </div>
    </section>
  );
}
