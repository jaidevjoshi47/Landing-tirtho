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
  Mail
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'about' | null>(null);
  const apkDownloadUrl = '/app-debug.apk'; // Direct link to APK download asset or release endpoint

  const handleDownload = () => {
    // Triggers direct browser APK download
    const link = document.createElement('a');
    link.href = apkDownloadUrl;
    link.download = 'Tirtho-Shegaon-Yatra-v1.0.4.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#111827] font-sans selection:bg-[#E66A17] selection:text-white">
      
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0E6DD] px-4 lg:px-12 py-2 sm:py-2.5 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-9 sm:h-10 w-auto object-contain drop-shadow-2xs" />
            <div>
              <span className="font-serif font-black text-lg sm:text-xl text-[#111827] tracking-tight block leading-none">
                TIRTHO
              </span>
              <span className="text-[9px] font-black text-[#E66A17] tracking-wider uppercase block mt-0.5">
                Your Guide. Your Yatra.
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-700">
            <a href="#features" className="hover:text-[#E66A17] transition-colors">Features</a>
            <a href="#places" className="hover:text-[#E66A17] transition-colors">Tourist Spots</a>
            <a href="#planner" className="hover:text-[#E66A17] transition-colors">AI Trip Planner</a>
            <a href="#download" className="hover:text-[#E66A17] transition-colors">Download APK</a>
          </div>

          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-gradient-to-r from-[#E66A17] to-[#FF9248] text-white font-extrabold text-[11px] rounded-full shadow-[0_3px_12px_rgba(230,106,23,0.25)] hover:opacity-95 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 lg:px-12 bg-gradient-to-b from-[#FFF8F0] via-[#FCFAF7] to-[#FCFAF7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-[#E66A17] text-xs font-black">
              <Sparkles className="w-4 h-4 fill-[#E66A17]" />
              <span>Shegaon's #1 Smart Spiritual Yatra App</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#111827] leading-[1.15]">
              Experience Shegaon Yatra with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E66A17] to-[#FF9248]">Bhaskar AI</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your ultimate digital companion for Shri Gajanan Maharaj Shegaon Darshan. Get real-time crowd waiting status, voice-guided AI assistance, 1-tap express trip planning, and live map navigation.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-2xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9 / 5 Devotee Rating</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-2xs">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Hindi • Marathi • English</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-xl border border-gray-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Free Download</span>
              </div>
            </div>

            {/* Main CTA Download Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E66A17] via-orange-500 to-[#FF9248] text-white font-extrabold text-base rounded-full shadow-[0_8px_25px_rgba(230,106,23,0.35)] hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <Download className="w-5 h-5 stroke-[2.5px]" />
                <span>Download Android APK (v1.0.4)</span>
              </button>

              <a
                href="#download"
                className="w-full sm:w-auto px-6 py-4 bg-white border border-gray-300 text-gray-800 font-extrabold text-sm rounded-full hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <span>Installation Guide</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-gray-400 font-bold">
              Direct APK Download • Free & Safe • Size ~16.4 MB • Android 7.0+
            </p>

          </div>

          {/* App Preview Mockup Container */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-orange-400/20 to-amber-300/30 rounded-full blur-3xl -z-10" />
            
            <div className="relative w-full max-w-sm bg-white rounded-[38px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border-4 border-gray-900">
              <div className="w-full h-full bg-[#FCFAF7] rounded-[30px] overflow-hidden p-4 space-y-4">
                
                {/* Header Mockup */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-500 rounded-2xl p-4 text-white space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold opacity-90">
                    <span>Shri Gajanan Maharaj Shegaon</span>
                    <span>Live 🟢</span>
                  </div>
                  <h3 className="font-serif font-black text-xl">Jai Gajanan Mauli! 🙏</h3>
                  <p className="text-xs opacity-95">Darshan Wait Time: ~15 Mins (Low Crowd)</p>
                </div>

                {/* Bhaskar AI Voice Card */}
                <div className="bg-white border border-orange-200 rounded-2xl p-3.5 space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-orange-300">
                      <img src="/bhaskar.png" alt="Bhaskar AI" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-black text-xs text-gray-900">Bhaskar AI Voice Guide</h4>
                      <p className="text-[10px] text-gray-500 font-medium">Ask anything in Hindi, Marathi & English</p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-orange-50 rounded-xl text-xs text-orange-950 font-bold italic">
                    "Subah Kakad Aarti 5:30 AM ko hoti hai. Prasadalaya me Satvik Mahaprasad dopahar 11:30 se milta hai!"
                  </div>
                </div>

                {/* 9 Places Preview */}
                <div className="bg-white border border-gray-200 rounded-2xl p-3.5 space-y-2">
                  <h4 className="font-black text-xs text-gray-900">9 Sacred Places Included</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    <span className="text-[10px] font-bold bg-gray-100 p-1.5 rounded-lg text-gray-700">🛕 Main Temple</span>
                    <span className="text-[10px] font-bold bg-gray-100 p-1.5 rounded-lg text-gray-700">🙏 Pragat Sthal</span>
                    <span className="text-[10px] font-bold bg-gray-100 p-1.5 rounded-lg text-gray-700">🌊 Anand Sagar</span>
                    <span className="text-[10px] font-bold bg-gray-100 p-1.5 rounded-lg text-gray-700">🌸 Mahalaxmi Temple</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Features Grid */}
      <section id="features" className="py-16 px-4 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black text-[#E66A17] uppercase tracking-wider">
              Smart Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#111827]">
              Everything You Need For A Peaceful Yatra
            </h2>
            <p className="text-sm text-gray-600 font-medium">
              Designed specifically for devotees, families, and solo travelers visiting Shegaon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E66A17] flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">Bhaskar AI Voice Assistant</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Ask questions about Aarti timings, temple rules, satvik prasad, or local routes. Bhaskar AI answers in voice in Hindi, Marathi & English!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">Live Crowd & Queue Wait Time</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Check live waiting time and queue density before heading for Darshan so you can plan the best time for your family.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">1-Tap & Custom Yatra Planner</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Generate an express 1-day yatra plan or type your custom Google Form-style sequence. AI creates your exact turn-by-turn route!
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">Live Map Navigation</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Get GPS navigation for all 9 sacred places in Shegaon including Pragat Sthal, Anand Sagar, and Siddhapeeth Mahalaxmi Temple.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">Prasadalaya & Satvik Food Finder</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Find Sansthan Mahaprasad timings, pure satvik food spots, and hygienic dining options near the temple premises.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-[#FCFAF7] border border-[#F0E6DD] rounded-3xl space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE0C2] text-[#E66A17] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-black text-[#111827]">100% Independent & Free</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                Completely free app created for devotees. Zero ads, zero hidden costs, and simple to use for senior citizens.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 9 Tourist Places Showcase */}
      <section id="places" className="py-16 px-4 lg:px-12 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-black text-[#E66A17] uppercase tracking-wider">
              Sacred Destinations
            </span>
            <h2 className="text-3xl font-serif font-black text-[#111827]">
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
              <div key={idx} className="p-4 bg-white border border-[#FFE0C2] rounded-2xl space-y-1.5 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#E66A17] bg-orange-50 px-2 py-0.5 rounded">
                    {item.cat}
                  </span>
                  <span className="text-xs text-amber-500 font-bold">⭐ 4.8+</span>
                </div>
                <h3 className="font-extrabold text-sm text-[#111827]">{item.name}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APK Direct Download & Installation Section */}
      <section id="download" className="py-20 px-4 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#FFF8F0] via-white to-[#FFF3E6] border-2 border-[#FFE0C2] rounded-[36px] p-6 sm:p-12 shadow-xl space-y-10">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Official Android Release v1.0.4</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#111827]">
              Download Tirtho App APK Free
            </h2>
            <p className="text-sm text-gray-600 font-medium">
              Click below to download the official Android APK directly to your phone and start your Shegaon Yatra!
            </p>
          </div>

          {/* Download Box */}
          <div className="bg-white border border-[#FFE0C2] rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#E66A17] text-white flex items-center justify-center font-serif text-2xl font-black shadow-md flex-shrink-0">
                📱
              </div>
              <div>
                <h3 className="font-extrabold text-base text-[#111827]">Tirtho-Shegaon-Yatra-v1.0.4.apk</h3>
                <p className="text-xs text-gray-500 font-semibold mt-0.5">
                  Size: ~16.4 MB • Requirements: Android 7.0+ (ARM64)
                </p>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E66A17] to-[#FF9248] text-white font-extrabold text-sm rounded-full shadow-[0_6px_20px_rgba(230,106,23,0.35)] hover:scale-105 transition-all flex items-center justify-center gap-2 active:scale-95 flex-shrink-0"
            >
              <Download className="w-5 h-5 stroke-[2.5px]" />
              <span>Download APK File</span>
            </button>
          </div>

          {/* 3 Step Installation Instructions */}
          <div className="space-y-4 pt-4 border-t border-[#FFE5CC]">
            <h4 className="font-extrabold text-sm text-[#111827] uppercase tracking-wider text-center">
              How To Install APK On Your Android Phone:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              <div className="p-4 bg-gray-50 rounded-2xl space-y-1 border border-gray-200">
                <span className="text-xs font-black text-[#E66A17] block">STEP 1</span>
                <h5 className="font-extrabold text-xs text-gray-900">Click Download APK</h5>
                <p className="text-[11px] text-gray-500 font-medium">Tap the download button above to download the file to your device downloads folder.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl space-y-1 border border-gray-200">
                <span className="text-xs font-black text-[#E66A17] block">STEP 2</span>
                <h5 className="font-extrabold text-xs text-gray-900">Allow Installation</h5>
                <p className="text-[11px] text-gray-500 font-medium">When prompted by Android browser, select "Allow from this source" / "Install Unknown Apps".</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-2xl space-y-1 border border-gray-200">
                <span className="text-xs font-black text-[#E66A17] block">STEP 3</span>
                <h5 className="font-extrabold text-xs text-gray-900">Open Tirtho & Enjoy</h5>
                <p className="text-[11px] text-gray-500 font-medium">Tap "Install" and open Tirtho to start your voice-guided Shegaon Yatra!</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Sansthan Independent Legal Disclaimer Footer */}
      <footer className="bg-white border-t border-[#F0E6DD] py-10 px-4 lg:px-12 text-center space-y-4">
        <div className="max-w-4xl mx-auto space-y-4">
          
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/logo.png" alt="Tirtho Official Logo" className="h-16 sm:h-20 w-auto object-contain drop-shadow-md" />
            <span className="text-sm font-black text-[#E66A17] uppercase tracking-wider">Your Guide. Your Yatra.</span>
          </div>

          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-950 font-medium leading-relaxed max-w-3xl mx-auto">
            <span className="font-black text-amber-950 block mb-1">⚖️ IMPORTANT LEGAL DISCLAIMER:</span>
            Tirtho is an independent AI-powered Yatra guide application created solely for the convenience of visiting devotees. This website and app have <strong>NO official connection, affiliation, or authorization with Shri Gajanan Maharaj Sansthan, Shegaon</strong>. All temple names and trademarks belong to their respective authorities.
          </div>

          {/* Smart Legal Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-black text-gray-700 pt-3 border-t border-gray-100">
            <button 
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#E66A17] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Privacy Policy</span>
            </button>

            <span className="text-gray-300">•</span>

            <button 
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#E66A17] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>📜</span>
              <span>Terms & Conditions</span>
            </button>

            <span className="text-gray-300">•</span>

            <button 
              onClick={() => setActiveLegalModal('about')}
              className="hover:text-[#E66A17] transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <span>ℹ️</span>
              <span>About Tirtho</span>
            </button>
          </div>

          <p className="text-xs text-gray-500 font-semibold pt-2">
            © {new Date().getFullYear()} Tirtho App. Crafted with devotion for Shegaon pilgrims.
          </p>

        </div>
      </footer>

      {/* Website Legal Modals Overlay */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative animate-scaleUp text-left">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 active:scale-95 transition-all"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* PRIVACY POLICY MODAL */}
            {activeLegalModal === 'privacy' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-xl text-gray-900">Privacy Policy</h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">DPDP Act 2023 Compliant</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-gray-700 leading-relaxed font-medium">
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-950 font-bold">
                    Effective Date: January 2026 • Last Updated: July 2026
                  </div>
                  
                  <h4 className="font-black text-gray-900 text-sm">1. Introduction & Data Protection Commitment</h4>
                  <p>
                    Tirtho ("we", "our", or "us") is dedicated to providing smart spiritual navigation for pilgrims visiting holy sites across India, starting with Shegaon, Maharashtra. We respect your privacy and are committed to protecting your personal data in full compliance with India's Digital Personal Data Protection (DPDP) Act, 2023.
                  </p>

                  <h4 className="font-black text-gray-900 text-sm">2. Information We Collect</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Basic Profile Data:</strong> Name, Email address, and phone number (if provided for account registration).</li>
                    <li><strong>Location Data:</strong> Approximate or precise GPS location strictly used for real-time map navigation and nearest spot discovery.</li>
                    <li><strong>Usage Data:</strong> Anonymous analytics to improve app response speed and Madhav AI recommendations.</li>
                  </ul>

                  <h4 className="font-black text-gray-900 text-sm">3. How We Use Your Data</h4>
                  <p>
                    Your data is strictly utilized to provide live queue estimates, personalized yatra itineraries, multi-lingual AI assistance, and verified local stay/food spot recommendations. We NEVER sell or monetize user data.
                  </p>

                  <h4 className="font-black text-gray-900 text-sm">4. Contact Privacy Officer</h4>
                  <p>For any privacy queries or data deletion requests, email us at: <strong className="text-emerald-700">privacy@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* TERMS & CONDITIONS MODAL */}
            {activeLegalModal === 'terms' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#E66A17] flex items-center justify-center font-black text-xl">
                    📜
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-xl text-gray-900">Terms & Conditions</h3>
                    <p className="text-xs font-bold text-[#E66A17] uppercase tracking-wider">User Agreement & Service Terms</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-gray-700 leading-relaxed font-medium">
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-2xl text-orange-950 font-bold">
                    Please read these terms carefully before using Tirtho platform.
                  </div>

                  <h4 className="font-black text-gray-900 text-sm">1. Independent Service Disclaimer</h4>
                  <p>
                    Tirtho is an independent private technology platform designed for pilgrim welfare. We maintain no official affiliation or endorsement with Shri Gajanan Maharaj Sansthan or any government temple trust.
                  </p>

                  <h4 className="font-black text-gray-900 text-sm">2. Real-Time Information Accuracy</h4>
                  <p>
                    Crowd wait times, Prasadalaya schedules, and local transport details are estimated based on pilgrim contributions and real-time feeds. Devotees are advised to verify timings locally during peak festivals.
                  </p>

                  <h4 className="font-black text-gray-900 text-sm">3. Acceptable Code of Conduct</h4>
                  <p>
                    Users must respect local temple etiquette, cultural sanctity, and avoid posting misleading reviews or harmful content on the platform.
                  </p>

                  <h4 className="font-black text-gray-900 text-sm">4. Legal Contact</h4>
                  <p>For legal inquiries: <strong className="text-[#E66A17]">legal@tirtho.app</strong></p>
                </div>
              </div>
            )}

            {/* ABOUT US MODAL */}
            {activeLegalModal === 'about' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-orange-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#E66A17] to-[#FBBF24] text-white flex items-center justify-center font-serif font-black text-2xl shadow-md">
                    T
                  </div>
                  <div>
                    <h3 className="font-serif font-black text-xl text-gray-900">ABOUT TIRTHO</h3>
                    <p className="text-xs font-black text-[#E66A17] uppercase tracking-wider">YOUR GUIDE. YOUR YATRA.</p>
                  </div>
                </div>

                <div className="p-3.5 bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 rounded-2xl text-amber-950 font-serif font-bold text-center text-xs">
                  "Serving Pilgrims with Devotion, Empowering Yatras with Technology."
                </div>

                <div className="space-y-3 text-xs text-gray-700 leading-relaxed font-medium">
                  <h4 className="font-black text-[#E66A17] text-xs uppercase tracking-wider">🌟 OUR STORY</h4>
                  <p>
                    Every year, millions of devoted pilgrims embark on sacred journeys across India to seek blessings, peace, and spiritual fulfillment. Tirtho was born out of a deep reverence for traditional pilgrimages and a passion for modern technology. Launched initially in the holy city of Shegaon, Maharashtra (the abode of Shri Sant Gajanan Maharaj), Tirtho bridges ancient sacred traditions with modern AI navigation.
                  </p>

                  <h4 className="font-black text-[#E66A17] text-xs uppercase tracking-wider">🚀 OUR MISSION & VISION</h4>
                  <p>
                    <strong>Mission:</strong> To transform and simplify the pilgrimage experience for millions of devotees by providing real-time information, AI assistance, and seamless local service discovery.<br />
                    <strong>Vision:</strong> To become India’s most trusted smart spiritual tourism platform empowering pilgrims across every sacred dham.
                  </p>

                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-2xl space-y-1 text-[11px]">
                    <p>🌐 <strong>Official Website:</strong> https://tirtho.app</p>
                    <p>✉️ <strong>General Inquiries:</strong> hello@tirtho.app / support@tirtho.app</p>
                    <p>📍 <strong>Launch Base:</strong> Shegaon, District Buldhana, Maharashtra - 444203, India.</p>
                    <p className="pt-1 font-bold text-gray-900">Designed & Developed by Jaidev Joshi.</p>
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
