"use client";
import AdminForm from "@/components/AdminForm";

export default function AdminPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 mt-10 text-center">
          🛠️ Admin Panel
        </h1>
        <AdminForm />
      </div>
    </section>
  );
}
