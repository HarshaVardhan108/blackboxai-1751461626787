import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-dark-teal text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-mint-green transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-mint-green transition-colors">
              About
            </Link>
            <Link to="/projects" className="hover:text-mint-green transition-colors">
              Projects
            </Link>
            <Link to="/resume" className="hover:text-mint-green transition-colors">
              Resume
            </Link>
            <Link to="/contact" className="hover:text-mint-green transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-teal transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-teal transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 rounded-md hover:bg-teal transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="/resume"
                className="block px-3 py-2 rounded-md hover:bg-teal transition-colors"
                onClick={toggleMenu}
              >
                Resume
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md hover:bg-teal transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
