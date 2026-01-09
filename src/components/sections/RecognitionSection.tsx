import { motion } from "framer-motion";

const badges = [
  "https://images.prismic.io/go1-com/aTrMPXNYClf9oEDu_OnlineCourseProviders_Leader_Leader.png?auto=format%2Ccompress&fit=max&w=150",
  "https://go1-com.cdn.prismic.io/go1-com/aNM8JJ5xUNkB1Cc3_SoftwareAdvice_frontrunners.svg?fit=max&w=150",
  "https://images.prismic.io/go1-com/aTrMK3NYClf9oEDn_OnlineCourseProviders_HighestUserAdoption_Mid-Market_Adoption.png?auto=format%2Ccompress&fit=max&w=150",
  "https://go1-com.cdn.prismic.io/go1-com/aNM7aZ5xUNkB1Ccr_OnlineCourseProviders_MomentumLeader_Leader.svg?fit=max&w=150",
  "https://go1-com.cdn.prismic.io/go1-com/aNM8JZ5xUNkB1Cc4_Capterra_2025_Shortlist.svg?fit=max&w=150",
  "https://go1-com.cdn.prismic.io/go1-com/aNM7a55xUNkB1Cct_OnlineCourseProviders_Leader_Leader.svg?fit=max&w=150",
];

export const RecognitionSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm font-medium mb-8"
        >
          Recognized by industry experts
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {badges.map((badge, index) => (
            <img
              key={index}
              src={badge}
              alt="Industry recognition badge"
              className="h-16 md:h-20 w-auto"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
