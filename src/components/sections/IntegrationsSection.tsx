import { motion } from "framer-motion";
import { Layers, BarChart3, BookOpen } from "lucide-react";

const integrationLogos = [
  "https://images.prismic.io/go1-com/Z-PxXndAxsiBv7GU_Maskgroup-4.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxX3dAxsiBv7GV_Maskgroup-5.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/aAo3kvIqRLdaBk37_Maskgroup-1.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxYXdAxsiBv7GX_Maskgroup-7.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxZHdAxsiBv7Ga_Maskgroup-10.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxYndAxsiBv7GY_Maskgroup-8.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxY3dAxsiBv7GZ_Maskgroup-9.png?auto=format%2Ccompress&fit=max&w=100",
  "https://images.prismic.io/go1-com/Z-PxYHdAxsiBv7GW_Maskgroup-6.png?auto=format%2Ccompress&fit=max&w=100",
];

const features = [
  {
    icon: Layers,
    title: "75+ integrations",
  },
  {
    icon: BarChart3,
    title: "Seamless reporting",
  },
  {
    icon: BookOpen,
    title: "Embedded learning",
  },
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 lg:py-32 ivory-gradient overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium mb-3">Integrations</p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cover your compliance and skill development needs with high-quality, interactive content and pre-curated playlists in 40+ languages
          </p>
        </motion.div>
      </div>

      {/* Integration Logos Marquee */}
      <div className="relative mb-16">
        <div className="flex marquee">
          {[...integrationLogos, ...integrationLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-4">
              <div className="bg-card rounded-xl p-4 shadow-sm border border-border w-24 h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Integration logo"
                  className="max-h-12 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{feature.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
