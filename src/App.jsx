import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown, 
  Terminal, 
  Shield, 
  Database, 
  Code, 
  Award, 
  BookOpen, 
  Briefcase, 
  User, 
  Cpu,
  ExternalLink,
  Download
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            <span className="text-teal-400">AG</span>.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['Home', 'About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-colors hover:text-teal-400 ${activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2 rounded-full border border-teal-500/30 text-teal-400 hover:bg-teal-500/10 transition-all text-sm font-medium"
          >
            Let's Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 px-6 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-teal-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">Akila Gunaseelan</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
            AI & Cybersecurity Engineer bridging the gap between <span className="text-slate-200 font-semibold">applied machine learning</span>, <span className="text-slate-200 font-semibold">system software</span>, and <span className="text-slate-200 font-semibold">threat resilience</span>.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button onClick={() => scrollTo('projects')} className="px-8 py-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
              View My Work
            </button>
            <a 
              href="/Akila_Gunaseelan_Resume.pdf" 
              download="Akila_Gunaseelan_Resume.pdf"
              className="px-8 py-3 rounded-lg border border-teal-500/50 hover:bg-teal-500/10 text-teal-400 font-bold transition-all flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Resume
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center justify-center">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all flex items-center justify-center">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <User className="text-teal-400" size={28} />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                I am a postgraduate specializing in applied machine learning, security analytics, and system software. Currently pursuing my M.Tech in Cybersecurity and working as a Research Intern at IIT Madras, I focus on turning complex data into actionable, automated defense mechanisms.
              </p>
              <p>
                My expertise spans the intersection of three domains:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-400 mr-3">▹</span>
                  <span><strong>Cybersecurity:</strong> Breach & Attack Simulation (BAS), SIEM integration, and threat modeling across the MITRE ATT&CK lifecycle.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-400 mr-3">▹</span>
                  <span><strong>Artificial Intelligence:</strong> End-to-end ML pipelines, deep learning (CNNs), and topological data analysis (TDA).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">▹</span>
                  <span><strong>Systems Engineering:</strong> Building robust data pipelines and analytics tools using Python, C/C++, and Linux.</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all group">
                <Terminal className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">C/C++ & Python</h3>
                <p className="text-sm text-slate-400">Core Stack</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/30 transition-all group">
                <Shield className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">15+</h3>
                <p className="text-sm text-slate-400">ATT&CK Scenarios Automated</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 transition-all group">
                <Award className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">60%</h3>
                <p className="text-sm text-slate-400">Reduction in Manual Testing</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-teal-500/30 transition-all group">
                <BookOpen className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-3xl font-bold text-white mb-1">ICDAI '25</h3>
                <p className="text-sm text-slate-400">Published Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <Briefcase className="text-indigo-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
            
            {/* Experience Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-teal-500 text-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Shield size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-teal-500/30 transition-all">
                <div className="flex flex-col mb-4">
                  <span className="text-teal-400 text-sm font-semibold tracking-wide uppercase">Sep 2025 - Present</span>
                  <h3 className="text-xl font-bold text-white mt-1">Cybersecurity Research Intern</h3>
                  <span className="text-slate-400 text-sm flex items-center mt-1"><MapPin size={14} className="mr-1"/> IIT Madras</span>
                </div>
                <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                  <li>Orchestrating simulated cyberattacks (Sliver) across 6 MITRE ATT&CK stages.</li>
                  <li>Analyzing high-volume telemetry & system logs to detect anomalies and identify detection gaps.</li>
                  <li>Built 8+ Python-based reusable playbooks, standardizing incident response evaluation.</li>
                  <li><strong>Impact:</strong> Reduced manual penetration testing assessment cycles by 60%.</li>
                </ul>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-indigo-500 text-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Database size={16} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/30 transition-all">
                <div className="flex flex-col mb-4">
                  <span className="text-indigo-400 text-sm font-semibold tracking-wide uppercase">Jul 2022 - May 2024</span>
                  <h3 className="text-xl font-bold text-white mt-1">AI & Data Researcher</h3>
                  <span className="text-slate-400 text-sm flex items-center mt-1"><MapPin size={14} className="mr-1"/> Rajagiri School of Engineering & Tech</span>
                </div>
                <ul className="text-slate-300 text-sm space-y-2 list-disc list-inside">
                  <li>Developed end-to-end ML pipelines for structured and unstructured healthcare data.</li>
                  <li>Applied Topological Data Analysis (TDA) and Deep Learning for disease prediction models.</li>
                  <li>Designed supervised learning models achieving 92.59% accuracy for clinical outcomes.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-12">
            <Code className="text-cyan-400" size={28} />
            <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Project 1 */}
            <div className="flex flex-col h-full bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(20,184,166,0.1)] transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-teal-500/10 text-teal-400">
                  <Terminal size={24} />
                </div>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">Adaptive Breach & Attack Simulation Platform</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                M.Tech Dissertation: A web-based platform simulating real-world cyberattacks. Automates 15+ ATT&CK scenarios, integrates with Wazuh SIEM for continuous health assessment, and generates automated analytics reports.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">Python</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">C++</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">Wazuh SIEM</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">Linux</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col h-full bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Cpu size={24} />
                </div>
                <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">AI-Driven Alzheimer's Prediction</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Built an end-to-end pipeline using Topological Data Analysis (TDA) and CNNs on MRI/EEG signals to predict early-stage Alzheimer's. Research presented at ICDAI 2025.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">TensorFlow</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">CNNs</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">TDA</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">Pandas</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col h-full bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Database size={24} />
                </div>
                <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Cryotherapy Outcome Prediction</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow">
                Developed supervised learning models (Logistic Regression, Random Forest, XGBoost) to predict treatment outcomes on 200+ patient records, achieving 92.59% accuracy.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">Scikit-learn</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">XGBoost</span>
                <span className="px-2 py-1 text-xs rounded bg-slate-700/50 text-slate-300">EDA</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Skills */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <Cpu className="text-teal-400" size={28} />
              <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Programming & Systems</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'C', 'C++', 'Bash', 'SQL', 'Linux', 'Git', 'Docker', 'Kubernetes'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-200 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">AI, ML & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow/Keras', 'Scikit-Learn', 'XGBoost', 'CNNs', 'Feature Engineering', 'EDA', 'Pandas/NumPy'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800/50 text-slate-200 text-sm">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Cybersecurity</h4>
                <div className="flex flex-wrap gap-2">
                  {['Wazuh (SIEM)', 'Sliver', 'MITRE ATT&CK', 'Nmap', 'Burp Suite', 'Wireshark', 'YARA', 'Suricata'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg border border-teal-900/50 bg-teal-900/20 text-teal-200 border border-teal-500/20 text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <BookOpen className="text-indigo-400" size={28} />
              <h2 className="text-3xl font-bold text-white">Education & Certs</h2>
            </div>

            <div className="space-y-6 mb-12">
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700 border-l-4 border-l-indigo-500">
                <h3 className="text-lg font-bold text-white">M.Tech Computer Science (Cybersecurity)</h3>
                <p className="text-indigo-400 text-sm mb-2">CUSAT • Aug 2024 - May 2026</p>
                <p className="text-slate-400 text-sm">CGPA: 8.95/10.0</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/30 border border-slate-700 border-l-4 border-l-slate-500">
                <h3 className="text-lg font-bold text-white">B.Tech AI & Data Science</h3>
                <p className="text-slate-400 text-sm mb-2">Rajagiri School of Engineering • Jul 2020 - May 2024</p>
                <p className="text-slate-400 text-sm">CGPA: 8.27/10.0 (Distinction)</p>
              </div>
            </div>

            <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Certifications & Achievements</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center"><Award size={16} className="text-cyan-400 mr-2 shrink-0"/> GATE 2024 Qualified - Data Science & AI (DA)</li>
              <li className="flex items-center"><Award size={16} className="text-cyan-400 mr-2 shrink-0"/> Speaker / Author - ICDAI 2025 (Kolkata)</li>
              <li className="flex items-center"><Award size={16} className="text-cyan-400 mr-2 shrink-0"/> Deloitte Cyber Job Simulation Completed</li>
              <li className="flex items-center"><Award size={16} className="text-cyan-400 mr-2 shrink-0"/> IBM Introduction to Cybersecurity Essentials</li>
              <li className="flex items-center"><Award size={16} className="text-cyan-400 mr-2 shrink-0"/> Google Cloud - Intro to Generative AI</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Let's build something secure & intelligent.</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-400">
          <a href="mailto:akilathezenith47@gmail.com" className="flex items-center hover:text-teal-400 transition-colors">
            <Mail size={18} className="mr-2" /> akilathezenith47@gmail.com
          </a>
          <a href="tel:+919496561951" className="flex items-center hover:text-teal-400 transition-colors">
            <Phone size={18} className="mr-2" /> +91 94965 61951
          </a>
          <span className="flex items-center">
            <MapPin size={18} className="mr-2" /> India (Chennai / Kochi / Bengaluru)
          </span>
        </div>
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Akila Gunaseelan. Designed & Coded for Impact.</p>
      </footer>
    </div>
  );
}