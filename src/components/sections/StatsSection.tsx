import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stats = [
  {
    value: "50,000+",
    label: "Students Placed"
  },
  {
    value: "500+",
    label: "Partner Companies"
  },
  {
    value: "4.9/5",
    label: "Student Rating"
  },
  {
    value: "95%",
    label: "Employment Rate"
  },
];

export const StatsSection = () => {
  const [gridColumns, setGridColumns] = useState(4);

  useEffect(() => {
    const updateGrid = () => {
      if (window.innerWidth < 768) {
        setGridColumns(2);
      } else if (window.innerWidth < 1024) {
        setGridColumns(4);
      } else {
        setGridColumns(4);
      }
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  return (
    <section 
      className="py-16 lg:py-20"
      style={{
        backgroundColor: '#ffffff',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
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
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            width: '100%'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
              fontWeight: 500,
              color: '#6b7280',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
              padding: '0 1rem'
            }}
          >
            Trusted by students and employers worldwide
          </h2>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
            gap: '2rem',
            width: '100%',
            alignItems: 'center'
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                textAlign: 'center',
                width: '100%'
              }}
            >
              {/* Stat Value */}
              <div
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 700,
                  color: '#0e7c86',
                  marginBottom: '0.5rem',
                  lineHeight: '1.2',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                {stat.value}
              </div>
              
              {/* Stat Label */}
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#6b7280',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

