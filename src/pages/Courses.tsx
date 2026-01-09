import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { courses } from "@/data/courses";
import { BookOpen, Clock, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Modal } from "@/components/ui/Modal";
import { CourseForm } from "@/components/ui/CourseForm";

export default function Courses() {
  const categories = Array.from(new Set(courses.map(c => c.category)));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredCourses = selectedCategory 
    ? courses.filter(c => c.category === selectedCategory)
    : courses;

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
                Explore Our Comprehensive Course Library
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
                Master in-demand skills with industry-leading courses designed by experts. 
                From beginner to advanced levels, we have the perfect course to accelerate your career.
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
                { icon: BookOpen, value: '500+', label: 'Courses Available' },
                { icon: Users, value: '50,000+', label: 'Active Learners' },
                { icon: Award, value: '98%', label: 'Completion Rate' },
                { icon: TrendingUp, value: '95%', label: 'Placement Success' }
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

        {/* Why Choose Our Courses Section */}
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
                Why Choose Our Courses?
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
                We provide comprehensive, industry-relevant courses that prepare you for real-world challenges
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
                  title: "Expert Instructors",
                  description: "Learn from industry professionals with years of hands-on experience and proven track records.",
                  icon: Users
                },
                {
                  title: "Hands-On Projects",
                  description: "Build real-world projects and portfolios that showcase your skills to potential employers.",
                  icon: CheckCircle2
                },
                {
                  title: "Industry Certifications",
                  description: "Earn recognized certificates that validate your skills and boost your career prospects.",
                  icon: Award
                },
                {
                  title: "Flexible Learning",
                  description: "Learn at your own pace with self-paced courses and live sessions that fit your schedule.",
                  icon: Clock
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

        {/* Course Categories Filter - Hidden on mobile */}
        <section 
          className="py-12 hidden md:block"
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
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                All Courses
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
          </div>
        </section>

        {/* Courses Grid */}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
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
                  {/* Course Image Header */}
                  <div 
                    style={{
                      height: '200px',
                      background: `linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%), url(${course.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      opacity: 0.9
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        padding: '0.5rem 1rem',
                        borderRadius: '0.35rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#f59e0b'
                      }}
                    >
                      {course.category}
                    </div>
                    {course.discount && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                          background: '#f0fdf4',
                          color: '#15803d',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '0.25rem',
                          fontSize: '0.85rem',
                          fontWeight: 600
                        }}
                      >
                        {course.discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
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
                      {course.title}
                    </h3>

                    <div style={{ marginBottom: '1rem', flex: 1 }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        {course.features.slice(0, 3).map((feature, i) => (
                          <span
                            key={i}
                            style={{
                              fontSize: '0.85rem',
                              color: '#6b7280',
                              background: '#f3f4f6',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '0.25rem'
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <p 
                        style={{
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          lineHeight: '1.6',
                          marginBottom: '0.75rem'
                        }}
                      >
                        <strong>Instructors:</strong> {course.instructors.join(', ')}
                      </p>
                      <p 
                        style={{
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          lineHeight: '1.6',
                          marginBottom: '0.75rem'
                        }}
                      >
                        <strong>Duration:</strong> {course.duration} | <strong>Level:</strong> {course.level}
                      </p>
                      <p 
                        style={{
                          fontSize: '0.9rem',
                          color: '#6b7280',
                          lineHeight: '1.6'
                        }}
                      >
                        <strong>Language:</strong> {course.language}
                      </p>
                    </div>

                    {/* Pricing */}
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
                      <div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1f2937' }}>
                          ₹{course.price.toLocaleString('en-IN')}
                        </div>
                        {course.originalPrice && (
                          <div style={{ fontSize: '0.9rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                            ₹{course.originalPrice.toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={`/courses/${course.id}`}
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
                      Buy Now
                    </Link>
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

