import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, TrendingUp, Users, Award, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    id: 1,
    role: 'Marketing Manager – SEO, Performance & Growth',
    company: 'Remotebase',
    location: 'United States (Remote)',
    period: 'July 2022 – February 2025',
    type: 'Full-time',
    achievements: [
      { icon: TrendingUp, text: '38% organic traffic increase, 2× demo requests in 6 months' },
      { icon: Users, text: 'Led team of 8 specialists; 40% productivity improvement' },
      { icon: Award, text: 'Features in TechCrunch, WSJ; 150+ backlinks (DR 70+)' },
      { icon: TrendingUp, text: '85% ROAS improvement, 28% CAC reduction' },
    ],
  },
  {
    id: 2,
    role: 'SEO & Digital Marketing Consultant',
    company: 'Canz Marketing',
    location: 'United States (Remote)',
    period: 'February 2022 – January 2023',
    type: 'Part-time',
    achievements: [
      { icon: TrendingUp, text: '30% CPL reduction, 25% campaign efficiency improvement' },
      { icon: Award, text: 'Top 3 local pack rankings for 85% of keywords' },
      { icon: Users, text: '55% increase in inbound leads for SMB clients' },
    ],
  },
  {
    id: 3,
    role: 'Marketing Manager',
    company: 'Clear House Accountants',
    location: 'London, UK (Remote)',
    period: 'July 2020 – July 2022',
    type: 'Full-time',
    achievements: [
      { icon: TrendingUp, text: '145% YoY organic traffic, 65% qualified leads increase' },
      { icon: Award, text: '32% demo booking improvement, 28% form abandonment reduction' },
      { icon: TrendingUp, text: '42% CTR improvement via structured data' },
    ],
  },
  {
    id: 4,
    role: 'SEO Executive & Web Developer',
    company: 'Swipe Wires',
    location: 'Islamabad, Pakistan',
    period: 'November 2018 – June 2020',
    type: 'Full-time',
    achievements: [
      { icon: TrendingUp, text: '35 position improvement in keyword rankings' },
      { icon: Award, text: '48% organic CTR improvement' },
      { icon: Users, text: '65% increase in form submissions' },
    ],
  },
];

const education = [
  {
    degree: 'MSc International Business with Data Analytics',
    school: 'Ulster University',
    location: 'Birmingham, UK',
    period: 'January 2023 – February 2025',
    highlight: 'Dissertation: "The Impact of AI-Generated Content on SEO" - Published findings presented at Digital Marketing Research Conference 2024',
  },
  {
    degree: 'BSc Software Engineering',
    school: 'COMSATS University',
    location: 'Islamabad, Pakistan',
    period: '2014 – 2018',
    highlight: 'Foundation in programming, web development, and software architecture',
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-slate-100 text-slate-700 border border-slate-200">
            Career Journey
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            5+ years of driving organic growth and digital transformation 
            across SaaS, B2B, and professional services.
          </p>
        </motion.div>

        {/* Experience Timeline with Flow Animation */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 lg:-translate-x-px overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-blue-500 via-emerald-500 to-violet-500"
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row gap-6 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 transform -translate-x-1/2 mt-1.5 z-10 shadow-sm">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500"
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={isInView ? { scale: [0, 1.5, 0], opacity: [0.5, 0, 0.5] } : {}}
                    transition={{ duration: 2, delay: index * 0.15 + 0.5, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>

                {/* Content Card with Hover Effect */}
                <div className={`ml-10 lg:ml-0 lg:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                }`}>
                  <div className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500">{exp.type}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                        {exp.period}
                      </Badge>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2.5">
                          <div className="w-6 h-6 rounded-md bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-50 transition-colors">
                            <achievement.icon className="w-3 h-3 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <p className="text-sm text-slate-600 leading-relaxed">{achievement.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-emerald-600 transition-colors">{edu.degree}</h4>
                  <Badge variant="secondary" className="bg-white text-slate-600 text-xs whitespace-nowrap">
                    {edu.period}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-3 text-sm">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>{edu.school}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{edu.location}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{edu.highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
