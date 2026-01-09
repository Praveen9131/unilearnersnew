import { motion } from "framer-motion";

const logos = [
  "https://images.prismic.io/go1-com/Z-vXLXdAxsiBwK9N_Maskgroup-4.png?auto=format%2Ccompress&fit=max&w=200",
  "https://images.prismic.io/go1-com/Z-vXMHdAxsiBwK9R_Maskgroup.png?auto=format%2Ccompress&fit=max&w=200",
  "https://images.prismic.io/go1-com/Z_ZbZndAxsiBwezO_microsoft.png?auto=format%2Ccompress&fit=max&w=200",
  "https://images.prismic.io/go1-com/Z_Y_IndAxsiBweaw_BBCstudios.png?auto=format%2Ccompress&fit=max&w=200",
  "https://images.prismic.io/go1-com/Z_ZbC3dAxsiBweyv_WarnerBrothers.png?auto=format%2Ccompress&fit=max&w=200",
  "https://images.prismic.io/go1-com/Z-vXK3dAxsiBwK9K_Maskgroup-2.png?auto=format%2Ccompress&fit=max&w=200",
];

export const TrustBanner = () => {
  return (
    <section className="py-12 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm font-medium"
        >
          Trusted by over 10,000 organizations
        </motion.p>
      </div>
      
      <div className="relative">
        <div className="flex marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-8 md:px-12">
              <img
                src={logo}
                alt="Trusted company logo"
                className="h-8 md:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
