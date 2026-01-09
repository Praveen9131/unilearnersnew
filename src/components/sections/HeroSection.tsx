import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // No animations

  return (
    <section 
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: '#f5f3f0',
        minHeight: isMobile ? 'auto' : '600px',
        paddingBottom: isMobile ? '0' : '0',
        position: 'relative'
      }}
    >
      <div 
        className="flex flex-col lg:flex-row items-center justify-between max-w-[1600px] mx-auto relative"
        style={{
          padding: isMobile ? '1rem 1rem 0.5rem' : 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)',
          gap: isMobile ? '0.5rem' : 'clamp(2rem, 4vw, 3rem)',
          minHeight: 'auto',
          width: '100%'
        }}
      >
        {/* Left Content - Hero Content */}
          <div 
            className="flex-1 max-w-[550px] z-10 w-full lg:w-auto"
            style={{
              flex: 1,
              maxWidth: '100%',
              width: '100%',
              zIndex: 2,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
              justifyContent: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '0.75rem' : '0',
              padding: isMobile ? '0' : '0',
              boxSizing: 'border-box'
            }}
          >
          <h1 
            className="text-center lg:text-left"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              fontSize: isMobile ? '1.875rem' : 'clamp(1.75rem, 6vw, 3.5rem)',
              fontWeight: 600,
              color: '#1f2937',
              lineHeight: isMobile ? '1.3' : '1.25',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              letterSpacing: isMobile ? '-0.3px' : '-0.5px',
              width: '100%',
              padding: 0,
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              boxSizing: 'border-box'
            }}
          >
            Transform your career with{' '}
            <span style={{ color: '#0e7c86', fontWeight: 600, fontSize: 'inherit' }}>
              expert-led courses
            </span>
            {' '}and real-world internships.
            </h1>
            
          <p 
            className="text-center lg:text-left"
            style={{ 
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: isMobile ? '1rem' : 'clamp(0.9rem, 2.5vw, 1.1rem)',
              color: '#5f6368',
              lineHeight: isMobile ? '1.6' : '1.6',
              marginBottom: isMobile ? '0' : '2rem',
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              fontWeight: 400,
              width: '100%',
              padding: 0,
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
              boxSizing: 'border-box'
            }}
          >
            Join 50,000+ students building skills, gaining experience, and launching their dream careers. 
            Access 500+ courses and 200+ internship opportunities—all in one platform.
          </p>
          </div>

        {/* Right Side - Hero Image */}
          <div
            className="flex-1 relative z-10 flex items-center justify-center"
            style={{
              flex: 1,
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 0
            }}
          >
          <div
            className="relative w-full hero-image-wrapper mt-2 lg:mt-0"
            style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? '200px' : 'clamp(300px, 50vw, 500px)',
              minHeight: isMobile ? '200px' : '300px',
              maxHeight: isMobile ? '200px' : '500px',
              background: 'linear-gradient(135deg, #e8e6e1 0%, #d4cfc7 100%)',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: isMobile ? '0 8px 16px rgba(0, 0, 0, 0.08)' : '0 20px 25px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            {/* Main Image - Unilearners Hero Image */}
            <img
              src="/hero-image.png"
              alt="Unilearners - Empowering students with internships and courses"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            
            {/* Decorative curved lines overlay - particularly upper right */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none" style={{ opacity: 0.3 }}>
                <path
                  d="M300,50 Q320,80 340,100 T380,120"
                  fill="none"
                  stroke="#f8f9fa"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M280,120 Q300,140 320,160 T360,180"
                  fill="none"
                  stroke="#f8f9fa"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M320,80 Q340,100 360,120 T400,140"
                  fill="none"
                  stroke="#f8f9fa"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M250,150 Q270,170 290,190 T330,210"
                  fill="none"
                  stroke="#f8f9fa"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Decorative curves */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: '100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%'
              }}
            />
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '50px',
                right: '100px',
                width: '200px',
                height: '150px',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%'
              }}
            />

            </div>
        </div>
      </div>
      
      {/* Let's Talk Button - At the end of hero section, above Stats */}
      <div
        className="max-w-[1600px] mx-auto"
        style={{
          padding: isMobile ? '0 1rem 1.5rem' : '0 clamp(1rem, 4vw, 2rem) 2rem',
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}
      >
        <Link
          to="/contact"
          className="inline-block"
          style={{ 
            background: '#0e7c86',
            color: 'white',
            padding: isMobile ? '0.875rem 2rem' : 'clamp(0.75rem, 2vw, 0.875rem) clamp(1.5rem, 4vw, 1.75rem)',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: isMobile ? '1.125rem' : 'clamp(0.95rem, 2.5vw, 1rem)',
            fontWeight: 600,
            transition: 'all 0.2s ease',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
            textAlign: 'center',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '100%' : 'none',
            boxShadow: isMobile ? '0 4px 12px rgba(14, 124, 134, 0.3)' : 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#086267';
            e.currentTarget.style.transform = 'translateY(-2px)';
            if (isMobile) {
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(14, 124, 134, 0.4)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0e7c86';
            e.currentTarget.style.transform = 'translateY(0)';
            if (isMobile) {
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(14, 124, 134, 0.3)';
            }
          }}
        >
          Let's Talk
        </Link>
      </div>
    </section>
  );
};
