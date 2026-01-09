import { motion } from "framer-motion";

const caseStudies = [
  {
    metric: "20%",
    label: "Engagement increase",
    company: "ABC Technologies",
  },
  {
    metric: "3x",
    label: "Active learner increase",
    company: "GT's Living Foods",
  },
  {
    metric: "10+",
    label: "Languages globally",
    company: "Boonedam",
  },
  {
    metric: "2x",
    label: "Engagement increase",
    company: "KPrime Technologies",
  },
  {
    metric: "53",
    label: "Upskilled leaders",
    company: "Parkplace Technologies",
  },
  {
    metric: "7000+",
    label: "Course completions",
    company: "Vero",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const CaseStudiesSection = () => {
  return (
    <section 
      className="py-20 lg:py-32 hidden md:block"
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
              fontSize: '1.05rem',
              color: '#6b7280',
              fontWeight: 500,
              marginBottom: '1rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Case studies
          </p>
          <h2 
            style={{
              fontSize: '3rem',
              fontWeight: 600,
              color: '#1f2937',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            How would you maximize learning?
          </h2>
          <p 
            style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            We enable L&D leaders, like you, with turnkey training – all the essential content in one place.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '2rem',
            width: '100%'
          }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={item}
              style={{
                background: 'white',
                borderRadius: '0.75rem',
                padding: '2rem',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Company Name */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  fontWeight: 600,
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {study.company}
              </p>
              
              {/* Metric */}
              <p
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#1f2937',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2'
                }}
              >
                {study.metric}
              </p>
              
              {/* Label */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  marginBottom: '1.5rem',
                  lineHeight: '1.5'
                }}
              >
                {study.label}
              </p>
              
              {/* Read More Link */}
              <a
                href="#"
                style={{
                  fontSize: '0.875rem',
                  color: '#0e7c86',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#086267';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#0e7c86';
                  e.currentTarget.style.textDecoration = 'none';
                }}
              >
                Read the case study →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
