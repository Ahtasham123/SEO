import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Settings,
  FileText,
  ShoppingCart,
  BarChart3,
  Link,
  ArrowRightLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    icon: Settings,
    title: 'Technical SEO Audits',
    description: 'Comprehensive site analysis covering crawl optimization, indexability, and Core Web Vitals enhancement.',
    features: [
      'Site crawl & technical analysis',
      'Core Web Vitals optimization',
      'Schema markup implementation',
      'Indexability & crawl budget',
    ],
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverBorder: 'group-hover:border-blue-300',
  },
  {
    id: 2,
    icon: FileText,
    title: 'Content Strategy & SEO',
    description: 'Data-driven content planning with keyword clustering and search intent optimization.',
    features: [
      'Keyword research & clustering',
      'Content gap analysis',
      'Search intent mapping',
      'Editorial calendar planning',
    ],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    hoverBorder: 'group-hover:border-emerald-300',
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: 'E-commerce SEO',
    description: 'Product page optimization and category structure for improved online store visibility.',
    features: [
      'Product page optimization',
      'Category structure design',
      'Faceted navigation SEO',
      'Review schema setup',
    ],
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    hoverBorder: 'group-hover:border-amber-300',
  },
  {
    id: 4,
    icon: BarChart3,
    title: 'SEO Analytics & Reporting',
    description: 'Custom dashboards and actionable insights using GA4, GTM, and Looker Studio.',
    features: [
      'GA4 & GTM implementation',
      'Custom dashboard creation',
      'Attribution modeling',
      'Monthly performance reports',
    ],
    color: 'bg-violet-50',
    iconColor: 'text-violet-600',
    hoverBorder: 'group-hover:border-violet-300',
  },
  {
    id: 5,
    icon: Link,
    title: 'Link Building & Digital PR',
    description: 'Authority building through strategic outreach and content partnerships.',
    features: [
      'Digital PR campaigns',
      'Strategic outreach',
      'Content partnerships',
      'Authority link acquisition',
    ],
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    hoverBorder: 'group-hover:border-rose-300',
  },
  {
    id: 6,
    icon: ArrowRightLeft,
    title: 'SEO Migrations',
    description: 'Risk-free platform migrations with traffic retention protocols.',
    features: [
      'Pre-migration audits',
      'Redirect mapping',
      'Traffic monitoring',
      'Post-migration validation',
    ],
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    hoverBorder: 'group-hover:border-cyan-300',
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 lg:py-28 bg-white relative"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-emerald-50 text-emerald-700 border border-emerald-200">
            What I Offer
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            SEO Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive SEO solutions tailored to drive measurable results
            for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group h-full"
            >
              <div className={`relative bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${service.hoverBorder}`}>
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-5 flex-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="gap-2 text-slate-700 hover:text-blue-600 hover:bg-blue-50 p-0 h-auto justify-start text-sm font-medium group/btn"
                  onClick={scrollToContact}
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-semibold text-slate-900 mb-1">
                Need a Custom SEO Solution?
              </h4>
              <p className="text-slate-600 text-sm">
                Let's discuss your specific requirements and goals.
              </p>
            </div>
            <Button
              className="gap-2 bg-slate-900 hover:bg-slate-800 whitespace-nowrap text-sm"
              onClick={scrollToContact}
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
