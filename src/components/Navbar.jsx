import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { href: '/', label: 'Startseite' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/impressum', label: 'Impressum' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-gradient-to-tr from-blue-600 to-sky-400" />
            <span className="font-semibold text-blue-900">Albert Transport</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-700' : 'text-blue-900/70 hover:text-blue-900'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="hidden lg:flex items-center gap-4 text-sm text-blue-900/70">
              <a href="tel:+49123456789" className="flex items-center gap-2 hover:text-blue-900"><Phone size={16}/> +49 123 456 789</a>
              <a href="mailto:info@albert-transport.de" className="flex items-center gap-2 hover:text-blue-900"><Mail size={16}/> info@albert-transport.de</a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-blue-50"><Menu/></button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} onClick={() => setOpen(false)} className="block py-2 text-blue-900/80 hover:text-blue-900">
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 grid gap-2 text-blue-900/70">
              <a href="tel:+49123456789" className="flex items-center gap-2"><Phone size={16}/> +49 123 456 789</a>
              <a href="mailto:info@albert-transport.de" className="flex items-center gap-2"><Mail size={16}/> info@albert-transport.de</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
