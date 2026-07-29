import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Bell,
  Calendar,
  Sun,
  CloudSun,
  Wind,
  Navigation,
  Headphones,
  Lock,
  Landmark,
  Hotel,
  Volume2,
  MessageSquare,
  Zap,
  Check,
  Eye
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'about' | null>(null);
  const [bhaskarState, setBhaskarState] = useState<'greeting' | 'talking' | 'thinking' | 'idle'>('greeting');
  const [activePlaceIndex, setActivePlaceIndex] = useState<number>(0);

  const apkDownloadUrl = '/Tirtho_v1.0_Debug.apk'; // Direct relative link to hosted APK asset
  
  const handleDownload = () => {
    // Triggers direct browser APK download
    const link = document.createElement('a');
    link.href = apkDownloadUrl;
    link.download = 'Tirtho_v1.0_Debug.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Bhaskar AI state dialogue text
  const getBhaskarDialogue = () => {
    switch (bhaskarState) {
      case 'greeting':
        return '“Jai Gajanan! 🙏 Main Bhaskar AI hoon. Shegaon Yatra mein aapki kya sahayata karoon?”';
      case 'talking':
        return '“Subah Kakad Aarti 5:30 AM ko hoti hai. Sansthan Prasadalaya mein 11:30 AM se Mahaprasad shuru hota hai!”';
      case 'thinking':
        return '“Aapke liye sabse kam crowd wala darshan time calculate kar raha hoon... ⏳”';
      case 'idle':
        return '“Anand Sagar fountain show shaam 6:30 PM ko shuru hota hai. Abhi plan banayein!”';
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#163A6B] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F7941D] selection:text-white relative overflow-hidden">
      
      {/* Cinematic Sunlight Ray Sweep Ambient Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#F4B400]/15 via-[#F7941D]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-sunbeam" />
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF7EB] via-[#F7941D]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Ambient Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#F4B400]/30 blur-[1px]"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-rise ${8 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* 1. Header Navigation Bar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
        className="sticky top-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#F7941D]/20 px-4 lg:px-10 py-3 shadow-[0_4px_20px_rgba(247,148,29,0.06)]"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-10 w-auto object-contain drop-shadow-sm" />
            <div>
              <span className="font-['Playfair_Display',serif] font-black text-xl sm:text-2xl text-[#163A6B] tracking-tight block leading-none">
                Tirtho
              </span>
              <span className="text-[10px] font-extrabold text-[#F7941D] tracking-wider uppercase block mt-0.5">
                Your Guide. Your Yatra.
              </span>
            </div>
          </div>

          {/* Original Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-extrabold text-[#163A6B]">
            <a href="#features" className="relative group py-1">
              <span className="group-hover:text-[#F7941D] transition-colors">Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a href="#places" className="relative group py-1">
              <span className="group-hover:text-[#F7941D] transition-colors">Tourist Spots</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a href="#planner" className="relative group py-1">
              <span className="group-hover:text-[#F7941D] transition-colors">AI Trip Planner</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a href="#download" className="relative group py-1">
              <span className="group-hover:text-[#F7941D] transition-colors">Download APK</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F7941D] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          </div>

          {/* Action Buttons (Right) */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownload}
              className="px-5 py-2.5 bg-gradient-to-r from-[#F7941D] to-[#E66A00] text-white font-black text-xs sm:text-sm rounded-full shadow-[0_4px_16px_rgba(247,148,29,0.35)] hover:shadow-[0_6px_20px_rgba(230,106,0,0.45)] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 stroke-[2.5px]" />
              <span>Download APK</span>
            </motion.button>
          </div>

        </div>
      </motion.nav>

      {/* 2. Hero Section */}
      <section id="home" className="relative overflow-hidden pt-10 pb-16 px-4 lg:px-10 bg-gradient-to-b from-[#FFF7EB] via-[#FFFDF9] to-[#FFFDF9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Badge Pill */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7EB] border border-[#F7941D]/40 text-[#E66A00] text-xs font-black shadow-2xs cursor-default"
            >
              <Sparkles className="w-4 h-4 fill-[#F4B400] text-[#F4B400] animate-pulse" />
              <span>Your Spiritual Journey Starts Here</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display',serif] font-black text-[#163A6B] leading-[1.12]">
              Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F7941D] via-[#E66A00] to-[#F4B400]">Shegaon</span><br />
              Like Never Before
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#2F5F9F] font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Tirtho is your all-in-one guide for temples, hotels, food, routes, events and everything in Shegaon.
            </p>

            {/* 3 Quick Highlight Cards with 3D Lift */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { icon: Landmark, title: 'Sacred Temples', desc: 'Explore spiritual places' },
                { icon: Navigation, title: 'Smart Routes', desc: 'Plan your perfect trip' },
                { icon: Hotel, title: 'Stay & Food', desc: 'Best options, handpicked' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3 p-3.5 bg-[#FFFFFF] border border-[#F7941D]/20 rounded-2xl shadow-[0_4px_15px_rgba(247,148,29,0.06)] text-left hover:border-[#F7941D] transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF7EB] border border-[#F7941D]/30 text-[#F7941D] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs text-[#163A6B]">{item.title}</h4>
                    <p className="text-[11px] text-[#2F5F9F] font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 12px 35px rgba(230,106,0,0.45)' }}
                whileTap={{ scale: 0.96 }}
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F7941D] via-[#E66A00] to-[#F7941D] text-white font-black text-base rounded-full shadow-[0_8px_25px_rgba(247,148,29,0.4)] transition-all flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5 stroke-[2.5px]" />
                <span>Download Android APK (v1.0.4)</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02, backgroundColor: '#FFF7EB' }}
                whileTap={{ scale: 0.96 }}
                href="#download"
                className="w-full sm:w-auto px-6 py-4 bg-[#FFFFFF] border border-[#2F5F9F]/30 text-[#163A6B] font-extrabold text-sm rounded-full transition-all flex items-center justify-center gap-2 shadow-2xs"
              >
                <span>Installation Guide</span>
                <ChevronRight className="w-4 h-4 text-[#F7941D]" />
              </motion.a>
            </div>

            {/* Live Devotee Stat Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-3 text-xs font-extrabold text-[#163A6B]">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-[#F4B400] text-[#F4B400]" />
                <span>4.9 / 5 Devotee Rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#2F5F9F]" />
                <span>Hindi • Marathi • English</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Free & Safe</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Image Column with Floating Overlay & Parallax Layers */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center card-perspective"
          >
            
            {/* Main Temple Hero Frame with Subtle 3D Tilt */}
            <div className="tilt-inner relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(247,148,29,0.18)] border-4 border-[#FFFFFF] bg-[#FFFFFF]">
              <img
                src="/gajanan_temple.png"
                alt="Shri Gajanan Maharaj Temple Shegaon"
                className="w-full h-[360px] sm:h-[430px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Soft Gradient Overlay at Temple Base */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163A6B]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption on Temple Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-md bg-[#F7941D] text-[10px] font-black uppercase tracking-wider text-white">
                  Main Darshan Mandir
                </span>
                <h3 className="font-['Playfair_Display',serif] font-black text-xl text-white">
                  Shri Gajanan Maharaj Mandir Parisar
                </h3>
                <p className="text-xs text-[#FFF7EB] font-medium">Shegaon, Buldhana District, Maharashtra</p>
              </div>

              {/* Floating Devotee Card Overlay (Top Right) */}
              <motion.div 
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#F7941D]/30 rounded-2xl p-2.5 shadow-xl flex items-center gap-3 max-w-[220px]"
              >
                <img
                  src="/bhaskar.png"
                  alt="Shri Gajanan Maharaj"
                  className="w-11 h-11 rounded-xl object-cover border-2 border-[#F4B400] flex-shrink-0 animate-avatar-breath"
                />
                <div>
                  <h4 className="font-extrabold text-xs text-[#163A6B] leading-tight">Shri Gajanan Maharaj</h4>
                  <p className="text-[10px] text-[#2F5F9F] font-semibold">Shegaon, Maharashtra</p>
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-black text-[#E66A00]">
                    <span>🌸 50K+ Devotees</span>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. Interactive Bhaskar AI Voice Guide Showcase (New Motion Feature) */}
      <section className="py-12 px-4 lg:px-10 bg-[#FFF7EB] border-y border-[#F7941D]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
            <span className="text-xs font-black text-[#F7941D] uppercase tracking-wider">
              AI Voice Companion
            </span>
            <h2 className="text-3xl font-['Playfair_Display',serif] font-black text-[#163A6B]">
              Meet Bhaskar AI Guide
            </h2>
            <p className="text-sm text-[#2F5F9F] font-medium leading-relaxed">
              Experience natural multi-lingual voice guidance in Hindi, Marathi & English for Aarti timings, Prasadalaya, and temple history.
            </p>

            {/* Interactive Motion State Toggles */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              {[
                { id: 'greeting', label: '👋 Greeting (Namaste)' },
                { id: 'talking', label: '🗣️ Talking Mode' },
                { id: 'thinking', label: '🤔 Thinking State' },
                { id: 'idle', label: '🧘 Idle Breathing' }
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setBhaskarState(st.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-extrabold transition-all active:scale-95 ${
                    bhaskarState === st.id
                      ? 'bg-[#F7941D] text-white shadow-sm'
                      : 'bg-[#FFFFFF] text-[#163A6B] border border-[#F7941D]/20 hover:bg-[#FFFDF9]'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Avatar Speech Card */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#F7941D]/30 rounded-3xl p-6 shadow-[0_10px_30px_rgba(247,148,29,0.08)] flex flex-col sm:flex-row items-center gap-6">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#F4B400] shadow-md relative">
                <img src="/bhaskar.png" alt="Bhaskar AI Avatar" className="w-full h-full object-cover animate-avatar-breath" />
                <div className="absolute inset-0 animate-avatar-blink pointer-events-none" />
              </div>
              <span className="absolute -bottom-2 right-0 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" /> Live AI
              </span>
            </div>

            <div className="space-y-3 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="font-extrabold text-base text-[#163A6B]">Bhaskar AI Voice Assistant</h3>
                <span className="text-xs text-[#F7941D] bg-[#FFF7EB] px-2 py-0.5 rounded-md font-extrabold">
                  {bhaskarState.toUpperCase()}
                </span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={bhaskarState}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-[#163A6B] font-bold italic bg-[#FFF7EB] p-4 rounded-2xl border border-[#F7941D]/30 shadow-2xs leading-relaxed"
                >
                  {getBhaskarDialogue()}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Core Features Grid with Scroll Reveal */}
      <section id="features" className="py-16 px-4 lg:px-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3 max-w-2xl mx-auto"
          >
            <span className="text-xs font-black text-[#F7941D] uppercase tracking-wider">
              Smart Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-[#163A6B]">
              Everything You Need For A Peaceful Yatra
            </h2>
            <p className="text-sm text-[#2F5F9F] font-medium">
              Designed specifically for devotees, families, and solo travelers visiting Shegaon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: 'Bhaskar AI Voice Assistant', desc: 'Ask questions about Aarti timings, temple rules, satvik prasad, or local routes in voice in Hindi, Marathi & English!' },
              { icon: Clock, title: 'Live Crowd & Queue Wait Time', desc: 'Check live waiting time and queue density before heading for Darshan so you can plan the best time for your family.' },
              { icon: Compass, title: '1-Tap & Custom Yatra Planner', desc: 'Generate an express 1-day yatra plan or type your custom sequence. AI creates your exact turn-by-turn route!' },
              { icon: MapPin, title: 'Live Map Navigation', desc: 'Get GPS navigation for all 9 sacred places in Shegaon including Pragat Sthal, Anand Sagar, and Siddhapeeth Mahalaxmi Temple.' },
              { icon: Sparkles, title: 'Prasadalaya & Satvik Food Finder', desc: 'Find Sansthan Mahaprasad timings, pure satvik food spots, and hygienic dining options near the temple premises.' },
              { icon: ShieldCheck, title: '100% Independent & Free', desc: 'Completely free app created for devotees. Zero ads, zero hidden costs, and simple to use for senior citizens.' }
            ].map((ft, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 bg-[#FFFDF9] border border-[#F7941D]/20 rounded-3xl space-y-4 hover:shadow-[0_15px_35px_rgba(247,148,29,0.12)] hover:border-[#F7941D] transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFF7EB] border border-[#F7941D]/30 text-[#F7941D] flex items-center justify-center shadow-2xs">
                  <ft.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-['Playfair_Display',serif] font-black text-[#163A6B]">{ft.title}</h3>
                <p className="text-xs text-[#2F5F9F] leading-relaxed font-medium">{ft.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Popular in Shegaon & Weather / Events Section */}
      <section id="places" className="py-12 px-4 lg:px-10 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Popular in Shegaon Cards Grid */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#F7941D] rounded-full" />
                <div>
                  <h2 className="font-['Playfair_Display',serif] font-black text-2xl sm:text-3xl text-[#163A6B]">
                    Popular in Shegaon
                  </h2>
                  <p className="text-xs text-[#2F5F9F] font-medium">Handpicked places and experiences for you</p>
                </div>
              </div>
            </div>

            {/* Grid of 4 Featured Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(247,148,29,0.06)] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src="/gajanan_temple.png" alt="Shri Gajanan Maharaj Temple" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 bg-[#FFF7EB] text-[#E66A00] text-[10px] font-black px-2.5 py-1 rounded-full border border-[#F7941D]/30">
                    🛕 Temple
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-sm text-[#163A6B] group-hover:text-[#F7941D] transition-colors">
                    Shri Gajanan Maharaj Temple
                  </h3>
                  <p className="text-xs text-[#2F5F9F] font-medium">Most visited temple in Shegaon</p>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="font-extrabold text-[#F4B400] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]" /> 4.9 <span className="text-[#2F5F9F]/70 font-normal">(12.5K)</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-[#F7941D] bg-[#FFF7EB] px-2 py-0.5 rounded-md">
                      Main Shrine
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(247,148,29,0.06)] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src="/slide2.png" alt="Hotel Sunanda Palace" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 bg-blue-50 text-[#2F5F9F] text-[10px] font-black px-2.5 py-1 rounded-full border border-blue-200">
                    🏨 Hotel
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-sm text-[#163A6B] group-hover:text-[#F7941D] transition-colors">
                    Hotel Sunanda Palace
                  </h3>
                  <p className="text-xs text-[#2F5F9F] font-medium">Best premium stay near temple</p>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="font-extrabold text-[#F4B400] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]" /> 4.6 <span className="text-[#2F5F9F]/70 font-normal">(2.3K)</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Near Temple
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(247,148,29,0.06)] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src="/slide1.png" alt="Gajanan Prasad Thali" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 bg-emerald-50 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-emerald-200">
                    🍱 Food
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-sm text-[#163A6B] group-hover:text-[#F7941D] transition-colors">
                    Gajanan Prasad Thali
                  </h3>
                  <p className="text-xs text-[#2F5F9F] font-medium">Pure Veg • Local Favorite</p>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="font-extrabold text-[#F4B400] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]" /> 4.7 <span className="text-[#2F5F9F]/70 font-normal">(1.8K)</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-[#E66A00] bg-[#FFF7EB] px-2 py-0.5 rounded-md">
                      Satvik Bhojan
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl overflow-hidden shadow-[0_6px_20px_rgba(247,148,29,0.06)] hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src="/slide3.png" alt="Shivaji Park" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 bg-purple-50 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full border border-purple-200">
                    🎡 Attraction
                  </span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-extrabold text-sm text-[#163A6B] group-hover:text-[#F7941D] transition-colors">
                    Shivaji Park & Anand Sagar
                  </h3>
                  <p className="text-xs text-[#2F5F9F] font-medium">Peaceful place for relaxation</p>
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="font-extrabold text-[#F4B400] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]" /> 4.5 <span className="text-[#2F5F9F]/70 font-normal">(980)</span>
                    </span>
                    <span className="text-[11px] font-extrabold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                      Family Favorite
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Right Column: Weather & Upcoming Events Widgets */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Widget 1: Weather in Shegaon */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl p-5 shadow-[0_6px_20px_rgba(247,148,29,0.05)] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#FFF7EB] pb-3">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-[#F4B400] animate-spin" style={{ animationDuration: '15s' }} />
                  <h3 className="font-extrabold text-sm text-[#163A6B]">Weather in Shegaon</h3>
                </div>
                <span className="text-[10px] font-extrabold bg-[#FFF7EB] text-[#E66A00] px-2 py-0.5 rounded">Live</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-[#163A6B]">32°C</div>
                  <div className="text-xs text-[#2F5F9F] font-semibold flex items-center gap-1 mt-0.5">
                    <CloudSun className="w-3.5 h-3.5 text-[#F4B400]" /> Partly Cloudy
                  </div>
                </div>

                <div className="text-right text-xs text-[#2F5F9F] space-y-0.5 font-medium">
                  <div>H: 34°C • L: 24°C</div>
                  <div className="flex items-center justify-end gap-1 text-[11px]">
                    <Wind className="w-3 h-3 text-[#2F5F9F]" /> Wind: 12 km/h
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Widget 2: Upcoming Events */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-[#FFFFFF] border border-[#F7941D]/20 rounded-3xl p-5 shadow-[0_6px_20px_rgba(247,148,29,0.05)] space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[#FFF7EB] pb-3">
                <h3 className="font-extrabold text-sm text-[#163A6B] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#F7941D]" /> Upcoming Events
                </h3>
              </div>

              <div className="flex items-center gap-3 p-2.5 bg-[#FFF7EB] border border-[#F7941D]/30 rounded-2xl">
                <img src="/bhaskar.png" alt="Gajanan Maharaj Prakat Din Utsav" className="w-12 h-12 rounded-xl object-cover border border-[#F4B400]" />
                <div className="space-y-0.5">
                  <h4 className="font-extrabold text-xs text-[#163A6B] leading-tight">
                    Gajanan Maharaj Prakat Din Utsav
                  </h4>
                  <p className="text-[11px] text-[#2F5F9F] font-semibold flex items-center gap-1">
                    <span>📅 23 May 2025</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 6. Trust & Security Value Pillars Bar */}
      <section className="py-10 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto bg-[#FFF7EB] border border-[#F7941D]/30 rounded-3xl p-6 sm:p-8 shadow-2xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Trusted & Verified', desc: '100% verified places' },
              { icon: Navigation, title: 'Smart Itinerary', desc: 'AI powered trip planning' },
              { icon: Headphones, title: '24/7 Support', desc: 'We are always here' },
              { icon: Lock, title: 'Secure & Safe', desc: 'Your safety is our priority' }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#FFFFFF] border border-[#F7941D]/30 text-[#F7941D] flex items-center justify-center shadow-2xs flex-shrink-0">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-[#163A6B]">{pillar.title}</h4>
                  <p className="text-[11px] text-[#2F5F9F] font-medium">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 9 Shegaon Sacred Destinations Detailed Section */}
      <section id="planner" className="py-14 px-4 lg:px-10 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#F7941D] uppercase tracking-wider">
              Sacred Destinations
            </span>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-[#163A6B]">
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
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.01 }}
                className="p-4 bg-[#FFFDF9] border border-[#F7941D]/20 rounded-2xl space-y-1.5 shadow-2xs hover:border-[#F7941D] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#F7941D] bg-[#FFF7EB] px-2 py-0.5 rounded">
                    {item.cat}
                  </span>
                  <span className="text-xs text-[#F4B400] font-bold">⭐ 4.8+</span>
                </div>
                <h3 className="font-extrabold text-sm text-[#163A6B]">{item.name}</h3>
                <p className="text-xs text-[#2F5F9F] font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. APK Direct Download & Installation Section */}
      <section id="download" className="py-16 px-4 lg:px-10 bg-[#FFF7EB]">
        <div className="max-w-5xl mx-auto bg-[#FFFFFF] border-2 border-[#F7941D]/40 rounded-[36px] p-6 sm:p-12 shadow-xl space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Official Android Release v1.0.4</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-black text-[#163A6B]">
              Download Tirtho App APK Free
            </h2>
            <p className="text-sm text-[#2F5F9F] font-medium">
              Click below to download the official Android APK directly to your phone and start your Shegaon Yatra!
            </p>
          </div>

          {/* Download Box */}
          <div className="bg-[#FFF7EB] border border-[#F7941D]/30 rounded-3xl p-6 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#E66A00] text-white flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0">
                📱
              </div>
              <div>
                <h3 className="font-extrabold text-base text-[#163A6B]">Tirtho_v1.0_Debug.apk</h3>
                <p className="text-xs text-[#2F5F9F] font-semibold mt-0.5">
                  Size: ~78.5 MB • Requirements: Android 7.0+ (ARM64)
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(230,106,0,0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#F7941D] via-[#E66A00] to-[#F7941D] text-white font-black text-sm rounded-full shadow-[0_6px_20px_rgba(247,148,29,0.4)] transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              <Download className="w-5 h-5 stroke-[2.5px]" />
              <span>Download APK File</span>
            </motion.button>
          </div>

          {/* 3 Step Installation Instructions */}
          <div className="space-y-4 pt-4 border-t border-[#FFF7EB]">
            <h4 className="font-black text-xs text-[#2F5F9F] uppercase tracking-wider text-center">
              How To Install APK On Your Android Phone:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 bg-[#FFFDF9] rounded-2xl space-y-1 border border-[#F7941D]/20">
                <span className="text-xs font-black text-[#F7941D] block">STEP 1</span>
                <h5 className="font-extrabold text-xs text-[#163A6B]">Click Download APK</h5>
                <p className="text-[11px] text-[#2F5F9F] font-medium">Tap the download button above to download the file to your device downloads folder.</p>
              </div>

              <div className="p-4 bg-[#FFFDF9] rounded-2xl space-y-1 border border-[#F7941D]/20">
                <span className="text-xs font-black text-[#F7941D] block">STEP 2</span>
                <h5 className="font-extrabold text-xs text-[#163A6B]">Allow Installation</h5>
                <p className="text-[11px] text-[#2F5F9F] font-medium">When prompted by Android browser, select "Allow from this source" / "Install Unknown Apps".</p>
              </div>

              <div className="p-4 bg-[#FFFDF9] rounded-2xl space-y-1 border border-[#F7941D]/20">
                <span className="text-xs font-black text-[#F7941D] block">STEP 3</span>
                <h5 className="font-extrabold text-xs text-[#163A6B]">Open Tirtho & Enjoy</h5>
                <p className="text-[11px] text-[#2F5F9F] font-medium">Tap "Install" and open Tirtho to start your voice-guided Shegaon Yatra!</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. Legal Disclaimer Footer & Modals */}
      <footer className="bg-[#FFFFFF] border-t border-[#F7941D]/20 py-10 px-4 lg:px-10 text-center space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-14 sm:h-16 w-auto object-contain drop-shadow-md" />
            <span className="text-xs font-black text-[#F7941D] uppercase tracking-wider">Your Guide. Your Yatra.</span>
          </div>

          <div className="p-4 bg-[#FFF7EB] border border-[#F7941D]/30 rounded-2xl text-xs text-[#163A6B] font-medium leading-relaxed max-w-3xl mx-auto">
            <span className="font-black text-[#E66A00] block mb-1">⚖️ IMPORTANT LEGAL DISCLAIMER:</span>
            Tirtho is an independent AI-powered Yatra guide application created solely for the convenience of visiting devotees. This website and app have <strong>NO official connection, affiliation, or authorization with Shri Gajanan Maharaj Sansthan, Shegaon</strong>. All temple names and trademarks belong to their respective authorities.
          </div>

          {/* Smart Legal Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-[#163A6B] pt-3 border-t border-[#FFF7EB]">
            <button 
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Privacy Policy</span>
            </button>

            <span className="text-[#2F5F9F]/40">•</span>

            <button 
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>📜</span>
              <span>Terms & Conditions</span>
            </button>

            <span className="text-[#2F5F9F]/40">•</span>

            <button 
              onClick={() => setActiveLegalModal('about')}
              className="hover:text-[#F7941D] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>ℹ️</span>
              <span>About Tirtho</span>
            </button>
          </div>

          <p className="text-xs text-[#2F5F9F] font-semibold pt-2">
            © {new Date().getFullYear()} Tirtho App. Crafted with devotion for Shegaon pilgrims.
          </p>

        </div>
      </footer>

      {/* Website Legal Modals Overlay */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-[#163A6B]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#FFFFFF] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto no-scrollbar p-6 sm:p-8 space-y-6 shadow-2xl relative text-left border border-[#F7941D]/20"
          >
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FFF7EB] text-[#163A6B] flex items-center justify-center hover:bg-[#F7941D] hover:text-white active:scale-95 transition-all"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PRIVACY POLICY MODAL */}
            {activeLegalModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#FFF7EB] pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-[#163A6B]">Privacy Policy</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">DPDP Act 2023 Compliant</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-[#2F5F9F] leading-relaxed font-medium">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 font-bold">
                    Effective Date: January 2026 • Last Updated: July 2026
                  </div>
                  
                  <h4 className="font-black text-[#163A6B] text-sm">1. Introduction & Data Protection Commitment</h4>
                  <p>
                    Tirtho ("we", "our", or "us") is dedicated to providing smart spiritual navigation for pilgrims visiting holy sites across India, starting with Shegaon, Maharashtra. We respect your privacy and are committed to protecting your personal data in full compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.
                  </p>

                  <h4 className="font-black text-[#163A6B] text-sm">2. Information We Collect</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Basic Profile Data:</strong> Name, Email address, and phone number (if provided for account registration).</li>
                    <li><strong>Location Data:</strong> Approximate or precise GPS location strictly used for real-time map navigation and nearest spot discovery.</li>
                    <li><strong>Usage Data:</strong> Anonymous analytics to improve app response speed and Bhaskar AI recommendations.</li>
                  </ul>

                  <h4 className="font-black text-[#163A6B] text-sm">3. How We Use Your Data</h4>
                  <p>
                    Your data is strictly utilized to provide live queue estimates, personalized yatra itineraries, multi-lingual AI assistance, and verified local stay/food spot recommendations. We NEVER sell or monetize user data.
                  </p>

                  <h4 className="font-black text-[#163A6B] text-sm">4. Contact Privacy Officer</h4>
                  <p>For any privacy queries or data deletion requests, email us at: <strong className="text-emerald-700">privacy@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS MODAL */}
            {activeLegalModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#FFF7EB] pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF7EB] text-[#F7941D] flex items-center justify-center font-black text-xl border border-[#F7941D]/30">
                    📜
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-[#163A6B]">Terms & Conditions</h3>
                    <p className="text-xs font-bold text-[#F7941D] uppercase tracking-wider">User Agreement & Service Terms</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-[#2F5F9F] leading-relaxed font-medium">
                  <div className="p-3 bg-[#FFF7EB] border border-[#F7941D]/30 rounded-2xl text-[#E66A00] font-bold">
                    Please read these terms carefully before using Tirtho platform.
                  </div>

                  <h4 className="font-black text-[#163A6B] text-sm">1. Independent Service Disclaimer</h4>
                  <p>
                    Tirtho is an independent private technology platform designed for pilgrim welfare. We maintain no official affiliation or endorsement with Shri Gajanan Maharaj Sansthan or any government temple trust.
                  </p>

                  <h4 className="font-black text-[#163A6B] text-sm">2. Real-Time Information Accuracy</h4>
                  <p>
                    Crowd wait times, Prasadalaya schedules, and local transport details are estimated based on pilgrim contributions and real-time feeds. Devotees are advised to verify timings locally during peak festivals.
                  </p>

                  <h4 className="font-black text-[#163A6B] text-sm">3. Acceptable Code of Conduct</h4>
                  <p>
                    Users must respect local temple etiquette, cultural sanctity, and avoid posting misleading reviews or harmful content on the platform.
                  </p>

                  <h4 className="font-black text-[#163A6B] text-sm">4. Legal Contact</h4>
                  <p>For legal inquiries: <strong className="text-[#F7941D]">legal@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* ABOUT US MODAL */}
            {activeLegalModal === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-[#FFF7EB] pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#F7941D] to-[#E66A00] text-white flex items-center justify-center font-['Playfair_Display',serif] font-black text-2xl shadow-md">
                    T
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-xl text-[#163A6B]">ABOUT TIRTHO</h3>
                    <p className="text-xs font-black text-[#F7941D] uppercase tracking-wider">YOUR GUIDE. YOUR YATRA.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-gradient-to-r from-[#FFF7EB] via-[#FFFDF9] to-[#FFF7EB] border border-[#F7941D]/30 rounded-2xl text-[#163A6B] font-serif font-bold text-center text-xs">
                  "Serving Pilgrims with Devotion, Empowering Yatras with Technology."
                </div>

                <div className="space-y-3 text-xs text-[#2F5F9F] leading-relaxed font-medium">
                  <h4 className="font-black text-[#F7941D] text-xs uppercase tracking-wider">🌟 OUR STORY</h4>
                  <p>
                    Every year, millions of devoted pilgrims embark on sacred journeys across India to seek blessings, peace, and spiritual fulfillment. Tirtho was born out of a deep reverence for traditional pilgrimages and a passion for modern technology. Launched initially in the holy city of Shegaon, Maharashtra (the abode of Shri Sant Gajanan Maharaj), Tirtho bridges ancient sacred traditions with modern AI navigation.
                  </p>

                  <h4 className="font-black text-[#F7941D] text-xs uppercase tracking-wider">🚀 OUR MISSION & VISION</h4>
                  <p>
                    <strong>Mission:</strong> To transform and simplify the pilgrimage experience for millions of devotees by providing real-time information, AI assistance, and seamless local service discovery.<br />
                    <strong>Vision:</strong> To become India’s most trusted smart spiritual tourism platform empowering pilgrims across every sacred dham.
                  </p>

                  <div className="p-4 bg-[#FFF7EB] border border-[#F7941D]/20 rounded-2xl space-y-1 text-[11px]">
                    <p>🌐 <strong>Official Website:</strong> https://tirtho.app</p>
                    <p>✉️ <strong>General Inquiries:</strong> hello@tirtho.app / support@tirtho.app</p>
                    <p>📍 <strong>Launch Base:</strong> Shegaon, District Buldhana, Maharashtra - 444203, India.</p>
                    <p className="pt-1 font-bold text-[#163A6B]">Designed & Developed by Jaidev Joshi.</p>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}

    </div>
  );
};
