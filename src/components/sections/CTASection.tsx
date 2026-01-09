import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CTASection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Transform values based on scroll progress
  const line1Y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
  const line1Opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const line1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);

  const line2Y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);
  const line2Opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0.8]);
  const line2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%)',
            padding: 'clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 'clamp(400px, 60vh, 500px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
          }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          textAlign: 'center',
          zIndex: 2
        }}
      >
        {/* Decorative Lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          viewBox="0 0 1000 500"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <path
            d="M 100 50 Q 300 200 500 100 T 900 300"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 50 400 Q 250 300 450 400 T 850 200"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M 200 100 Q 400 300 600 150 T 950 400"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 3
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Headline - Animated with Scroll */}
            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '2rem',
                lineHeight: '1.3',
                letterSpacing: '-0.5px',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                padding: '0 1rem'
              }}
            >
              <motion.span
                style={{
                  display: 'block',
                  y: line1Y,
                  opacity: line1Opacity,
                  scale: line1Scale
                }}
              >
                Delegate the training.
              </motion.span>
              <motion.span
                style={{
                  display: 'block',
                  y: line2Y,
                  opacity: line2Opacity,
                  scale: line2Scale
                }}
              >
                Develop your people.
              </motion.span>
            </h2>

                {/* Supporting Text */}
                <p
                  style={{
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                    color: '#6b7280',
                    maxWidth: '650px',
                    margin: '0 auto 2.5rem',
                    lineHeight: '1.7',
                    fontWeight: 400,
                    padding: '0 1rem'
                  }}
                >
              Connect with a Unilearners expert to explore the best training options for your organization—no pressure, just solutions that work.
            </p>

            {/* CTA Button */}
            <button
              style={{
                background: '#0e7c86',
                color: 'white',
                padding: '0.8rem 2rem',
                border: 'none',
                borderRadius: '0.375rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#086267';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(14, 124, 134, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0e7c86';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Speak with an expert
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
