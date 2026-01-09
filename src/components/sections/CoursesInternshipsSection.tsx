import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Icons removed - using text-only design
import { courses } from "@/data/courses";
import { internships } from "@/data/internships";
import { Modal } from "@/components/ui/Modal";
import { CourseForm } from "@/components/ui/CourseForm";
import { InternshipForm } from "@/components/ui/InternshipForm";

// Category-specific poster designs with code, icons, and text
const getCategoryDesign = (category: string) => {
  const designs: Record<string, { pattern: string; poster: JSX.Element; gradient: string }> = {
    "Data Science": {
      pattern: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='60' cy='20' r='2'/%3E%3Ccircle cx='20' cy='60' r='2'/%3E%3Ccircle cx='60' cy='60' r='2'/%3E%3Cpath d='M40 20 L40 60 M20 40 L60 40' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#3b82f6' }}>import</div>
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>pandas</div>
            <div style={{ color: '#9333ea', marginLeft: '10px' }}>as</div>
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>pd</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '30px', right: '30px', fontSize: '2rem' }}>📊</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '60px', right: '30px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>DATA</div>
        </div>
      )
    },
    "Web Development": {
      pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='40' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3Crect x='0' y='40' width='20' height='20'/%3E%3Crect x='40' y='40' width='20' height='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#22c55e' }}>&lt;div&gt;</div>
            <div style={{ color: '#3b82f6', marginLeft: '10px' }}>React</div>
            <div style={{ color: '#22c55e' }}>&lt;/div&gt;</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>💻</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>WEB</div>
        </div>
      )
    },
    "AI/ML": {
      pattern: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M35 10 L50 35 L35 60 L20 35 Z'/%3E%3Ccircle cx='35' cy='35' r='8'/%3E%3Cpath d='M35 15 L35 55 M15 35 L55 35' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#a855f7' }}>model</div>
            <div style={{ color: '#ec4899', marginLeft: '10px' }}>=</div>
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>ML()</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '30px', right: '30px', fontSize: '2rem' }}>🤖</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '60px', right: '30px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>AI/ML</div>
        </div>
      )
    },
    "Design": {
      pattern: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M25 5 Q 45 25 25 45 Q 5 25 25 5'/%3E%3Ccircle cx='25' cy='25' r='5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(239, 68, 68, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#fb923c' }}>color:</div>
            <div style={{ color: '#ef4444', marginLeft: '10px' }}>#FF5733</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>🎨</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>DESIGN</div>
        </div>
      )
    },
    "Marketing": {
      pattern: `url("data:image/svg+xml,%3Csvg width='55' height='55' viewBox='0 0 55 55' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M27.5 5 L45 20 L27.5 35 L10 20 Z'/%3E%3Cpath d='M27.5 20 L40 30 L27.5 40 L15 30 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2) 0%, rgba(251, 146, 60, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#eab308' }}>SEO</div>
            <div style={{ color: '#fb923c', marginLeft: '10px' }}>+</div>
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>ADS</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>📈</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>MARKET</div>
        </div>
      )
    },
    "Cloud": {
      pattern: `url("data:image/svg+xml,%3Csvg width='65' height='65' viewBox='0 0 65 65' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M32.5 10 Q 50 20 50 35 Q 50 50 32.5 50 Q 15 50 15 35 Q 15 20 32.5 10'/%3E%3Cpath d='M20 25 Q 30 30 30 40' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'/%3E%3Cpath d='M45 25 Q 55 30 55 40' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2) 0%, rgba(59, 130, 246, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#0ea5e9' }}>aws</div>
            <div style={{ color: '#3b82f6', marginLeft: '10px' }}>deploy</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '30px', right: '30px', fontSize: '2rem' }}>☁️</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '60px', right: '30px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>CLOUD</div>
        </div>
      )
    },
    "Programming": {
      pattern: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 5 L35 15 L20 25 L5 15 Z'/%3E%3Cpath d='M10 20 L30 20 M20 10 L20 30' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(14, 165, 233, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#22c55e' }}>public</div>
            <div style={{ color: '#0ea5e9', marginLeft: '10px' }}>class</div>
            <div style={{ color: '#ffffff', marginLeft: '10px' }}>Code</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>⚡</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>CODE</div>
        </div>
      )
    },
    "Backend Development": {
      pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='20' height='20'/%3E%3Crect x='40' y='0' width='20' height='20'/%3E%3Crect x='20' y='20' width='20' height='20'/%3E%3Crect x='0' y='40' width='20' height='20'/%3E%3Crect x='40' y='40' width='20' height='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(34, 197, 94, 0.2) 100%)',
      poster: (
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
          {/* Code Block */}
          <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
            <div style={{ color: '#3b82f6' }}>app.get</div>
            <div style={{ color: '#22c55e', marginLeft: '10px' }}>('/api')</div>
          </div>
          {/* Icon */}
          <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>⚙️</div>
          {/* Text */}
          <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>BACKEND</div>
        </div>
      )
    }
  };

  return designs[category] || {
    pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    gradient: 'linear-gradient(135deg, rgba(15, 15, 30, 0.85) 0%, rgba(26, 26, 46, 0.85) 100%)',
    poster: (
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3, padding: '1rem', opacity: 0.15 }}>
        <div style={{ position: 'absolute', top: '25px', right: '25px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#ffffff' }}>
          <div style={{ color: '#f59e0b' }}>learn()</div>
        </div>
        <div style={{ position: 'absolute', bottom: '35px', right: '35px', fontSize: '2rem' }}>📚</div>
        <div style={{ position: 'absolute', bottom: '65px', right: '35px', fontSize: '0.75rem', color: '#ffffff', fontWeight: 600 }}>LEARN</div>
      </div>
    )
  };
};

export const CoursesInternshipsSection = () => {
  const [gridColumns, setGridColumns] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [selectedInternship, setSelectedInternship] = useState<typeof internships[0] | null>(null);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isInternshipModalOpen, setIsInternshipModalOpen] = useState(false);

  useEffect(() => {
    const updateGrid = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 768) {
        setGridColumns(1);
      } else if (width < 1024) {
        setGridColumns(2);
      } else {
        setGridColumns(3);
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  // Limit courses and internships for mobile view
  const displayedCourses = isMobile ? courses.slice(0, 3) : courses;
  const displayedInternships = isMobile ? internships.slice(0, 3) : internships;

  return (
    <>
      {/* Courses Section */}
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              width: '100%'
            }}
          >
            <h2 
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                margin: '0 auto 1rem',
                width: '100%',
                padding: '0 1rem'
              }}
            >
              Explore Our Courses
            </h2>
            <p 
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                padding: '0 1rem'
              }}
            >
              Discover comprehensive courses to advance your career
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
              gap: '2rem',
              width: '100%',
              alignItems: 'stretch',
              margin: '0',
              padding: '0'
            }}
          >
            {displayedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full h-full flex flex-col"
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Header Section - Dark Gradient with Course Image */}
                <div 
                  className="relative h-[220px] overflow-hidden flex items-center justify-between"
                  style={{
                    background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
                    height: '220px',
                    padding: '0 20px',
                    position: 'relative'
                  }}
                >
                  {/* Category-specific gradient background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: getCategoryDesign(course.category).gradient,
                      zIndex: 0
                    }}
                  />
                  
                  {/* Dark Overlay for better text readability */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.85) 0%, rgba(26, 26, 46, 0.85) 100%)',
                      zIndex: 1
                    }}
                  />

                  {/* Category-specific Pattern Overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.12]"
                    style={{
                      backgroundImage: getCategoryDesign(course.category).pattern,
                      zIndex: 2
                    }}
                  />

                  {/* Category-specific Poster Design with Code, Icons, and Text */}
                  {getCategoryDesign(course.category).poster}

                  {/* Category Label - Left */}
                  <div className="relative flex flex-col items-start" style={{ zIndex: 4 }}>
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '0.35rem',
                        padding: '0.6rem 0.9rem',
                        display: 'inline-block'
                      }}
                    >
                      <span
                        style={{ 
                          color: '#f59e0b',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          display: 'block',
                          lineHeight: '1.2'
                        }}
                      >
                        {course.category}
                      </span>
                      <span
                        style={{ 
                          color: '#6b7280',
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          display: 'block',
                          fontStyle: 'italic',
                          lineHeight: '1.2'
                        }}
                      >
                        Interview Preparation
                      </span>
                    </div>
                  </div>

                  {/* Language Badge - Bottom Right */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      background: 'white',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      zIndex: 4,
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <div
                      style={{ 
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#06b6d4'
                      }}
                    />
                    {course.language}
                  </div>
                </div>

                {/* Body Section */}
                <div style={{ padding: '1.75rem' }}>
                  {/* Title */}
                  <h4
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#1f2937',
                      lineHeight: '1.3',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {course.title}
                  </h4>

                  {/* Meta Information - Clean Text Only */}
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    {/* Instructor */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.5'
                      }}
                    >
                      <span style={{ fontWeight: 600, color: '#1f2937' }}>Instructor:</span> {course.instructors[0]}
                    </div>

                    {/* Features */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.5'
                      }}
                    >
                      <span style={{ fontWeight: 600, color: '#1f2937' }}>Format:</span> {course.features.join(' | ')} | ...
                    </div>

                    {/* Target Audience */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.5'
                      }}
                    >
                      <span style={{ fontWeight: 600, color: '#1f2937' }}>Audience:</span> {course.targetAudience}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#1f2937'
                        }}
                      >
                        ₹ {course.price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </span>
                      {course.originalPrice && (
                        <span
                          style={{
                            fontSize: '0.95rem',
                            color: '#9ca3af',
                            textDecoration: 'line-through'
                          }}
                        >
                          {course.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                        </span>
                      )}
                    </div>
                    {course.discount && (
                      <div
                        style={{
                          background: '#f0fdf4',
                          color: '#15803d',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '0.25rem',
                          fontWeight: 600,
                          fontSize: '0.85rem'
                        }}
                      >
                        {course.discount}% Discount
                      </div>
                    )}
                  </div>

                  {/* Buy Now Button */}
                  <button
                    className="w-full py-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: '#0e7c86',
                      color: 'white',
                      fontSize: '1rem',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => {
                      setSelectedCourse(course);
                      setIsCourseModalOpen(true);
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
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Courses Button - Mobile Only */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                textAlign: 'center',
                marginTop: '3rem'
              }}
            >
              <Link
                to="/courses"
                style={{
                  display: 'inline-block',
                  background: '#0e7c86',
                  color: 'white',
                  padding: '0.875rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
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
                View All Courses
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Internships Section */}
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
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              width: '100%'
            }}
          >
            <h2 
              style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '1rem',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                margin: '0 auto 1rem',
                width: '100%',
                padding: '0 1rem'
              }}
            >
              Explore Our Internships
            </h2>
            <p 
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.7',
                textAlign: 'center',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                padding: '0 1rem'
              }}
            >
              Discover hands-on internship opportunities to advance your career
            </p>
          </motion.div>

          {/* Internships Grid */}
          <div 
            style={{
              width: '100%'
            }}
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
                gap: '2rem',
                width: '100%',
                alignItems: 'stretch',
                margin: '0',
                padding: '0'
              }}
            >
            {displayedInternships.map((internship, index) => (
              <motion.div
                key={internship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full h-full flex flex-col"
                style={{
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                {/* Header Section - Dark Gradient */}
                <div 
                  className="relative h-[120px] overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)',
                    height: '120px',
                    padding: '1.5rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Category Label */}
                  <div
                    style={{
                      color: '#f59e0b',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.025em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {internship.category} Internship
                  </div>
                  
                  {/* Type Badge */}
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

                {/* Body Section */}
                <div style={{ padding: '1.75rem' }}>
                  {/* Title */}
                  <h4
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#1f2937',
                      lineHeight: '1.3',
                      marginBottom: '1.5rem',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                    }}
                  >
                    {internship.title}
                  </h4>

                  {/* Separator */}
                  <div
                    style={{
                      height: '1px',
                      background: '#e5e7eb',
                      marginBottom: '1.5rem'
                    }}
                  />

                  {/* Meta Information - Clean Text Only */}
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    {/* Duration */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.5'
                      }}
                    >
                      {internship.duration} months
                    </div>

                    {/* Description */}
                    <div
                      style={{
                        fontSize: '0.95rem',
                        color: '#6b7280',
                        lineHeight: '1.6',
                        marginTop: '0.25rem'
                      }}
                    >
                      {internship.description}
                    </div>
                  </div>

                  {/* Stipend Section */}
                  <div 
                    style={{
                      marginBottom: '1.5rem',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#1f2937',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      ₹ {internship.stipend.toLocaleString('en-IN')}/month
                    </div>
                  </div>

                  {/* Apply Now Button */}
                  <button
                    style={{
                      width: '100%',
                      background: '#0e7c86',
                      color: 'white',
                      border: 'none',
                      padding: '1rem',
                      borderRadius: '0.375rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                    }}
                    onClick={() => {
                      setSelectedInternship(internship);
                      setIsInternshipModalOpen(true);
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
                  </button>
                </div>
              </motion.div>
            ))}
            </div>

            {/* View All Internships Button - Mobile Only */}
            {isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                  textAlign: 'center',
                  marginTop: '3rem'
                }}
              >
                <Link
                  to="/internships"
                  style={{
                    display: 'inline-block',
                    background: '#0e7c86',
                    color: 'white',
                    padding: '0.875rem 2rem',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
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
                  View All Internships
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Course Purchase Modal */}
      {selectedCourse && (
        <Modal
          isOpen={isCourseModalOpen}
          onClose={() => {
            setIsCourseModalOpen(false);
            setSelectedCourse(null);
          }}
          title="Purchase Course"
        >
          <CourseForm
            courseTitle={selectedCourse.title}
            coursePrice={selectedCourse.price}
            onClose={() => {
              setIsCourseModalOpen(false);
              setSelectedCourse(null);
            }}
          />
        </Modal>
      )}

      {/* Internship Application Modal */}
      {selectedInternship && (
        <Modal
          isOpen={isInternshipModalOpen}
          onClose={() => {
            setIsInternshipModalOpen(false);
            setSelectedInternship(null);
          }}
          title="Apply for Internship"
        >
          <InternshipForm
            internshipTitle={selectedInternship.title}
            internshipStipend={selectedInternship.stipend}
            onClose={() => {
              setIsInternshipModalOpen(false);
              setSelectedInternship(null);
            }}
          />
        </Modal>
      )}
    </>
  );
};

