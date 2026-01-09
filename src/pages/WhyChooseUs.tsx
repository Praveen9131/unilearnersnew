import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  BookOpen, 
  Briefcase, 
  Users, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  Target,
  Zap,
  Heart,
  Globe,
  Shield
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "500+ Expert-Led Courses",
    description: "Access comprehensive courses across technology, business, design, and more. Learn from industry experts with hands-on projects and real-world applications.",
    color: "#0e7c86"
  },
  {
    icon: Briefcase,
    title: "200+ Internship Opportunities",
    description: "Gain practical experience with leading companies. Build your portfolio, develop professional skills, and increase your job prospects through real-world projects.",
    color: "#0e7c86"
  },
  {
    icon: Users,
    title: "50,000+ Active Students",
    description: "Join a thriving community of learners. Network with peers, collaborate on projects, and grow together in a supportive learning environment.",
    color: "#0e7c86"
  },
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Earn certificates that employers value. Our programs are designed to meet industry standards and help you stand out in the job market.",
    color: "#0e7c86"
  },
  {
    icon: TrendingUp,
    title: "95% Placement Rate",
    description: "Our dedicated career support team helps you land your dream job. From resume building to interview prep, we guide you every step of the way.",
    color: "#0e7c86"
  },
  {
    icon: Clock,
    title: "Flexible Learning Schedule",
    description: "Learn at your own pace with lifetime access to course materials. Balance your studies with work and personal commitments seamlessly.",
    color: "#0e7c86"
  },
  {
    icon: CheckCircle,
    title: "98% Course Completion Rate",
    description: "Our engaging curriculum and supportive community keep students motivated. Complete your courses and achieve your learning goals.",
    color: "#0e7c86"
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "Get customized recommendations based on your goals and skill level. Our AI-powered platform adapts to your learning style and pace.",
    color: "#0e7c86"
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "Learn using the latest tools and technologies. Stay ahead of industry trends with up-to-date curriculum and modern learning platforms.",
    color: "#0e7c86"
  },
  {
    icon: Heart,
    title: "Student-Centric Approach",
    description: "Your success is our priority. We provide personalized support, mentorship, and resources to help you achieve your career aspirations.",
    color: "#0e7c86"
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Connect with companies and opportunities worldwide. Our platform opens doors to international internships and remote work possibilities.",
    color: "#0e7c86"
  },
  {
    icon: Shield,
    title: "Lifetime Access & Support",
    description: "Once enrolled, you have lifetime access to course materials and ongoing support. Learn, revisit, and grow at your convenience.",
    color: "#0e7c86"
  }
];

const stats = [
  { value: "50,000+", label: "Active Students" },
  { value: "500+", label: "Courses Available" },
  { value: "200+", label: "Internship Programs" },
  { value: "95%", label: "Placement Rate" },
  { value: "100+", label: "Partner Companies" },
  { value: "98%", label: "Completion Rate" }
];

export default function WhyChooseUs() {
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
                Why Choose Unilearners?
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
                Your complete learning and career platform. Everything you need to build skills, 
                gain experience, and launch your career—all in one place.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-16 lg:py-20"
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '2rem',
                textAlign: 'center'
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div 
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: '#0e7c86',
                      marginBottom: '0.5rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    style={{
                      fontSize: '1rem',
                      color: '#6b7280',
                      fontWeight: 500
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid Section */}
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
                What Makes Us Different
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
                Discover the unique advantages that set Unilearners apart from other learning platforms
              </p>
            </motion.div>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}
            >
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  style={{
                    padding: '2rem',
                    background: 'white',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <div 
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '0.75rem',
                      background: `${benefit.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem'
                    }}
                  >
                    <benefit.icon 
                      size={28} 
                      color={benefit.color}
                    />
                  </div>
                  <h3 
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                      color: '#1f2937',
                      marginBottom: '1rem',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    style={{
                      fontSize: '1rem',
                      color: '#6b7280',
                      lineHeight: '1.7',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                    }}
                  >
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <h2 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
              >
                Ready to Start Your Journey?
              </h2>
              <p 
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}
              >
                Join thousands of students who have transformed their careers with Unilearners. 
                Start learning today and take the first step towards your dream career.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#0e7c86',
                  padding: '1rem 2.5rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f3f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                }}
              >
                Get Started Today
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

