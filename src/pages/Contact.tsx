import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    inquiryType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Get Web3Forms access key from environment variable
  const accessKey = (import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY as string) || '892609b1-714f-4118-9cc1-995bc0e8cbab';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          from_email: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          organisation: formData.organisation || 'Not provided',
          inquiry_type: formData.inquiryType || 'Not specified',
          message: formData.message,
          // Additional metadata
          'Company/Organization': formData.organisation || 'Not provided',
          'Inquiry Type': formData.inquiryType || 'Not specified',
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organisation: '',
          inquiryType: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Contact Section - Split Layout */}
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
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'flex-start',
              minHeight: 'auto'
            }}>
              {/* Left Side - Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  maxHeight: 'clamp(400px, 60vh, 850px)',
                  margin: '0 auto',
                  marginTop: '0',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
                  background: '#f5f3f0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="/contact-image.png"
                  alt="Contact Unilearners - Professional team collaboration"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '800px',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.style.background = 'linear-gradient(135deg, #0e7c86 0%, #086267 100%)';
                    e.currentTarget.parentElement.style.display = 'flex';
                    e.currentTarget.parentElement.style.alignItems = 'center';
                    e.currentTarget.parentElement.style.justifyContent = 'center';
                    e.currentTarget.parentElement.innerHTML = '<div style="color: white; font-size: 1.5rem; text-align: center; padding: 2rem;">Contact Us</div>';
                  }}
                />
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '1rem 0'
                }}
              >
                {/* Heading */}
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 5vw, 2rem)',
                    fontWeight: 600,
                    color: '#1f2937',
                    marginBottom: '1rem',
                    lineHeight: '1.3',
                    letterSpacing: '-0.5px',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                >
                  Take the Plunge into Positive Change
                </h2>

                {/* Contact Information */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: '#6b7280',
                    marginBottom: '1rem',
                    lineHeight: '1.6',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                  }}
                >
                  You can reach us Monday to Friday 9 AM to 6 PM IST via
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} color="#0e7c86" />
                    <a
                      href="tel:+916302952167"
                      style={{
                        fontSize: '0.9rem',
                        color: '#1f2937',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0e7c86';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1f2937';
                      }}
                    >
                      +91 6302952167
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="#0e7c86" />
                    <a
                      href="mailto:info@unilearners.com"
                      style={{
                        fontSize: '0.9rem',
                        color: '#1f2937',
                        textDecoration: 'none',
                        fontWeight: 500,
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0e7c86';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1f2937';
                      }}
                    >
                      info@unilearners.com
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        fontSize: '0.9rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                        background: 'white',
                        color: '#1f2937',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label 
                      htmlFor="email"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        fontSize: '0.9rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                        background: 'white',
                        color: '#1f2937',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div>
                    <label 
                      htmlFor="phone"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      Phone
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        background: 'white',
                        gap: '0.5rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                      }}
                      >
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1f2937' }}>IN</span>
                        <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>+91</span>
                        <span style={{ fontSize: '0.7rem', color: '#9ca3af' }}>▼</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        style={{
                          flex: 1,
                          padding: '0.7rem 0.875rem',
                          borderRadius: '0.5rem',
                          border: '1px solid #e5e7eb',
                          fontSize: '0.9rem',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                          background: 'white',
                          color: '#1f2937',
                          transition: 'all 0.2s ease',
                          boxSizing: 'border-box'
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = '#0e7c86';
                          e.currentTarget.style.outline = 'none';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Organisation */}
                  <div>
                    <label 
                      htmlFor="organisation"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="Enter your organisation"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        fontSize: '0.9rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                        background: 'white',
                        color: '#1f2937',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* What are you reaching out for? */}
                  <div>
                    <label 
                      htmlFor="inquiryType"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      What are you reaching out for?
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        fontSize: '0.9rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                        background: 'white',
                        color: '#1f2937',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                        appearance: 'none',
                        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%236b7280\' d=\'M6 9L1 4h10z\'/%3E%3C/svg%3E")',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.875rem center',
                        paddingRight: '2.25rem'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <option value="">Customer Query</option>
                      <option value="courses">Course Information</option>
                      <option value="internships">Internship Programs</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="career">Career Guidance</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: '#1f2937',
                        marginBottom: '0.4rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your message"
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.875rem',
                        borderRadius: '0.5rem',
                        border: '1px solid #e5e7eb',
                        fontSize: '0.9rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                        background: 'white',
                        color: '#1f2937',
                        transition: 'all 0.2s ease',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                        lineHeight: '1.5'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#0e7c86';
                        e.currentTarget.style.outline = 'none';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(14, 124, 134, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '0.75rem 1rem',
                        background: '#f0fdf4',
                        border: '1px solid #15803d',
                        borderRadius: '0.5rem',
                        color: '#15803d',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      <CheckCircle2 size={18} />
                      <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: '0.75rem 1rem',
                        background: '#fef2f2',
                        border: '1px solid #dc2626',
                        borderRadius: '0.5rem',
                        color: '#dc2626',
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
                      }}
                    >
                      <AlertCircle size={18} />
                      <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.5rem',
                      background: isSubmitting ? '#9ca3af' : '#0e7c86',
                      color: 'white',
                      borderRadius: '0.5rem',
                      border: 'none',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
                      transition: 'all 0.2s ease',
                      marginTop: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = '#086267';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = '#0e7c86';
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
