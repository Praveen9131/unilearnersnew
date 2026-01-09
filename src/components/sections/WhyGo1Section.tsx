import { motion } from "framer-motion";

const features = [
  {
    title: "Comprehensive Course Library",
    description: "Access 500+ expert-led courses across technology, business, design, and more. Learn at your own pace with hands-on projects and industry-recognized certifications.",
    image: "/feature-courses.jpg"
  },
  {
    title: "Real-World Internship Opportunities",
    description: "Gain practical experience with leading companies through our internship programs. Build your portfolio, develop professional skills, and increase your job prospects.",
    image: "/feature-internships.jpg"
  },
  {
    title: "Career Support & Placement",
    description: "Get personalized career guidance, resume building, interview preparation, and placement assistance. Our 95% placement rate speaks to our commitment to your success.",
    image: "/feature-career.jpg"
  },
];

export const WhyGo1Section = () => {
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
        {/* Top Section - Title and Headline */}
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
            Why Unilearners
          </p>
          <h2 
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 600,
              color: '#1f2937',
              lineHeight: '1.2',
              letterSpacing: '-0.5px',
              margin: '0 auto',
              maxWidth: '900px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              padding: '0 1rem'
            }}
          >
            Your complete learning<br className="hidden sm:block" />
            and career platform
          </h2>
          <p 
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              color: '#6b7280',
              lineHeight: '1.7',
              marginTop: '1.5rem',
              maxWidth: '700px',
              margin: '1.5rem auto 0',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              padding: '0 1rem'
            }}
          >
            Everything you need to build skills, gain experience, and launch your career—all in one place.
          </p>
        </motion.div>

        {/* Central Large Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginBottom: '5rem',
            width: '100%'
          }}
        >
          <div 
            className="relative w-full rounded-xl overflow-hidden"
            style={{ 
              height: 'clamp(300px, 50vw, 500px)',
              minHeight: '300px',
              borderRadius: '0.75rem',
              boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)'
            }}
          >
            <img
              src="/why-skillonex-main.jpg"
              alt="Unilearners - Students learning and collaborating in modern educational environment"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                opacity: 0.9
              }}
              onError={(e) => {
                // Fallback placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 100%)';
                e.currentTarget.parentElement.style.display = 'flex';
                e.currentTarget.parentElement.style.alignItems = 'center';
                e.currentTarget.parentElement.style.justifyContent = 'center';
                e.currentTarget.parentElement.style.color = '#9ca3af';
                e.currentTarget.parentElement.innerHTML = '<div style="text-align: center; color: rgba(255, 255, 255, 0.7); font-size: 1.1rem;">Students Learning Together</div>';
              }}
            />
            {/* Overlay Gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 0%, rgba(15, 15, 30, 0.3) 100%)'
              }}
            />
          </div>
        </motion.div>

        {/* Bottom Section - Three Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            width: '100%',
            alignItems: 'start'
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Feature Image */}
              <div
                style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #e8e6e1 0%, #d4cfc7 100%)',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  position: 'relative'
                }}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.3s ease'
                  }}
                  onError={(e) => {
                    // Fallback placeholder
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    parent.style.background = 'linear-gradient(135deg, #0e7c86 0%, #086267 100%)';
                    parent.style.display = 'flex';
                    parent.style.alignItems = 'center';
                    parent.style.justifyContent = 'center';
                    parent.innerHTML = `<div style="color: white; font-size: 2rem; opacity: 0.5;">${feature.title.charAt(0)}</div>`;
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
                  }}
                />
              </div>
              
              {/* Feature Content */}
              <h3 
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#1f2937',
                  marginBottom: '1rem',
                  lineHeight: '1.3',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                {feature.title}
              </h3>
              <p 
                style={{
                  fontSize: '1.05rem',
                  color: '#6b7280',
                  lineHeight: '1.7',
                  fontWeight: 400,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
