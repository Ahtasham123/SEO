import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  TrendingUp,
  Users,
  Link2,
  FileText,
  DollarSign,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    name: 'Google Analytics Individual Qualification',
    issuer: 'Google',
    logoUrl: 'https://cdn.simpleicons.org/google/white',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    name: 'Google Ads Search Certification',
    issuer: 'Google',
    logoUrl: 'https://cdn.simpleicons.org/googleads/white',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
  },
  {
    name: 'Google Search Console Certification',
    issuer: 'Google',
    logoUrl: 'https://cdn.simpleicons.org/googlesearchconsole/white',
    color: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    textColor: 'text-emerald-700',
  },
  {
    name: 'SEMrush SEO Fundamentals',
    issuer: 'SEMrush',
    logoUrl: 'https://cdn.simpleicons.org/semrush/white',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    textColor: 'text-violet-700',
  },
  {
    name: 'SEMrush SEO Toolkit',
    issuer: 'SEMrush',
    logoUrl: 'https://cdn.simpleicons.org/semrush/white',
    color: 'from-fuchsia-500 to-pink-500',
    bgColor: 'bg-fuchsia-50',
    borderColor: 'border-fuchsia-200',
    textColor: 'text-fuchsia-700',
  },
  {
    name: 'Meta Digital Marketing Associate',
    issuer: 'Meta',
    logoUrl: 'https://cdn.simpleicons.org/meta/white',
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    name: 'HubSpot SEO Certification',
    issuer: 'HubSpot',
    logoUrl: 'https://cdn.simpleicons.org/hubspot/white',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
  },
  {
    name: 'Advanced Content & SEO',
    issuer: 'Coursera / UC Davis',
    logoUrl: 'https://cdn.simpleicons.org/coursera/white',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-700',
  },
];

const keyAchievements = [
  {
    icon: TrendingUp,
    metric: '25+',
    label: 'SEO Campaigns',
    description: 'Managed across SaaS, B2B, and professional services',
  },
  {
    icon: Award,
    metric: '85%',
    label: 'Avg. Traffic Growth',
    description: 'Average organic growth within 12 months',
  },
  {
    icon: Link2,
    metric: '250+',
    label: 'Backlinks Built',
    description: 'High-quality links (DR 60+) via digital PR',
  },
  {
    icon: FileText,
    metric: '500+',
    label: 'Pages Optimized',
    description: 'Average 45% CTR improvement',
  },
  {
    icon: DollarSign,
    metric: '£50k+',
    label: 'Ad Budget Managed',
    description: 'Average 4.5:1 ROAS across platforms',
  },
  {
    icon: Users,
    metric: '5+',
    label: 'Team Members',
    description: 'Mentored junior SEO specialists',
  },
];

export function Certifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="certifications"
      ref={containerRef}
      className="py-20 lg:py-28 bg-slate-50/50 relative"
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
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-amber-50 text-amber-700 border border-amber-200">
            Credentials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Continuous learning and proven results backed by industry-recognized
            certifications and measurable impact.
          </p>
        </motion.div>

        {/* Certifications Grid - Badge Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
            Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.04 }}
                className={`group relative bg-white rounded-xl p-4 border ${cert.borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

                {/* Logo Badge */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform p-3`}>
                  <img src={cert.logoUrl} alt={`${cert.issuer} logo`} className="w-full h-full object-contain brightness-0 invert" />
                </div>

                {/* Content */}
                <h4 className={`font-semibold text-slate-900 text-sm mb-1 leading-snug group-hover:${cert.textColor} transition-colors`}>
                  {cert.name}
                </h4>
                <p className="text-xs text-slate-500">{cert.issuer}</p>

                {/* Verified Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
            Key Achievements & Metrics
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.06 }}
                className="group relative bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Content */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                    <achievement.icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 mb-0.5">{achievement.metric}</p>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{achievement.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
