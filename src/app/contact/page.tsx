"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar, HelpCircle, CreditCard } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [appointment, setAppointment] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Example API call
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, appointment }),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setAppointment("");
      } else {
        setStatus("❌ Failed to send. Try again later.");
      }
    } catch {
      setStatus("⚠️ Error occurred. Please try again.");
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6 pt-24 pb-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h1 className="text-4xl font-extrabold mb-6">Get in Touch</h1>
          <p className="text-gray-300 mb-6">
            Have a project in mind or want to book a consultation? Fill out the
            form, choose a date, and let’s make it happen.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-cyan-400" />
              <span>123 Web Street, Tech City, USA</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-cyan-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-cyan-400" />
              <span>contact@velosphere.com</span>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="text-cyan-400" />
                <h3 className="font-semibold">How soon do you reply?</h3>
              </div>
              <p className="text-gray-300">We typically respond within 24 hours.</p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-cyan-400" />
                <h3 className="font-semibold">Can I book a call before working with you?</h3>
              </div>
              <p className="text-gray-300">
                Yes! Use the booking section to schedule a free consultation.
              </p>
            </div>

            <div className="bg-white/10 p-4 rounded-lg border border-white/20">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard className="text-cyan-400" />
                <h3 className="font-semibold">What payment methods do you accept?</h3>
              </div>
              <p className="text-gray-300">
                We accept credit cards, PayPal, and bank transfers for your convenience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-white/20 text-white"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none text-white"
            />
            
            {/* Appointment Date Picker */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/20 rounded-lg px-4 py-3">
              <Calendar className="text-cyan-400" />
              <input
                type="date"
                name="appointment"
                value={appointment}
                onChange={(e) => setAppointment(e.target.value)}
                className="bg-transparent outline-none w-full text-white"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 outline-none text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 hover:opacity-90 transition font-semibold"
          >
            <Send size={18} /> Send Message
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-200">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
