import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { internships } from "@/data/internships";
import { Briefcase, Clock, DollarSign, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Internships() {
  const categories = Array.from(new Set(internships.map(i => i.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const filteredInternships = internships.filter(internship => {
    const categoryMatch = !selectedCategory || internship.category === selectedCategory;
    const typeMatch = !selectedType || internship.type === selectedType;
    return categoryMatch && typeMatch;
  });

  const types = ["Remote", "Hybrid", "On-site"];

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
                  fontSize: '3.5rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                  marginBottom: '1.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Launch Your Career with Real-World Internships
              </h1>
              <p 
                style={{
                  fontSize: '1.2rem',
                  color: '#6b7280',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Gain hands-on experience, build your portfolio, and connect with industry leaders. 
                Our internship programs bridge the gap between learning and professional success.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginTop: '4rem',
                maxWidth: '1000px',
                margin: '4rem auto 0'
              }}
            >
              {[
                { icon: Briefcase, value: '200+', label: 'Internship Opportunities' },
                { icon: Users, value: '5,000+', label: 'Interns Placed' },
                { icon: TrendingUp, value: '85%', label: 'Full-Time Conversion' },
                { icon: DollarSign, value: '₹25K+', label: 'Average Stipend' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <stat.icon 
                    size={32} 
                    color="#0e7c86" 
                    style={{ margin: '0 auto 1rem' }}
                  />
                  <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1f2937', marginBottom: '0.5rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#6b7280' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Our Internships Section */}
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
                Why Choose Our Internship Programs?
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
                We connect talented students with leading companies to provide meaningful internship experiences
              </p>
            </motion.div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
              }}
            >
              {[
                {
                  title: "Real-World Projects",
                  description: "Work on actual company projects and contribute to meaningful business outcomes while building your portfolio.",
                  icon: Briefcase
                },
                {
                  title: "Industry Mentorship",
                  description: "Receive guidance from experienced professionals who help you navigate your career path and develop essential skills.",
                  icon: Users
                },
                {
                  title: "Competitive Stipends",
                  description: "Earn competitive stipends while learning. Our internships offer fair compensation for your valuable contributions.",
                  icon: DollarSign
                },
                {
                  title: "Career Opportunities",
                  description: "Many of our interns receive full-time job offers. Build relationships that lead to long-term career success.",
                  icon: TrendingUp
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    padding: '2rem',
                    background: '#f5f3f0',
                    borderRadius: '0.75rem',
                    textAlign: 'center'
                  }}
                >
                  <feature.icon 
                    size={40} 
                    color="#0e7c86" 
                    style={{ marginBottom: '1rem' }}
                  />
                  <h3 
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '0.95rem',
                      color: '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section 
          className="py-12"
          style={{
            backgroundColor: '#f5f3f0',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb'
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
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1f2937', marginRight: '0.5rem', alignSelf: 'center' }}>
                Category:
              </span>
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: selectedCategory === null ? '#0e7c86' : 'white',
                  color: selectedCategory === null ? 'white' : '#6b7280',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.95rem'
                }}
              >
                All Categories
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: selectedCategory === category ? '#0e7c86' : 'white',
                    color: selectedCategory === category ? 'white' : '#6b7280',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '0.95rem'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1f2937', marginRight: '0.5rem', alignSelf: 'center' }}>
                Type:
              </span>
              <button
                onClick={() => setSelectedType(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  background: selectedType === null ? '#0e7c86' : 'white',
                  color: selectedType === null ? 'white' : '#6b7280',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '0.95rem'
                }}
              >
                All Types
              </button>
              {types.map(type => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.5rem',
                    border: 'none',
                    background: selectedType === type ? '#0e7c86' : 'white',
                    color: selectedType === type ? 'white' : '#6b7280',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: '0.95rem'
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Internships Grid */}
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
            {filteredInternships.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
                  No internships found matching your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                  gap: '2rem'
                }}
              >
                {filteredInternships.map((internship, index) => (
                  <motion.div
                    key={internship.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{
                      background: 'white',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                    }}
                  >
                    {/* Internship Header */}
                    <div 
                      style={{
                        height: '150px',
                        background: `linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)`,
                        position: 'relative',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: '#f59e0b',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {internship.category}
                      </div>
                      <div
                        style={{
                          alignSelf: 'flex-end',
                          background: 'rgba(255, 255, 255, 0.15)',
                          color: 'white',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          fontWeight: 500
                        }}
                      >
                        {internship.type}
                      </div>
                    </div>

                    {/* Internship Content */}
                    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#1f2937',
                          marginBottom: '1rem',
                          lineHeight: '1.3'
                        }}
                      >
                        {internship.title}
                      </h3>

                      <div style={{ marginBottom: '1rem', flex: 1 }}>
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.75rem',
                            fontSize: '0.95rem',
                            color: '#6b7280'
                          }}
                        >
                          <Briefcase size={18} color="#6b7280" />
                          <strong style={{ color: '#1f2937' }}>Company:</strong> {internship.company}
                        </div>
                        <div 
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginBottom: '0.75rem',
                            fontSize: '0.95rem',
                            color: '#6b7280'
                          }}
                        >
                          <Clock size={18} color="#6b7280" />
                          <strong style={{ color: '#1f2937' }}>Duration:</strong> {internship.duration}
                        </div>
                        <p 
                          style={{
                            fontSize: '0.95rem',
                            color: '#6b7280',
                            lineHeight: '1.6',
                            marginBottom: '1rem'
                          }}
                        >
                          {internship.description}
                        </p>
                        <div style={{ marginTop: '1rem' }}>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                            Required Skills:
                          </div>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {internship.skills.map((skill, i) => (
                              <span
                                key={i}
                                style={{
                                  fontSize: '0.85rem',
                                  color: '#0e7c86',
                                  background: '#e0f2fe',
                                  padding: '0.25rem 0.75rem',
                                  borderRadius: '0.25rem',
                                  fontWeight: 500
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Stipend */}
                      <div 
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: '1.5rem',
                          paddingTop: '1.5rem',
                          borderTop: '1px solid #e5e7eb'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <DollarSign size={20} color="#0e7c86" />
                          <div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937' }}>
                              ₹{internship.stipend.toLocaleString('en-IN')}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>
                              per month
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Link
                        to={`/internships/${internship.id}`}
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          padding: '0.875rem 1.5rem',
                          background: '#0e7c86',
                          color: 'white',
                          borderRadius: '0.5rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                          transition: 'all 0.2s ease',
                          fontSize: '1rem'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#086267';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#0e7c86';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

