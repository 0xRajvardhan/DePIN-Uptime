"use client";
import React, { useEffect, useState } from "react";
import {
  Activity,
  Bell,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Monitor Your Services with Confidence
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Get instant alerts when your services go down. Monitor uptime,
              performance, and ensure your applications are always running
              smoothly.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <button onClick={() => router.push("/dashboard")} className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-600 flex items-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => router.push("/dashboard")} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center">
                View Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              alt="Dashboard"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything you need for reliable monitoring
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              }
              title="Instant Alerts"
              description="Get notified immediately when your services experience downtime through multiple channels."
            />
            <FeatureCard
              icon={
                <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              }
              title="24/7 Monitoring"
              description="Round-the-clock monitoring from multiple locations worldwide."
            />
            <FeatureCard
              icon={
                <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              }
              title="Response Time"
              description="Monitor response times and get detailed performance metrics."
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="99.9%" label="Average Uptime" />
            <StatCard number="5000+" label="Websites Monitored" />
            <StatCard number="1.2s" label="Avg Response Time" />
            <StatCard number="24/7" label="Support Available" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 dark:bg-indigo-500 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start monitoring your services today
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust UptimeGuard for their
            monitoring needs.
          </p>
          <button onClick={() => router.push("/dashboard")} className="bg-white text-indigo-600 dark:text-indigo-500 px-8 py-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-6 w-6 text-indigo-400" />
                <span className="text-xl font-bold text-white">
                  UptimeGuard
                </span>
              </div>
              <p className="text-gray-400">
                Reliable monitoring for modern applications.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>© 2025 UptimeGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
        {number}
      </div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}

export default App;
