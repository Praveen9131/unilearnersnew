import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Target, Users, Award, TrendingUp, Lightbulb, Heart, Globe, Rocket } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering individuals and organizations through accessible, high-quality education and training."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge AI and technology to deliver personalized learning experiences."
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make is centered around student success and career advancement."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building a community of learners and professionals making a difference worldwide."
    }
  ];

  const team = [
    { name: "Leadership Team", description: "Experienced professionals from top tech companies and educational institutions." },
    { name: "Expert Instructors", description: "Industry veterans with decades of combined real-world experience." },
    { name: "Support Staff", description: "Dedicated team ensuring smooth learning experience for every student." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="py-20 lg:py-32"
          style={{
            background: 'linear-gradient(135deg, #f5f3f0 0%, #ffffff 100%)',
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                textAlign: 'center',
                maxWidth: '900px',
                margin: '0 auto'
              }}
            >
              <h1 
                style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 600,
                  color: '#1f2937',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                  marginBottom: '1.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                  padding: '0 1rem'
                }}
              >
                About Unilearners
              </h1>
              <p 
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#6b7280',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                  padding: '0 1rem'
                }}
              >
                We're on a mission to transform education and career development through innovative 
                technology, expert instruction, and a commitment to student success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section 
          className="py-20 lg:py-32"
          style={{
            backgroundColor: '#ffffff',
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '1.5rem',
                    lineHeight: '1.2',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                >
                  Our Story
                </h2>
                <p 
                  style={{
                    fontSize: '1.1rem',
                    color: '#6b7280',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem'
                  }}
                >
                  Unilearners was founded with a simple yet powerful vision: to make quality education 
                  accessible to everyone, regardless of their background or location. We recognized that 
                  traditional education systems often fail to keep pace with rapidly evolving industries, 
                  leaving many students and professionals struggling to acquire the skills they need.
                </p>
                <p 
                  style={{
                    fontSize: '1.1rem',
                    color: '#6b7280',
                    lineHeight: '1.8',
                    marginBottom: '1.5rem'
                  }}
                >
                  Today, we've grown into a leading edtech platform, serving over 50,000 students with 
                  comprehensive courses and internship programs. Our AI-powered learning platform 
                  personalizes the educational experience, ensuring every student can learn at their 
                  own pace and achieve their career goals.
                </p>
                <p 
                  style={{
                    fontSize: '1.1rem',
                    color: '#6b7280',
                    lineHeight: '1.8'
                  }}
                >
                  We're proud of our 98% course completion rate and 95% placement success, but what 
                  truly drives us is seeing our students transform their careers and achieve their dreams.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
                  borderRadius: '1rem',
                  padding: '3rem',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                <Rocket size={64} color="#f59e0b" style={{ marginBottom: '1.5rem' }} />
                <h3 
                  style={{
                    fontSize: '2rem',
                    fontWeight: 600,
                    marginBottom: '1rem',
                    color: 'white'
                  }}
                >
                  Our Vision
                </h3>
                <p 
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}
                >
                  To become the world's most trusted platform for career transformation, 
                  empowering millions of learners to achieve their professional aspirations 
                  through innovative education and real-world experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem'
              }}
            >
              <h2 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '1rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Our Core Values
              </h2>
              <p 
                style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                The principles that guide everything we do
              </p>
            </motion.div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    padding: '2.5rem',
                    background: 'white',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <value.icon 
                    size={48} 
                    color="#0e7c86" 
                    style={{ marginBottom: '1.5rem' }}
                  />
                  <h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '1rem'
                    }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#6b7280',
                      lineHeight: '1.7'
                    }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                marginBottom: '4rem'
              }}
            >
              <h2 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '1rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Our Team
              </h2>
              <p 
                style={{
                  fontSize: '1.1rem',
                  color: '#6b7280',
                  maxWidth: '700px',
                  margin: '0 auto',
                  lineHeight: '1.7'
                }}
              >
                A diverse group of passionate professionals dedicated to your success
              </p>
            </motion.div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}
            >
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    padding: '2.5rem',
                    background: 'white',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <Users 
                    size={48} 
                    color="#0e7c86" 
                    style={{ marginBottom: '1.5rem' }}
                  />
                  <h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '1rem'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#6b7280',
                      lineHeight: '1.7'
                    }}
                  >
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-20 lg:py-32"
          style={{
            background: 'linear-gradient(135deg, #0e7c86 0%, #086267 100%)',
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                textAlign: 'center'
              }}
            >
              {[
                { icon: Users, value: '50,000+', label: 'Active Students' },
                { icon: Award, value: '500+', label: 'Courses Available' },
                { icon: TrendingUp, value: '95%', label: 'Placement Rate' },
                { icon: Globe, value: '100+', label: 'Partner Companies' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <stat.icon 
                    size={40} 
                    color="white" 
                    style={{ marginBottom: '1rem' }}
                  />
                  <div 
                    style={{
                      fontSize: '3rem',
                      fontWeight: 700,
                      color: 'white',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    style={{
                      fontSize: '1.1rem',
                      color: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

