import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const providerLogos = [
  "https://images.prismic.io/go1-com/Z-vas3dAxsiBwLA1_Maskgroup-10.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-vasndAxsiBwLAz_Maskgroup-9.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z--5I3dAxsiBwU1S_Maskgroup-1.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-_FMHdAxsiBwVNp_Maskgroup.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-veondAxsiBwLGE_Maskgroup-13.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-P1F3dAxsiBv7KG_Maskgroup-1.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-P1GHdAxsiBv7KH_Maskgroup-2.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z---mXdAxsiBwU5__Maskgroup-2.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z91GZTiBA97Giwwv_EasyLama.png?auto=format%2Ccompress&fit=max&w=150",
  "https://images.prismic.io/go1-com/Z-_Tm3dAxsiBwVly_Maskgroup.png?auto=format%2Ccompress&fit=max&w=150",
];

export const ContentProvidersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-primary font-medium mb-3">Content providers</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Engaging learning content from 250+ providers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cover your compliance and skill development needs with high-quality, interactive content and pre-curated playlists in 40 languages
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative mb-6">
        <div className="flex marquee">
          {[...providerLogos, ...providerLogos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-6">
              <div className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
                <img
                  src={logo}
                  alt="Content provider logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div className="relative mb-12">
        <div className="flex marquee-reverse">
          {[...providerLogos.slice().reverse(), ...providerLogos.slice().reverse()].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-6">
              <div className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
                <img
                  src={logo}
                  alt="Content provider logo"
                  className="h-10 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center">
        <Button variant="outline" size="lg">
          Learn more
        </Button>
      </div>
    </section>
  );
};
