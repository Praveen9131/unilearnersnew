import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, TrendingUp, BookOpen, Target } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Expert-Led Training",
    description: "Learn from industry professionals with years of real-world experience. Our instructors are handpicked experts who bring practical insights to every course."
  },
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Earn certificates that are valued by top employers. Our programs are designed to meet industry standards and boost your career prospects."
  },
  {
    icon: TrendingUp,
    title: "98% Placement Rate",
    description: "Join thousands of successful graduates who have secured positions at leading companies. Our comprehensive placement support ensures you land your dream job."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Course Library",
    description: "Access 500+ courses across technology, business, design, and more. From beginner to advanced levels, we have something for everyone."
  },
  {
    icon: Target,
    title: "Hands-On Projects",
    description: "Build real-world projects and portfolios that showcase your skills. Our project-based learning approach prepares you for actual industry challenges."
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Access & Support",
    description: "Get lifetime access to course materials and ongoing support from our community. Your learning journey continues even after course completion."
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
    rotateX: -15
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  },
};

const iconAnimation = {
  hidden: { 
    scale: 0,
    rotate: -180,
    opacity: 0
  },
  show: { 
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const contentAnimation = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  show: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.3
    }
  },
};

export const TestimonialsSection = () => {
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
          padding: '0 2rem'
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
          <p 
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              fontWeight: 500,
              marginBottom: '0.75rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Why Choose Unilearners
          </p>
          <h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: 600,
              color: '#1f2937',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              margin: '0 auto',
              maxWidth: '900px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Your pathway to career success starts here
          </h2>
          <p 
            style={{
              fontSize: '1rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '1.5rem auto 0',
              lineHeight: '1.7',
              textAlign: 'center',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Join thousands of students who have transformed their careers with Unilearners. Experience world-class education, industry connections, and unmatched support.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            width: '100%'
          }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '2rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'pointer',
                perspective: '1000px'
              }}
            >
              {/* Icon with Animation */}
              <motion.div
                variants={iconAnimation}
                whileHover="hover"
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(135deg, #0e7c86 0%, #086267 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(14, 124, 134, 0.3)'
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                >
                  <reason.icon 
                    size={28} 
                    color="white"
                    style={{
                      strokeWidth: 2.5
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Content with Animation */}
              <motion.div variants={contentAnimation}>
                <motion.h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '0.75rem',
                    lineHeight: '1.3',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                  whileHover={{
                    color: '#0e7c86',
                    x: 4,
                    transition: { duration: 0.2 }
                  }}
                >
                  {reason.title}
                </motion.h3>
                <motion.p
                  style={{
                    fontSize: '1rem',
                    color: '#6b7280',
                    lineHeight: '1.7',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {reason.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
