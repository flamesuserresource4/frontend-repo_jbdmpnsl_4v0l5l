import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollProgress from '../components/ScrollProgress'
import Navbar from '../components/Navbar'
import { ArrowRight, CheckCircle2, Shield, Clock, MessageSquare, MapPin, Truck, Zap, Map } from 'lucide-react'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 80])
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(0,0,0,0.25),transparent)]"/>
        <div className="absolute inset-0 bg-[length:200%_2px] bg-repeat-y bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)] animate-[road_12s_linear_infinite]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl font-bold leading-tight">
            Albert Transport – Schnell. Sicher. Zuverlässig.
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.6}} className="mt-4 text-lg text-blue-100">
            Kleintransporte & Expressfahrten in NRW und Umgebung
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.6}} className="mt-8 flex flex-wrap gap-4">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-white text-blue-900 px-5 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
              Kontakt <ArrowRight size={18}/>
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Angebot anfragen
            </a>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{delay:0.2, duration:0.6}} className="grid grid-cols-2 gap-4">
          {["Pünktlich","Versichert","Flexibel","NRW"].map((t, i)=> (
            <div key={i} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-5 text-white">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                <Truck size={18}/>
              </div>
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-blue-100">Wir liefern zuverlässig in ganz NRW.</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`@keyframes road{0%{background-position:0 0}100%{background-position:200% 0}}`}</style>
    </section>
  )
}

function About() {
  const steps = [
    { title: 'Anfrage', text: 'Sie schicken uns Ihre Transportanfrage.' },
    { title: 'Planung', text: 'Wir bestätigen und planen die schnellste Route.' },
    { title: 'Abholung', text: 'Pünktliche Abholung beim Auftraggeber.' },
    { title: 'Zustellung', text: 'Sichere und schnelle Lieferung beim Empfänger.' },
  ]
  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}}>
            <h2 className="text-3xl font-bold text-blue-950">Über uns</h2>
            <p className="mt-4 text-blue-900/70 leading-relaxed">
              Albert Transport ist ein kleines, familiengeführtes Transportunternehmen aus NRW. Wir bieten schnelle und zuverlässige Transporte, Expresslieferungen und flexible Lösungen für Firmen und Privatkunden.
            </p>
            <div className="mt-8 space-y-6">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{ once: true }} transition={{delay:i*0.05}} className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">{i+1}</div>
                  <div>
                    <p className="font-semibold text-blue-950">{s.title}</p>
                    <p className="text-sm text-blue-900/70">{s.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{duration:0.6}} className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.15),transparent_60%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(59,130,246,0.08),transparent)] animate-[shine_4s_ease_infinite]" />
              <div className="p-8">
                <p className="text-blue-900/70">Wie wir arbeiten</p>
                <ul className="mt-4 grid grid-cols-2 gap-4 text-blue-950">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-blue-600" size={18}/> Direkt und pünktlich</li>
                  <li className="flex items-center gap-2"><Shield className="text-blue-600" size={18}/> Versichert</li>
                  <li className="flex items-center gap-2"><Clock className="text-blue-600" size={18}/> 24/7 erreichbar</li>
                  <li className="flex items-center gap-2"><MessageSquare className="text-blue-600" size={18}/> Kurze Wege</li>
                </ul>
              </div>
            </div>
            <style>{`@keyframes shine{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`}</style>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { title:'Expresslieferungen', icon: Zap },
    { title:'Same-Day Transport', icon: Clock },
    { title:'Kleintransporte bis 3.5t', icon: Truck },
    { title:'NRW Regionalfahrten', icon: Map },
  ]
  return (
    <section id="leistungen" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950">Unsere Leistungen</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i)=> (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="group rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="h-10 w-10 rounded bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <s.icon size={18}/>
              </div>
              <p className="mt-4 font-semibold text-blue-950">{s.title}</p>
              <p className="text-sm text-blue-900/70">Zuverlässig, schnell und flexibel – genau nach Ihrem Bedarf.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Coverage() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 800, 1200], [1, 1.05, 1.12])
  return (
    <section id="einsatzgebiet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">Einsatzgebiet NRW</h2>
            <p className="mt-4 text-blue-900/70">Wir fahren in ganz Nordrhein-Westfalen – zuverlässig von A nach B.</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-blue-900/70">
              {['Köln','Düsseldorf','Dortmund','Essen','Bonn','Duisburg'].map((c)=> (
                <li key={c} className="flex items-center gap-2"><MapPin className="text-blue-600" size={16}/> {c}</li>
              ))}
            </ul>
          </div>
          <motion.div style={{ scale }} className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-blue-100 bg-gradient-to-tr from-blue-50 to-white overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-center bg-contain bg-no-repeat opacity-80" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.2),transparent_60%)] mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const points = [
    { title:'Schnell', icon: Zap },
    { title:'Sicher', icon: Shield },
    { title:'Gute Kommunikation', icon: MessageSquare },
    { title:'Faire Preise', icon: CheckCircle2 },
  ]
  return (
    <section id="warum-wir" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-950">Warum wir?</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{delay: i*0.05}} className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded bg-blue-600/10 text-blue-600 flex items-center justify-center">
                <p.icon size={18}/>
              </div>
              <p className="mt-4 font-semibold text-blue-950">{p.title}</p>
              <p className="text-sm text-blue-900/70">Verlässlichkeit steht bei uns an erster Stelle.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-950">Kontakt</h2>
            <p className="mt-4 text-blue-900/70">Schreiben Sie uns – wir melden uns schnell zurück.</p>
            <form onSubmit={(e)=> e.preventDefault()} className="mt-8 grid gap-4">
              <input className="border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ihr Name" required />
              <input type="email" className="border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="E-Mail" required />
              <textarea rows="5" className="border border-blue-200 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ihre Nachricht" required />
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">Senden</button>
            </form>
            <div className="mt-6 text-sm text-blue-900/70 space-y-1">
              <p>E-Mail: info@albert-transport.de</p>
              <p>Telefon: +49 123 456 789</p>
              <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-blue-100">
            <iframe title="Karte" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[360px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251999.29809226936!2d6.6756!3d51.4344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8a7250f2d0a65%3A0x42760fc4a2a7c0!2sNorth%20Rhine-Westphalia!5e0!3m2!1sen!2sde!4v1700000000000"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="bg-white text-blue-900">
      <ScrollProgress/>
      <Navbar/>
      <main className="scroll-smooth">
        <Hero/>
        <About/>
        <Services/>
        <Coverage/>
        <WhyUs/>
        <Contact/>
        <footer className="border-t border-blue-100 py-8 text-sm text-center text-blue-900/70">© {new Date().getFullYear()} Albert Transport</footer>
      </main>
    </div>
  )
}
