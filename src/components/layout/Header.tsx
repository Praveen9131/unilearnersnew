import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { 
    label: "Courses", 
    hasDropdown: false,
    href: "/courses"
  },
  { 
    label: "Internships", 
    hasDropdown: false,
    href: "/internships"
  },
  { 
    label: "Why Choose Us", 
    hasDropdown: false,
    href: "/why-choose"
  },
  { 
    label: "About", 
    hasDropdown: false,
    href: "/about"
  },
  { 
    label: "Contact", 
    hasDropdown: false,
    href: "/contact"
  },
];

export const Header = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        // Check if click is not on the menu button
        const menuButton = (event.target as HTMLElement).closest('button[aria-label="Toggle menu"]');
        if (!menuButton) {
          setMobileMenuOpen(false);
        }
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement Bar */}
      <div 
        className="py-2 px-4 text-center text-sm"
        style={{ 
          background: '#F5E6B3',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
          padding: '0.5rem 1rem'
        }}
      >
        <a 
          href="#" 
          className="underline"
          style={{ 
            color: '#202124',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
            fontWeight: 500
          }}
        >
          <span className="hidden sm:inline">Explore 500+ expert-led courses and 200+ internship opportunities - Start your career journey today!</span>
          <span className="sm:hidden">500+ Courses & 200+ Internships - Start Today!</span>
        </a>
      </div>

      {/* Main Header - Exact match to provided HTML/CSS */}
      <header 
        className="border-b sticky top-0 z-50"
        style={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(232, 230, 225, 0.92) 100%)',
          borderBottom: '1px solid rgba(229, 231, 235, 0.4)',
          padding: '0 clamp(1rem, 4vw, 2rem)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1600px',
            margin: '0 auto',
            height: 'clamp(60px, 8vw, 72px)',
            minHeight: '60px'
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 1.75rem)',
              fontWeight: 400,
              color: '#202124',
              letterSpacing: '0',
              flexShrink: 0,
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Unilearners
          </Link>

          {/* Desktop Navigation Center - Hidden on mobile */}
          <div
            className="hidden lg:flex"
            style={{
              gap: '3rem',
              alignItems: 'center',
              marginLeft: '4rem'
            }}
          >
            {navItems.map((item) => {
              const isExternal = item.href?.startsWith('#');
              const NavComponent = isExternal ? 'a' : Link;
              const navProps = isExternal 
                ? { href: item.href || "#" }
                : { to: item.href || "/" };
              
              return (
                <NavComponent
                  key={item.label}
                  {...navProps}
                  style={{
                    position: 'relative',
                    color: '#6b7280',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1f2937';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6b7280';
                  }}
                >
                  {item.label}
                </NavComponent>
              );
            })}
          </div>

          {/* Right Side - Get Started Button (Desktop) - Hidden on mobile */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: 'center',
              gap: '1.5rem',
              marginLeft: 'auto'
            }}
          >
            <Link
              to="/contact"
              style={{
                background: '#0e7c86',
                color: 'white',
                padding: '0.6rem 1.4rem',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 500,
                transition: 'background 0.2s ease, transform 0.2s ease',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#086267';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0e7c86';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            className="lg:hidden flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#1f2937'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu - Only visible on mobile */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden"
            style={{
              background: 'white',
              borderTop: '1px solid #e5e7eb',
              padding: '1rem 0',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              zIndex: 1000,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
              {navItems.map((item) => {
                const isExternal = item.href?.startsWith('#');
                const NavComponent = isExternal ? 'a' : Link;
                const navProps = isExternal 
                  ? { href: item.href || "#" }
                  : { to: item.href || "/" };
                
                return (
                  <NavComponent
                    key={item.label}
                    {...navProps}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      color: '#6b7280',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 500,
                      padding: '0.75rem 0',
                      transition: 'color 0.2s ease',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#1f2937';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#6b7280';
                    }}
                  >
                    {item.label}
                  </NavComponent>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: '#0e7c86',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  marginTop: '0.5rem',
                  textAlign: 'center',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
