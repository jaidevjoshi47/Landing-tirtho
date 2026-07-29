import React, { useState } from 'react';
import {
  Download,
  Sparkles,
  MapPin,
  Bot,
  Clock,
  ShieldCheck,
  Compass,
  Star,
  CheckCircle2,
  ChevronRight,
  Phone,
  Heart,
  Globe,
  X,
  Search,
  Bell,
  Calendar,
  Users,
  Utensils,
  Hotel,
  Home as HomeIcon,
  Sun,
  CloudSun,
  Wind,
  Navigation,
  Headphones,
  Lock,
  Landmark,
  Ticket,
  ChevronLeft,
  Filter
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'about' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('Shegaon');
  const [guestCount, setGuestCount] = useState<string>('1 Guest');

  const apkDownloadUrl = 'https://raw.githubusercontent.com/jaidevjoshi47/Landing-tirtho/main/public/Tirtho_v1.0_Debug.apk'; // Direct high-speed GitHub Fastly CDN binary link
  
  const handleDownload = () => {
    // Triggers direct browser APK download
    const link = document.createElement('a');
    link.href = apkDownloadUrl;
    link.download = 'Tirtho_v1.0_Debug.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F97316] selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100/80 px-4 lg:px-10 py-3 shadow-[0_2px_15px_rgba(249,115,22,0.05)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
            <div>
              <span className="font-['Playfair_Display',serif] font-black text-xl sm:text-2xl text-[#0F172A] tracking-tight block leading-none">
                Tirtho
              </span>
              <span className="text-[10px] font-bold text-[#F97316] tracking-wider uppercase block mt-0.5">
                Your Guide. Your Yatra.
              </span>
            </div>
          </div>

          {/* Navigation Items (Center) */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-bold text-slate-700">
            <a href="#home" className="text-[#F97316] border-b-2 border-[#F97316] pb-1 font-extrabold transition-colors">Home</a>
            <a href="#places" className="hover:text-[#F97316] transition-colors">Explore Shegaon</a>
            <a href="#stays" className="hover:text-[#F97316] transition-colors">Stay</a>
            <a href="#food" className="hover:text-[#F97316] transition-colors">Food</a>
            <a href="#planner" className="hover:text-[#F97316] transition-colors">Routes & Itineraries</a>
            <a href="#events" className="hover:text-[#F97316] transition-colors">Events</a>
            <a href="#help" className="hover:text-[#F97316] transition-colors">Help</a>
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex items-center gap-3">
            {/* Quick Action Icons */}
            <button className="hidden sm:flex w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 items-center justify-center hover:bg-orange-50 hover:text-[#F97316] transition-all">
              <Search className="w-4 h-4" />
            </button>
            <button className="hidden sm:flex w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 items-center justify-center hover:bg-orange-50 hover:text-[#F97316] transition-all relative">
              <Heart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-[#F97316] text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">2</span>
            </button>
            <button className="hidden sm:flex w-9 h-9 rounded-full bg-slate-50 border border-slate-200 text-slate-600 items-center justify-center hover:bg-orange-50 hover:text-[#F97316] transition-all relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center">3</span>
            </button>

            {/* Login / Register / Download APK Primary Button */}
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 bg-gradient-to-r from-[#F97316] via-orange-500 to-[#EA580C] text-white font-extrabold text-xs sm:text-sm rounded-full shadow-[0_4px_16px_rgba(249,115,22,0.3)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 stroke-[2.5px]" />
              <span>Download APK</span>
            </button>
          </div>

        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative overflow-hidden pt-8 pb-16 px-4 lg:px-10 bg-gradient-to-b from-[#FFF9F2] via-[#FDFBF7] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/70 border border-orange-200/80 text-[#EA580C] text-xs font-extrabold shadow-2xs">
              <Sparkles className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
              <span>Your Spiritual Journey Starts Here</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display',serif] font-black text-[#0F172A] leading-[1.12]">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#EA580C]">Shegaon</span><br />
              Like Never Before
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tirtho is your all-in-one guide for temples, hotels, food, routes, events and everything in Shegaon.
            </p>

            {/* 3 Quick Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-3 p-3.5 bg-white border border-orange-100 rounded-2xl shadow-[0_4px_15px_rgba(249,115,22,0.04)] text-left hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#F97316] flex items-center justify-center flex-shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900">Sacred Temples</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Explore spiritual places</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white border border-orange-100 rounded-2xl shadow-[0_4px_15px_rgba(249,115,22,0.04)] text-left hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#F97316] flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900">Smart Routes</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Plan your perfect trip</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-white border border-orange-100 rounded-2xl shadow-[0_4px_15px_rgba(249,115,22,0.04)] text-left hover:border-orange-300 transition-all">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#F97316] flex items-center justify-center flex-shrink-0">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900">Stay & Food</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Best options, handpicked</p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F97316] via-orange-500 to-[#EA580C] text-white font-black text-base rounded-full shadow-[0_8px_25px_rgba(249,115,22,0.35)] hover:shadow-[0_12px_30px_rgba(249,115,22,0.45)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5 stroke-[2.5px]" />
                <span>Download Android APK (v1.0.4)</span>
              </button>

              <a
                href="#download"
                className="w-full sm:w-auto px-6 py-4 bg-white border border-slate-200 text-slate-800 font-bold text-sm rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Installation Guide</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Hero Image Column with Floating Overlay */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute w-80 h-80 bg-gradient-to-tr from-amber-300/30 to-orange-400/20 rounded-full blur-3xl -z-10" />

            {/* Main Temple Hero Frame */}
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.15)] border-4 border-white bg-white">
              <img
                src="/gajanan_temple.png"
                alt="Shri Gajanan Maharaj Temple Shegaon"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Soft Gradient Overlay at Temple Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Bottom Caption on Temple Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-md bg-[#F97316] text-[10px] font-black uppercase tracking-wider">
                  Main Darshan Mandir
                </span>
                <h3 className="font-['Playfair_Display',serif] font-black text-xl text-white">
                  Shri Gajanan Maharaj Mandir Parisar
                </h3>
                <p className="text-xs text-slate-200 font-medium">Shegaon, Buldhana District, Maharashtra</p>
              </div>

              {/* Floating Devotee Card Overlay (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-orange-100/90 rounded-2xl p-2.5 shadow-xl flex items-center gap-3 max-w-[220px] animate-float-gentle">
                <img
                  src="/bhaskar.png"
                  alt="Shri Gajanan Maharaj"
                  className="w-11 h-11 rounded-xl object-cover border-2 border-orange-300 flex-shrink-0"
                />
                <div>
                  <h4 className="font-extrabold text-xs text-slate-900 leading-tight">Shri Gajanan Maharaj</h4>
                  <p className="text-[10px] text-slate-500 font-semibold">Shegaon, Maharashtra</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-[#EA580C]">
                    <span>🌸 50K+ Devotees</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Floating Finder / Search Bar Card */}
      <section className="px-4 lg:px-10 -mt-6 sm:-mt-10 relative z-20">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-4 sm:p-6 shadow-[0_15px_45px_rgba(249,115,22,0.08)] border border-orange-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
            
            {/* Field 1: Location */}
            <div className="space-y-1 p-3 bg-slate-50/70 border border-slate-200/80 rounded-2xl hover:border-orange-300 transition-colors">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#F97316]" /> Where are you going?
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-transparent font-extrabold text-sm text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="Shegaon">Shegaon, MH</option>
                <option value="Main Temple">Mandir Parisar</option>
                <option value="Anand Sagar">Anand Sagar</option>
                <option value="Pragat Sthal">Pragat Sthal</option>
              </select>
            </div>

            {/* Field 2: Category */}
            <div className="space-y-1 p-3 bg-slate-50/70 border border-slate-200/80 rounded-2xl hover:border-orange-300 transition-colors">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#F97316]" /> Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-transparent font-extrabold text-sm text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="temple">Sacred Temples</option>
                <option value="hotel">Hotels & Lodges</option>
                <option value="food">Prasad & Pure Veg</option>
                <option value="route">Smart Routes</option>
              </select>
            </div>

            {/* Field 3: Check In - Check Out */}
            <div className="space-y-1 p-3 bg-slate-50/70 border border-slate-200/80 rounded-2xl hover:border-orange-300 transition-colors">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#F97316]" /> Check In – Check Out
              </label>
              <span className="font-extrabold text-sm text-slate-900 block cursor-pointer">
                Select Dates
              </span>
            </div>

            {/* Field 4: Guests */}
            <div className="space-y-1 p-3 bg-slate-50/70 border border-slate-200/80 rounded-2xl hover:border-orange-300 transition-colors">
              <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block flex items-center gap-1">
                <Users className="w-3 h-3 text-[#F97316]" /> Guests
              </label>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="w-full bg-transparent font-extrabold text-sm text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="1 Guest">1 Guest / Devotee</option>
                <option value="Family (2-4)">Family (2-4)</option>
                <option value="Group (5+)">Group (5+)</option>
              </select>
            </div>

            {/* Field 5: Search Button */}
            <button
              onClick={() => {
                const el = document.getElementById('places');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-black text-sm rounded-2xl shadow-[0_4px_20px_rgba(249,115,22,0.3)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 stroke-[3px]" />
              <span>Search</span>
            </button>

          </div>
        </div>
      </section>

      {/* 4. Category Filter Quick Icon Grid Row */}
      <section className="py-10 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-3 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'temples', name: 'Temples', icon: '🛕' },
              { id: 'hotels', name: 'Hotels', icon: '🏨' },
              { id: 'lodges', name: 'Lodges', icon: '🏠' },
              { id: 'restaurants', name: 'Restaurants', icon: '🍴' },
              { id: 'food', name: 'Local Food', icon: '🍱' },
              { id: 'attractions', name: 'Attractions', icon: '🎡' },
              { id: 'events', name: 'Events', icon: '📅' },
              { id: 'routes', name: 'Routes', icon: '🗺️' },
              { id: 'emergency', name: 'Emergency', icon: '🚨' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-2xl border text-xs font-extrabold transition-all active:scale-95 ${
                  selectedCategory === cat.id
                    ? 'bg-[#F97316] text-white border-[#F97316] shadow-[0_4px_15px_rgba(249,115,22,0.3)]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-orange-300 hover:bg-orange-50/50 shadow-2xs'
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Main Content Area (Popular in Shegaon + Weather & Events Sidebar) */}
      <section id="places" className="py-6 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Popular in Shegaon Cards Carousel / Grid */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#F97316] rounded-full" />
                <div>
                  <h2 className="font-['Playfair_Display',serif] font-black text-2xl sm:text-3xl text-slate-900">
                    Popular in Shegaon
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">Handpicked places and experiences for you</p>
                </div>
              </div>

              <button className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors">
                View All
              </button>
            </div>

            {/* Grid of 4 Featured Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Card 1 */}
                <div className="bg-white border border-orange-100 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(249,115,22,0.05)] hover:shadow-lg transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src="/gajanan_temple.png" alt="Shri Gajanan Maharaj Temple" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-orange-100 text-[#EA580C] text-[10px] font-black px-2.5 py-1 rounded-full border border-orange-200">
                      🛕 Temple
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                        Shri Gajanan Maharaj Temple
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Most visited temple in Shegaon</p>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="font-extrabold text-amber-500 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 <span className="text-slate-400 font-normal">(12.5K)</span>
                      </span>
                      <span className="text-[11px] font-bold text-[#F97316] bg-orange-50 px-2 py-0.5 rounded-md">
                        Main Shrine
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white border border-orange-100 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(249,115,22,0.05)] hover:shadow-lg transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src="/slide2.png" alt="Hotel Sunanda Palace" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-blue-200">
                      🏨 Hotel
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                      Hotel Sunanda Palace
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Best premium stay near temple</p>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="font-extrabold text-amber-500 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.6 <span className="text-slate-400 font-normal">(2.3K)</span>
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                        Near Temple
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-orange-100 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(249,115,22,0.05)] hover:shadow-lg transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src="/slide1.png" alt="Gajanan Prasad Thali" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-emerald-200">
                      🍱 Food
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                      Gajanan Prasad Thali
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Pure Veg • Local Favorite</p>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="font-extrabold text-amber-500 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.7 <span className="text-slate-400 font-normal">(1.8K)</span>
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                        Satvik Bhojan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white border border-orange-100 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(249,115,22,0.05)] hover:shadow-lg transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src="/slide3.png" alt="Shivaji Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-purple-200">
                      🎡 Attraction
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#F97316] transition-colors">
                      Shivaji Park & Anand Sagar
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Peaceful place for relaxation</p>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <span className="font-extrabold text-amber-500 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.5 <span className="text-slate-400 font-normal">(980)</span>
                      </span>
                      <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                        Family Favorite
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Carousel Next Button */}
              <button className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-orange-200 shadow-md text-[#F97316] items-center justify-center hover:bg-[#F97316] hover:text-white transition-all z-10">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Right Column: Weather & Upcoming Events Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Weather in Shegaon */}
            <div className="bg-white border border-orange-100 rounded-3xl p-5 shadow-[0_6px_20px_rgba(249,115,22,0.05)] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-500" />
                  <h3 className="font-extrabold text-sm text-slate-900">Weather in Shegaon</h3>
                </div>
                <span className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded">Live</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-slate-900">32°C</div>
                  <div className="text-xs text-slate-500 font-semibold flex items-center gap-1 mt-0.5">
                    <CloudSun className="w-3.5 h-3.5 text-amber-500" /> Partly Cloudy
                  </div>
                </div>

                <div className="text-right text-xs text-slate-500 space-y-0.5 font-medium">
                  <div>H: 34°C • L: 24°C</div>
                  <div className="flex items-center justify-end gap-1 text-[11px]">
                    <Wind className="w-3 h-3 text-slate-400" /> Wind: 12 km/h
                  </div>
                </div>
              </div>

              <a href="#weather" className="block text-center text-xs font-extrabold text-[#F97316] hover:underline pt-1">
                View full forecast &gt;
              </a>
            </div>

            {/* Widget 2: Upcoming Events */}
            <div className="bg-white border border-orange-100 rounded-3xl p-5 shadow-[0_6px_20px_rgba(249,115,22,0.05)] space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F97316]" /> Upcoming Events
                </h3>
                <button className="text-xs font-bold text-[#F97316] hover:underline">View All</button>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-orange-50/60 border border-orange-100 rounded-2xl">
                <img src="/bhaskar.png" alt="Gajanan Maharaj Prakat Din Utsav" className="w-12 h-12 rounded-xl object-cover border border-orange-200" />
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-xs text-slate-900 leading-tight">
                    Gajanan Maharaj Prakat Din Utsav
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold flex items-center gap-1">
                    <span>📅 23 May 2025</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Widget 3: Bhaskar AI Voice Card */}
            <div className="bg-gradient-to-br from-[#FFF9F2] to-[#FFF0E0] border border-orange-200 rounded-3xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F97316] text-white flex items-center justify-center font-bold">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900">Ask Bhaskar AI Voice</h4>
                  <p className="text-[11px] text-slate-500 font-medium">Multi-lingual Voice Assistance</p>
                </div>
              </div>

              <p className="text-xs text-slate-700 font-bold italic bg-white p-3 rounded-xl border border-orange-100">
                "Subah Kakad Aarti 5:30 AM ko hoti hai. Prasadalaya me Satvik Mahaprasad dopahar 11:30 se milta hai!"
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Trust & Security Value Pillars Bar */}
      <section className="py-10 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-50/80 via-amber-50/60 to-orange-50/80 border border-orange-200/80 rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-orange-200 text-[#F97316] flex items-center justify-center shadow-2xs flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs text-slate-900">Trusted & Verified</h4>
                <p className="text-[11px] text-slate-500 font-medium">100% verified places</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-orange-200 text-[#F97316] flex items-center justify-center shadow-2xs flex-shrink-0">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs text-slate-900">Smart Itinerary</h4>
                <p className="text-[11px] text-slate-500 font-medium">AI powered trip planning</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-orange-200 text-[#F97316] flex items-center justify-center shadow-2xs flex-shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs text-slate-900">24/7 Support</h4>
                <p className="text-[11px] text-slate-500 font-medium">We are always here</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white border border-orange-200 text-[#F97316] flex items-center justify-center shadow-2xs flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-xs text-slate-900">Secure & Safe</h4>
                <p className="text-[11px] text-slate-500 font-medium">Your safety is our priority</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. 9 Shegaon Sacred Destinations Detailed Section */}
      <section className="py-14 px-4 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#F97316] uppercase tracking-wider">
              Sacred Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-slate-900">
              9 Shegaon Places Covered in App
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Shri Gajanan Maharaj Temple', cat: 'Main Temple', desc: 'Central shrine of Maharaj with Kakad & Shej Aarti.' },
              { name: 'Pragat Sthal (Prakat Sthan)', cat: 'Sacred Site', desc: 'Holy spot of Maharaj first Pragati in 1878.' },
              { name: 'Anand Sagar', cat: 'Spiritual Park', desc: '350-acre park with lake, gardens & 6:30 PM fountain show.' },
              { name: 'Bankat Sadan', cat: 'Heritage Site', desc: 'Historic home of Bankatlal Agarwal blessed by Maharaj.' },
              { name: 'Krushnaji Patil Cha Mala & Shiv Mandir', cat: 'Temple', desc: 'Zamindar Mala with ancient Shiv Mandir.' },
              { name: 'Gajanan Maharaj Hattikhana', cat: 'Attraction', desc: 'Sansthan elephant stable for grand Shobha Yatras.' },
              { name: 'Shri Siddhapeeth Mahalaxmi Temple', cat: 'Siddhapeeth', desc: 'Balapur Road temple with 12 Jyotirling replicas.' },
              { name: 'Mauli Water Park', cat: 'Water Park', desc: 'Popular family leisure water park near Shegaon.' },
              { name: 'Shri Gomaji Maharaj Temple (Nagzari)', cat: 'Temple', desc: 'Serene samadhi shrine in Nagzari village.' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-[#FDFBF7] border border-orange-100 rounded-2xl space-y-1.5 shadow-2xs hover:border-orange-300 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F97316] bg-orange-50 px-2 py-0.5 rounded">
                    {item.cat}
                  </span>
                  <span className="text-xs text-amber-500 font-bold">⭐ 4.8+</span>
                </div>
                <h3 className="font-extrabold text-sm text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. APK Direct Download & Installation Section */}
      <section id="download" className="py-16 px-4 lg:px-10 bg-[#FFF9F2]">
        <div className="max-w-5xl mx-auto bg-white border-2 border-orange-200 rounded-[36px] p-6 sm:p-12 shadow-xl space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Official Android Release v1.0.4</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-slate-900">
              Download Tirtho App APK Free
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Click below to download the official Android APK directly to your phone and start your Shegaon Yatra!
            </p>
          </div>

          {/* Download Box */}
          <div className="bg-orange-50/60 border border-orange-200 rounded-3xl p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0">
                📱
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900">Tirtho_v1.0_Debug.apk</h3>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  Size: ~78.5 MB • Requirements: Android 7.0+ (ARM64)
                </p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F97316] via-orange-500 to-[#EA580C] text-white font-black text-sm rounded-full shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
            >
              <Download className="w-5 h-5 stroke-[2.5px]" />
              <span>Download APK File</span>
            </button>
          </div>

          {/* 3 Step Installation Instructions */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h4 className="font-black text-xs text-slate-400 uppercase tracking-wider text-center">
              How To Install APK On Your Android Phone:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 bg-slate-50/80 rounded-2xl space-y-1 border border-slate-200">
                <span className="text-xs font-black text-[#F97316] block">STEP 1</span>
                <h5 className="font-extrabold text-xs text-slate-900">Click Download APK</h5>
                <p className="text-[11px] text-slate-500 font-medium">Tap the download button above to download the file to your device downloads folder.</p>
              </div>

              <div className="p-4 bg-slate-50/80 rounded-2xl space-y-1 border border-slate-200">
                <span className="text-xs font-black text-[#F97316] block">STEP 2</span>
                <h5 className="font-extrabold text-xs text-slate-900">Allow Installation</h5>
                <p className="text-[11px] text-slate-500 font-medium">When prompted by Android browser, select "Allow from this source" / "Install Unknown Apps".</p>
              </div>

              <div className="p-4 bg-slate-50/80 rounded-2xl space-y-1 border border-slate-200">
                <span className="text-xs font-black text-[#F97316] block">STEP 3</span>
                <h5 className="font-extrabold text-xs text-slate-900">Open Tirtho & Enjoy</h5>
                <p className="text-[11px] text-slate-500 font-medium">Tap "Install" and open Tirtho to start your voice-guided Shegaon Yatra!</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. Legal Disclaimer Footer & Modals */}
      <footer className="bg-white border-t border-orange-100 py-10 px-4 lg:px-10 text-center space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-14 sm:h-16 w-auto object-contain drop-shadow-md" />
            <span className="text-xs font-black text-[#F97316] uppercase tracking-wider">Your Guide. Your Yatra.</span>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-950 font-medium leading-relaxed max-w-3xl mx-auto">
            <span className="font-black text-amber-950 block mb-1">⚖️ IMPORTANT LEGAL DISCLAIMER:</span>
            Tirtho is an independent AI-powered Yatra guide application created solely for the convenience of visiting devotees. This website and app have <strong>NO official connection, affiliation, or authorization with Shri Gajanan Maharaj Sansthan, Shegaon</strong>. All temple names and trademarks belong to their respective authorities.
          </div>

          {/* Smart Legal Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-slate-700 pt-3 border-t border-slate-100">
            <button 
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Privacy Policy</span>
            </button>

            <span className="text-slate-300">•</span>

            <button 
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>📜</span>
              <span>Terms & Conditions</span>
            </button>

            <span className="text-slate-300">•</span>

            <button 
              onClick={() => setActiveLegalModal('about')}
              className="hover:text-[#F97316] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>ℹ️</span>
              <span>About Tirtho</span>
            </button>
          </div>

          <p className="text-xs text-slate-500 font-semibold pt-2">
            © {new Date().getFullYear()} Tirtho App. Crafted with devotion for Shegaon pilgrims.
          </p>

        </div>
      </footer>

      {/* Website Legal Modals Overlay */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp text-left">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 active:scale-95 transition-all"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PRIVACY POLICY MODAL */}
            {activeLegalModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-slate-900">Privacy Policy</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">DPDP Act 2023 Compliant</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-medium">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 font-bold">
                    Effective Date: January 2026 • Last Updated: July 2026
                  </div>
                  
                  <h4 className="font-black text-slate-900 text-sm">1. Introduction & Data Protection Commitment</h4>
                  <p>
                    Tirtho ("we", "our", or "us") is dedicated to providing smart spiritual navigation for pilgrims visiting holy sites across India, starting with Shegaon, Maharashtra. We respect your privacy and are committed to protecting your personal data in full compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.
                  </p>

                  <h4 className="font-black text-slate-900 text-sm">2. Information We Collect</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Basic Profile Data:</strong> Name, Email address, and phone number (if provided for account registration).</li>
                    <li><strong>Location Data:</strong> Approximate or precise GPS location strictly used for real-time map navigation and nearest spot discovery.</li>
                    <li><strong>Usage Data:</strong> Anonymous analytics to improve app response speed and Bhaskar AI recommendations.</li>
                  </ul>

                  <h4 className="font-black text-slate-900 text-sm">3. How We Use Your Data</h4>
                  <p>
                    Your data is strictly utilized to provide live queue estimates, personalized yatra itineraries, multi-lingual AI assistance, and verified local stay/food spot recommendations. We NEVER sell or monetize user data.
                  </p>

                  <h4 className="font-black text-slate-900 text-sm">4. Contact Privacy Officer</h4>
                  <p>For any privacy queries or data deletion requests, email us at: <strong className="text-emerald-700">privacy@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS MODAL */}
            {activeLegalModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F97316] flex items-center justify-center font-black text-xl">
                    📜
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-slate-900">Terms & Conditions</h3>
                    <p className="text-xs font-bold text-[#F97316] uppercase tracking-wider">User Agreement & Service Terms</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-700 leading-relaxed font-medium">
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl text-orange-950 font-bold">
                    Please read these terms carefully before using Tirtho platform.
                  </div>

                  <h4 className="font-black text-slate-900 text-sm">1. Independent Service Disclaimer</h4>
                  <p>
                    Tirtho is an independent private technology platform designed for pilgrim welfare. We maintain no official affiliation or endorsement with Shri Gajanan Maharaj Sansthan or any government temple trust.
                  </p>

                  <h4 className="font-black text-slate-900 text-sm">2. Real-Time Information Accuracy</h4>
                  <p>
                    Crowd wait times, Prasadalaya schedules, and local transport details are estimated based on pilgrim contributions and real-time feeds. Devotees are advised to verify timings locally during peak festivals.
                  </p>

                  <h4 className="font-black text-slate-900 text-sm">3. Acceptable Code of Conduct</h4>
                  <p>
                    Users must respect local temple etiquette, cultural sanctity, and avoid posting misleading reviews or harmful content on the platform.
                  </p>

                  <h4 className="font-black text-slate-900 text-sm">4. Legal Contact</h4>
                  <p>For legal inquiries: <strong className="text-[#F97316]">legal@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* ABOUT US MODAL */}
            {activeLegalModal === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F97316] to-[#EA580C] text-white flex items-center justify-center font-['Playfair_Display',serif] font-black text-2xl shadow-md">
                    T
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-slate-900">ABOUT TIRTHO</h3>
                    <p className="text-xs font-black text-[#F97316] uppercase tracking-wider">YOUR GUIDE. YOUR YATRA.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-2xl text-amber-950 font-serif font-bold text-center text-xs">
                  "Serving Pilgrims with Devotion, Empowering Yatras with Technology."
                </div>

                <div className="space-y-3 text-xs text-slate-700 leading-relaxed font-medium">
                  <h4 className="font-black text-[#F97316] text-xs uppercase tracking-wider">🌟 OUR STORY</h4>
                  <p>
                    Every year, millions of devoted pilgrims embark on sacred journeys across India to seek blessings, peace, and spiritual fulfillment. Tirtho was born out of a deep reverence for traditional pilgrimages and a passion for modern technology. Launched initially in the holy city of Shegaon, Maharashtra (the abode of Shri Sant Gajanan Maharaj), Tirtho bridges ancient sacred traditions with modern AI navigation.
                  </p>

                  <h4 className="font-black text-[#F97316] text-xs uppercase tracking-wider">🚀 OUR MISSION & VISION</h4>
                  <p>
                    <strong>Mission:</strong> To transform and simplify the pilgrimage experience for millions of devotees by providing real-time information, AI assistance, and seamless local service discovery.<br />
                    <strong>Vision:</strong> To become India’s most trusted smart spiritual tourism platform empowering pilgrims across every sacred dham.
                  </p>

                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1 text-[11px]">
                    <p>🌐 <strong>Official Website:</strong> https://tirtho.app</p>
                    <p>✉️ <strong>General Inquiries:</strong> hello@tirtho.app / support@tirtho.app</p>
                    <p>📍 <strong>Launch Base:</strong> Shegaon, District Buldhana, Maharashtra - 444203, India.</p>
                    <p className="pt-1 font-bold text-slate-900">Designed & Developed by Jaidev Joshi.</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
