import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, DollarSign, Target, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    client: 'Remotebase',
    industry: 'SaaS',
    slug: 'remotebase',
    title: 'Website Migration & Organic Growth Strategy',
    description: 'Led complete website migration to React + Strapi, optimizing Core Web Vitals and achieving significant growth.',
    metrics: [
      { icon: TrendingUp, value: '+38%', label: 'Organic Traffic' },
      { icon: Target, value: '2×', label: 'Demo Requests' },
      { icon: DollarSign, value: '+85%', label: 'ROAS' },
    ],
    tags: ['Technical SEO', 'Migration', 'Team Leadership'],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconColor: 'text-blue-600',
    hoverBorder: 'hover:border-blue-300',
  },
  {
    id: 2,
    client: 'Clear House Accountants',
    industry: 'Professional Services',
    slug: 'clear-house',
    title: 'Content Strategy & Lead Generation',
    description: 'Developed topic clustering strategy and implemented CRO tools to drive qualified leads.',
    metrics: [
      { icon: TrendingUp, value: '+145%', label: 'Organic Traffic' },
      { icon: Target, value: '+65%', label: 'Qualified Leads' },
      { icon: DollarSign, value: '+32%', label: 'Demo Bookings' },
    ],
    tags: ['Content Strategy', 'CRO', 'Lead Gen'],
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
  },
  {
    id: 3,
    client: 'Canz Marketing',
    industry: 'Agency',
    slug: 'canz-marketing',
    title: 'Digital PR & Authority Building',
    description: 'Executed strategic digital PR campaign securing high-authority backlinks and improving domain authority.',
    metrics: [
      { icon: TrendingUp, value: '+12', label: 'DA Points' },
      { icon: Target, value: '150+', label: 'Backlinks' },
      { icon: DollarSign, value: '+45%', label: 'Branded Search' },
    ],
    tags: ['Digital PR', 'Link Building', 'Brand'],
    color: 'bg-violet-50',
    borderColor: 'border-violet-200',
    iconColor: 'text-violet-600',
    hoverBorder: 'hover:border-violet-300',
  },
  {
    id: 4,
    client: 'Swipe Wires',
    industry: 'Web Development',
    slug: 'swipe-wires',
    title: 'Technical SEO & Performance Optimization',
    description: 'Conducted comprehensive technical audits and developed optimized components for improved visibility.',
    metrics: [
      { icon: TrendingUp, value: '+35', label: 'Rankings' },
      { icon: Target, value: '+48%', label: 'Organic CTR' },
      { icon: DollarSign, value: '+65%', label: 'Conversions' },
    ],
    tags: ['Technical SEO', 'Performance', 'Dev'],
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    hoverBorder: 'hover:border-amber-300',
  },
];

export function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="scroll-mt-24 py-20 lg:py-28 bg-slate-50/50 relative"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-slate-100 text-slate-700 border border-slate-200">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            SEO Case Studies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real results from real clients. Each case study breaks down the strategy,
            execution, and measurable outcomes.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group h-full"
            >
              <Link
                to={`/case-studies/${study.slug}`}
                className="block h-full"
              >
                <div className={`relative bg-white rounded-2xl overflow-hidden border border-slate-200 ${study.hoverBorder} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col`}>
                  {/* Card Header */}
                  <div className={`relative p-6 ${study.color} border-b ${study.borderColor}`}>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-white/80 text-slate-700 border-0 backdrop-blur-sm text-xs font-medium">
                        {study.industry}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{study.client}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h4>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg ${study.color} mb-2`}>
                            <metric.icon className={`w-4 h-4 ${study.iconColor}`} />
                          </div>
                          <p className="text-lg font-bold text-slate-900">{metric.value}</p>
                          <p className="text-xs text-slate-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 group transition-all"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
