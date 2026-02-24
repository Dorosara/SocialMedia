/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, ChevronRight, Star, CheckCircle2, 
  Calendar, Download, Users, PlaySquare, 
  Mail, BarChart3, ArrowRight, Twitter, Instagram, Youtube, Linkedin
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-black tracking-tighter text-gray-900">
              Dorosara
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
            <a href="#creators" className="text-gray-600 hover:text-gray-900 font-medium">Creators</a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-900 font-medium hover:text-gray-600">Log in</a>
              <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Sign Up Free
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 font-medium">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 font-medium">Pricing</a>
            <a href="#creators" className="block px-3 py-2 text-gray-600 font-medium">Creators</a>
            <a href="#" className="block px-3 py-2 text-gray-900 font-medium">Log in</a>
            <div className="px-3 py-2">
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                Sign Up Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span>The #1 Creator Store</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
            The easiest way to make money online.
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your Dorosara Store is the only link in bio you'll ever need. Sell digital products, book calendar invites, and build your email list — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              Try 14 Days Free
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-300 transition-colors flex items-center justify-center">
              See How It Works
            </button>
          </div>
          <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500 font-medium">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Creator" referrerPolicy="no-referrer" />
              ))}
            </div>
            <p>Join 50,000+ creators making a living on Dorosara</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          {/* Phone Mockup */}
          <div className="relative mx-auto w-[320px] h-[650px] bg-gray-900 rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl w-40 mx-auto"></div>
            <div className="w-full h-full bg-gray-50 overflow-y-auto hide-scrollbar relative z-10">
              {/* Profile Header */}
              <div className="bg-white p-6 text-center border-b border-gray-100">
                <img src="https://picsum.photos/seed/creator/200/200" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" referrerPolicy="no-referrer" />
                <h3 className="text-xl font-bold text-gray-900">Sarah Jenkins</h3>
                <p className="text-gray-500 text-sm mt-1">Helping you build your dream business â¨</p>
              </div>
              
              {/* Links & Products */}
              <div className="p-4 space-y-3">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-500 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                      <Download size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Creator Starter Kit</h4>
                      <p className="text-xs text-gray-500">Free Download</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-500 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-xl text-purple-600">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">1:1 Coaching Call</h4>
                      <p className="text-xs text-gray-500">$150 / hour</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:border-blue-500 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-xl text-green-600">
                      <PlaySquare size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Masterclass Course</h4>
                      <p className="text-xs text-gray-500">$99 one-time</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-20 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3"
          >
            <div className="bg-green-100 p-2 rounded-full text-green-600">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">New Sale!</p>
              <p className="font-bold text-gray-900">$150.00</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Download className="text-blue-600" size={24} />,
      title: "Digital Downloads",
      description: "Sell ebooks, templates, and guides directly to your audience with 1-tap checkout.",
      color: "bg-blue-50"
    },
    {
      icon: <Calendar className="text-purple-600" size={24} />,
      title: "Calendar Bookings",
      description: "Sync your Google Calendar and let your audience book 1:1 calls with you.",
      color: "bg-purple-50"
    },
    {
      icon: <PlaySquare className="text-green-600" size={24} />,
      title: "Courses & Webinars",
      description: "Host your video courses and live webinars right inside your Dorosara Store.",
      color: "bg-green-50"
    },
    {
      icon: <Users className="text-orange-600" size={24} />,
      title: "Memberships",
      description: "Create recurring revenue with monthly subscriptions and exclusive content.",
      color: "bg-orange-50"
    },
    {
      icon: <Mail className="text-pink-600" size={24} />,
      title: "Email Collection",
      description: "Build your email list effortlessly with built-in lead magnets and opt-ins.",
      color: "bg-pink-50"
    },
    {
      icon: <BarChart3 className="text-indigo-600" size={24} />,
      title: "Analytics",
      description: "Track your sales, conversion rates, and traffic sources in real-time.",
      color: "bg-indigo-50"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
            Everything you need to monetize your audience.
          </h2>
          <p className="text-xl text-gray-600">
            Stop duct-taping 5 different tools together. Dorosara gives you everything you need to run your creator business in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-4">
            Loved by top creators
          </h2>
          <div className="flex justify-center items-center space-x-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Alex Hormozi",
              role: "Entrepreneur & Creator",
              image: "https://picsum.photos/seed/alex/100/100",
              quote: "Dorosara is the easiest way to monetize your audience. It's a no-brainer for any creator looking to build a real business."
            },
            {
              name: "Codie Sanchez",
              role: "Contrarian Thinking",
              image: "https://picsum.photos/seed/codie/100/100",
              quote: "I moved all my digital products to Dorosara and my conversion rate doubled overnight. The 1-tap checkout is magic."
            },
            {
              name: "Jay Clouse",
              role: "Creator Science",
              image: "https://picsum.photos/seed/jay/100/100",
              quote: "The best tool stack is the one you don't have to think about. Dorosara handles everything so I can focus on creating."
            }
          ].map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl"
            >
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400">
            Start for free, upgrade when you need more power. 0% transaction fees on all plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Creator Plan */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-2">Creator</h3>
            <p className="text-gray-400 mb-6">Everything you need to start making money.</p>
            <div className="mb-8">
              <span className="text-5xl font-black">$29</span>
              <span className="text-gray-400">/month</span>
            </div>
            <button className="w-full bg-white text-gray-900 px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors mb-8">
              Start 14-Day Free Trial
            </button>
            <ul className="space-y-4">
              {[
                "Mobile-optimized store",
                "Digital downloads",
                "Calendar bookings",
                "1-tap checkout",
                "0% transaction fees",
                "Basic analytics"
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-gray-300">
                  <CheckCircle2 className="text-blue-500 mr-3" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Creator Pro Plan */}
          <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-8 rounded-3xl border border-blue-500 relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Creator Pro</h3>
            <p className="text-blue-200 mb-6">Advanced tools to scale your business.</p>
            <div className="mb-8">
              <span className="text-5xl font-black">$99</span>
              <span className="text-blue-200">/month</span>
            </div>
            <button className="w-full bg-gray-900 text-white px-6 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors mb-8">
              Start 14-Day Free Trial
            </button>
            <ul className="space-y-4">
              {[
                "Everything in Creator",
                "Email marketing tools",
                "Advanced funnels",
                "Payment plans & subscriptions",
                "Affiliate marketing",
                "Advanced analytics & pixels"
              ].map((feature, i) => (
                <li key={i} className="flex items-center text-white">
                  <CheckCircle2 className="text-blue-300 mr-3" size={20} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Examples</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Creator Hub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-2xl font-black tracking-tighter text-gray-900">
              Dorosara
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Dorosara Store Clone. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">Instagram</span>
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">YouTube</span>
              <Youtube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

