import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTABanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-0 bg-white relative"
    >
      {/* Full Width CTA Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 grid-bg" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
              Ready to Scale Your Organic Traffic?
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let us discuss how I can help you achieve measurable SEO results.
              I am currently open to new opportunities and consulting projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-5 text-base font-medium group shadow-lg"
              onClick={() => window.open('https://calendly.com', '_blank')}
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-white text-white hover:bg-white hover:!text-emerald-700 px-6 py-5 text-base transition-all duration-300"
              onClick={() => window.location.href = 'mailto:ahtashamafzal@gmail.com'}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-emerald-100 text-sm">
              <a
                href="mailto:ahtashamafzal@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                ahtashamafzal@gmail.com
              </a>
              <span className="hidden sm:block text-emerald-300/50">•</span>
              <a
                href="tel:+447762127314"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                +44 7762 127314
              </a>
              <span className="hidden sm:block text-emerald-300/50">•</span>
              <a
                href="https://linkedin.com/in/ehtashamafzal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
            <p className="mt-4 text-sm text-emerald-200/70">
              Based in Belfast, UK • Open to remote, hybrid, or on-site positions
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
