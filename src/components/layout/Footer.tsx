import { Linkedin, Youtube, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Courses: [
    "Browse All Courses",
    "Data Science & Analytics",
    "Web Development",
    "AI & Machine Learning",
    "Cloud Computing",
    "UI/UX Design",
    "Digital Marketing",
    "View Course Catalog"
  ],
  Internships: [
    "Browse Internships",
    "Software Development",
    "Data Science Internships",
    "Design Internships",
    "Marketing Internships",
    "Cloud Engineering",
    "Remote Opportunities",
    "Apply Now"
  ],
  Resources: [
    "Success Stories",
    "Student Testimonials",
    "Career Guides",
    "Learning Resources",
    "Webinars & Events",
    "Blog & Articles",
    "Download Brochure"
  ],
  "Student Support": [
    "Placement Support",
    "Career Counseling",
    "Resume Building",
    "Interview Preparation",
    "Portfolio Development",
    "Job Placement",
    "Alumni Network"
  ],
  Company: [
    "About Us",
    "Our Mission",
    "Contact Us",
    "Careers",
    "Partnerships",
    "Press & Media",
    "Become an Instructor"
  ],
  "Help & Support": [
    "FAQs",
    "Student Support",
    "Course Help",
    "Technical Support",
    "Refund Policy",
    "Terms of Service",
    "Privacy Policy"
  ],
};

export const Footer = () => {
  return (
    <footer 
      style={{
        background: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        marginTop: '4rem',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
      }}
    >
      {/* Footer Main */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem) clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(2rem, 4vw, 3rem)'
        }}
      >
        {/* Top Section - Logo and Description */}
        <div
          className="flex flex-col md:flex-row justify-between items-start"
          style={{
            gap: 'clamp(2rem, 5vw, 4rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            borderBottom: '1px solid #e5e7eb'
          }}
        >
          {/* Logo and Description */}
          <div
            style={{
              maxWidth: '400px',
              flexShrink: 0
            }}
          >
            <Link
              to="/"
              style={{
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                fontWeight: 400,
                color: '#202124',
                letterSpacing: '0',
                marginBottom: '1rem',
                lineHeight: 1,
                textDecoration: 'none',
                display: 'block'
              }}
            >
              Unilearners
            </Link>
            <p
              style={{
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                color: '#6b7280',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}
            >
              Empowering students worldwide with world-class courses and real-world internship opportunities. 
              Build skills, gain experience, and launch your dream career with industry-leading programs.
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <a
                href="https://www.linkedin.com/company/unilearners1"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0e7c86';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.color = '#6b7280';
                }}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://youtube.com/@unilearners"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ea4335';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.color = '#6b7280';
                }}
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://twitter.com/unilearners"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1da1f2';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.color = '#6b7280';
                }}
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com/unilearners"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '0.5rem',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                  e.currentTarget.style.color = '#6b7280';
                }}
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: 'clamp(2rem, 4vw, 3rem)',
              flex: 1
            }}
          >
          {Object.entries(footerLinks).map(([title, links]) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.01em'
                  }}
                >
                  {title}
                </div>
                {links.map((link) => {
                  const routeMap: Record<string, string> = {
                    "Browse All Courses": "/courses",
                    "Browse Internships": "/internships",
                    "About Us": "/about",
                    "Contact Us": "/contact",
                    "View Course Catalog": "/courses",
                    "Apply Now": "/internships"
                  };
                  
                  const href = routeMap[link] || "#";
                  const isRoute = !!routeMap[link];
                  const Component = isRoute ? Link : 'a';
                  
                  return (
                    <Component
                      key={link}
                      to={isRoute ? href : undefined}
                      href={!isRoute ? href : undefined}
                      style={{
                        fontSize: '0.9rem',
                        color: '#6b7280',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        lineHeight: '1.6',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0e7c86';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#6b7280';
                      }}
                    >
                      {link}
                    </Component>
                  );
                })}
            </div>
          ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '2rem',
          borderTop: '1px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          background: '#f9fafb'
        }}
      >
        {/* Copyright */}
        <div
          style={{
            fontSize: '0.9rem',
            color: '#6b7280'
          }}
        >
          © {new Date().getFullYear()} Unilearners. All rights reserved.
        </div>

        {/* Legal Links */}
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
        >
          <Link
            to="/privacy"
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0e7c86';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b7280';
            }}
          >
              Privacy Policy
          </Link>
          <Link
            to="/terms"
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0e7c86';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b7280';
            }}
          >
              Terms of Service
          </Link>
          <a
            href="#"
            style={{
              fontSize: '0.9rem',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0e7c86';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#6b7280';
            }}
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
