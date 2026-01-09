import { motion } from "framer-motion";

export const ExperienceSection = () => {
  return (
    <section 
      className="py-20 lg:py-32"
      style={{
        backgroundColor: '#f5f3f0',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
      }}
    >
      <div 
        className="max-w-[1600px] mx-auto px-8"
        style={{
          width: '100%',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)'
        }}
      >
        {/* Heading and Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '5rem',
            maxWidth: '900px',
            margin: '0 auto 5rem'
          }}
        >
          <h2 
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Your pathway to career success
          </h2>
          <p 
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: '#6b7280',
              lineHeight: '1.8',
              fontWeight: 400,
              maxWidth: '800px',
              margin: '0 auto',
              padding: '0 1rem'
            }}
          >
            We understand the challenges students face—finding the right courses, gaining real-world experience, 
            and building a career. Unilearners is here to bridge that gap.
          </p>
        </motion.div>

        {/* Main Content - Split Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)', 
          alignItems: 'center', 
          marginBottom: '4rem' 
        }}>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1.5rem',
                lineHeight: '1.3',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
              }}
            >
              Learn. Grow. Succeed.
            </h3>
            <p 
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: '#6b7280',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}
            >
              Unilearners empowers students with comprehensive courses and real-world internship 
              opportunities. Build skills, gain experience, and transform your career with industry-leading programs.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div 
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#0e7c86',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}
                />
                <div>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#1f2937',
                      fontWeight: 500,
                      marginBottom: '0.25rem'
                    }}
                  >
                    Expert-led courses across 500+ programs
                  </p>
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    Learn from industry professionals with hands-on projects and real-world applications that prepare you for your dream job
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div 
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#0e7c86',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}
                />
                <div>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#1f2937',
                      fontWeight: 500,
                      marginBottom: '0.25rem'
                    }}
                  >
                    Real-world internship opportunities
                  </p>
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    Gain practical experience with leading companies, build your portfolio, and increase your chances of landing full-time roles
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div 
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#0e7c86',
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}
                />
                <div>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#1f2937',
                      fontWeight: 500,
                      marginBottom: '0.25rem'
                    }}
                  >
                    95% placement rate with career support
                  </p>
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    Our comprehensive placement assistance, resume building, and interview preparation help you secure your dream job
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Animated Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              background: '#000'
            }}
          >
            {/* Video Background with Animated Content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
                overflow: 'hidden'
              }}
            >
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  position: 'absolute',
                  top: '-50%',
                  left: '-50%',
                  width: '200%',
                  height: '200%',
                  background: 'radial-gradient(circle, rgba(14, 124, 134, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%'
                }}
              />

              {/* Animated Grid Pattern */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(14, 124, 134, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(14, 124, 134, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  opacity: 0.3
                }}
              />

              {/* Animated Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    width: `${20 + i * 10}px`,
                    height: `${20 + i * 10}px`,
                    background: 'rgba(14, 124, 134, 0.3)',
                    borderRadius: '50%',
                    top: `${20 + i * 15}%`,
                    left: `${15 + i * 12}%`,
                    filter: 'blur(2px)'
                  }}
                />
              ))}

              {/* Video Content Overlay - Course & Internship Dashboard */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  gap: '1.5rem'
                }}
              >
                {/* Course Cards Animation */}
                <div style={{ display: 'flex', gap: '1rem', width: '100%', maxWidth: '500px' }}>
                  {['Data Science', 'Web Dev', 'AI/ML'].map((course, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -8, 0],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      style={{
                        flex: 1,
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        minHeight: '120px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.5rem' }}>
                          {course}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                          {course === 'Data Science' ? '2,450' : course === 'Web Dev' ? '3,120' : '1,890'} Students
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          width: ['0%', `${60 + i * 15}%`]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                        style={{
                          height: '4px',
                          background: 'linear-gradient(90deg, #0e7c86 0%, #06b6d4 100%)',
                          borderRadius: '2px',
                          marginTop: '0.75rem'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Stats Dashboard */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.85, 1, 0.85]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.75rem',
                    padding: '1.5rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem', textAlign: 'center' }}>
                    Student Success Metrics
                  </div>
                  
                  {/* Animated Stats Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    {[
                      { label: 'Courses', value: '500+', progress: 95 },
                      { label: 'Internships', value: '200+', progress: 88 },
                      { label: 'Placement', value: '95%', progress: 95 },
                      { label: 'Students', value: '50K+', progress: 92 }
                    ].map((stat, i) => (
                      <div key={i}>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.25rem' }}>
                          {stat.label}
                        </div>
                        <div style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 600, marginBottom: '0.5rem' }}>
                          {stat.value}
                        </div>
                        <div style={{ height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                          <motion.div
                            animate={{
                              width: ['0%', `${stat.progress}%`]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 1.5,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                            style={{
                              height: '100%',
                              background: 'linear-gradient(90deg, #0e7c86 0%, #06b6d4 100%)',
                              borderRadius: '2px'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Internship Opportunities */}
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    background: 'rgba(14, 124, 134, 0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    border: '1px solid rgba(14, 124, 134, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <div style={{ 
                    width: '50px', 
                    height: '50px', 
                    borderRadius: '0.5rem', 
                    background: 'linear-gradient(135deg, #0e7c86 0%, #086267 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <div style={{ fontSize: '1.2rem' }}>💼</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0.25rem' }}>
                      New Internship Opportunity
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.95)', fontWeight: 500 }}>
                      Software Development Intern at TechCorp
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginTop: '0.25rem' }}>
                      ₹25,000/month • 6 months • Remote
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Play Button Overlay - Center */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute cursor-pointer z-20"
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'rgba(14, 124, 134, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 12px 32px rgba(14, 124, 134, 0.5)',
                  cursor: 'pointer',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  border: '3px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    style={{
                      width: '45px',
                      height: '45px',
                      marginLeft: '4px'
                    }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>

                {/* Pulsing Ring Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1.5],
                    opacity: [0.5, 0, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  style={{
                    position: 'absolute',
                    inset: '-10px',
                    borderRadius: '50%',
                    border: '2px solid rgba(14, 124, 134, 0.6)'
                  }}
                />
              </motion.div>

              {/* Video Controls Bar - Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {/* Progress Bar */}
                <div style={{ flex: 1, height: '4px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div
                    animate={{
                      width: ['0%', '65%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: "linear"
                    }}
                    style={{
                      height: '100%',
                      background: '#0e7c86',
                      borderRadius: '2px'
                    }}
                  />
                </div>
                {/* Time Display */}
                <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.9)', fontFamily: 'monospace' }}>
                  2:45 / 4:20
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            paddingTop: '3rem',
            borderTop: '1px solid #e5e7eb'
          }}
        >
          <p 
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Join 50,000+ students who have transformed their careers with Unilearners's courses and internships
          </p>
        </motion.div>
      </div>
    </section>
  );
};
