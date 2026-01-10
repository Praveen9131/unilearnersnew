import { motion } from "framer-motion";
import { 
  OpenAI, Anthropic, Claude, Gemini, Mistral, LlamaIndex, Cohere, Perplexity, Groq, DeepSeek, Qwen,
  Baichuan, Baidu, ByteDance, ChatGLM, CodeGeeX, Anyscale, AssemblyAI, Bedrock, AzureAI, Apple
} from '@lobehub/icons';

// Popular AI/LLM icons using @lobehub/icons React components - All icons in horizontal line
const aiIcons = [
  { name: "OpenAI", slug: "openai", Icon: OpenAI },
  { name: "Anthropic", slug: "anthropic", Icon: Anthropic },
  { name: "Claude", slug: "claude", Icon: Claude },
  { name: "Google Gemini", slug: "gemini", Icon: Gemini },
  { name: "Mistral AI", slug: "mistral", Icon: Mistral },
  { name: "Llama", slug: "llama", Icon: LlamaIndex },
  { name: "Cohere", slug: "cohere", Icon: Cohere },
  { name: "Perplexity", slug: "perplexity", Icon: Perplexity },
  { name: "Groq", slug: "groq", Icon: Groq },
  { name: "DeepSeek", slug: "deepseek", Icon: DeepSeek },
  { name: "Qwen", slug: "qwen", Icon: Qwen },
  { name: "Baichuan", slug: "baichuan", Icon: Baichuan },
  { name: "Baidu", slug: "baidu", Icon: Baidu },
  { name: "ByteDance", slug: "bytedance", Icon: ByteDance },
  { name: "ChatGLM", slug: "chatglm", Icon: ChatGLM },
  { name: "CodeGeeX", slug: "codegeex", Icon: CodeGeeX },
  { name: "Anyscale", slug: "anyscale", Icon: Anyscale },
  { name: "AssemblyAI", slug: "assemblyai", Icon: AssemblyAI },
  { name: "Bedrock", slug: "bedrock", Icon: Bedrock },
  { name: "Azure AI", slug: "azureai", Icon: AzureAI },
  { name: "Apple", slug: "apple", Icon: Apple },
];

export const AIIconsSection = () => {
  return (
    <section 
      className="py-20 lg:py-32 overflow-hidden"
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
          padding: '0 2rem'
        }}
      >
        {/* Section Header */}
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
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: '#6b7280',
              fontWeight: 500,
              marginBottom: '1rem',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            AI & LLM Technologies
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
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Powered by leading AI platforms
          </h2>
          <p 
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '1.5rem auto 0',
              lineHeight: '1.7',
              textAlign: 'center',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
            }}
          >
            Unilearners integrates with the world's most advanced AI and LLM technologies
          </p>
        </motion.div>

        {/* Horizontal Scrolling Icons */}
        <div 
          className="relative"
          style={{
            overflow: 'hidden',
            width: '100%',
            marginTop: '3rem'
          }}
        >
          <div 
            className="flex marquee"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              willChange: 'transform',
              width: 'fit-content'
            }}
          >
            {/* Duplicate icons for seamless infinite loop - using 2 sets for -50% animation */}
            {[...aiIcons, ...aiIcons].map((icon, i) => (
              <div
                key={`${icon.slug}-${i}`}
                className="flex-shrink-0"
                style={{
                  padding: '0 1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2.5rem 3rem',
                    background: 'white',
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease',
                    minWidth: '280px',
                    height: '180px',
                    width: '280px',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  {icon.Icon && icon.Icon.Combine ? (
                    <icon.Icon.Combine size={56} type={'color'} />
                  ) : icon.Icon && icon.Icon.Color ? (
                    <icon.Icon.Color size={56} />
                  ) : (
                    <div style={{ color: '#6b7280', fontSize: '0.875rem', textAlign: 'center', fontWeight: 500 }}>
                      {icon.name}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

