import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Search,
  FileText,
  BarChart3,
  Users,
  Code,
  Megaphone,
  Mail,
  Cpu,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    id: 'technical',
    icon: Search,
    title: 'Technical SEO',
    skills: [
      { name: 'JavaScript SEO', level: 90 },
      { name: 'Schema Markup', level: 92 },
      { name: 'Core Web Vitals', level: 88 },
      { name: 'Log File Analysis', level: 82 },
      { name: 'XML Sitemaps & Robots.txt', level: 95 },
      { name: 'Canonicalization', level: 90 },
    ],
  },
  {
    id: 'content',
    icon: FileText,
    title: 'Content & Strategy',
    skills: [
      { name: 'Keyword Research', level: 95 },
      { name: 'Content Gap Analysis', level: 88 },
      { name: 'Search Intent Mapping', level: 90 },
      { name: 'Content Briefs', level: 85 },
      { name: 'Editorial Planning', level: 82 },
    ],
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analytics & Tools',
    skills: [
      { name: 'Google Analytics 4', level: 95 },
      { name: 'Google Search Console', level: 95 },
      { name: 'Ahrefs & SEMrush', level: 90 },
      { name: 'Screaming Frog', level: 92 },
      { name: 'Looker Studio', level: 85 },
      { name: 'Python for SEO', level: 70 },
    ],
  },
  {
    id: 'soft',
    icon: Users,
    title: 'Soft Skills',
    skills: [
      { name: 'Stakeholder Management', level: 88 },
      { name: 'Cross-functional Collab', level: 90 },
      { name: 'Data Storytelling', level: 85 },
      { name: 'Training & Mentoring', level: 82 },
    ],
  },
];

const tools = [
  {
    category: 'SEO Platforms',
    icon: Search,
    items: ['SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Moz Pro', 'Surfer SEO'],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    hoverBorder: 'hover:border-blue-300',
    iconColor: 'text-blue-600',
  },
  {
    category: 'Analytics & Tracking',
    icon: BarChart3,
    items: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Looker Studio', 'Power BI', 'Microsoft Clarity'],
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    hoverBorder: 'hover:border-emerald-300',
    iconColor: 'text-emerald-600',
  },
  {
    category: 'Paid Media',
    icon: Megaphone,
    items: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Ads', 'Retargeting Platforms'],
    color: 'bg-violet-50',
    borderColor: 'border-violet-200',
    hoverBorder: 'hover:border-violet-300',
    iconColor: 'text-violet-600',
  },
  {
    category: 'CMS & Development',
    icon: Code,
    items: ['WordPress', 'Strapi', 'React', 'HTML/CSS', 'JavaScript', 'PHP'],
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    hoverBorder: 'hover:border-amber-300',
    iconColor: 'text-amber-600',
  },
  {
    category: 'AI & Automation',
    icon: Cpu,
    items: ['ChatGPT', 'Jasper AI', 'Surfer AI', 'Claude', 'Content Optimization Tools'],
    color: 'bg-rose-50',
    borderColor: 'border-rose-200',
    hoverBorder: 'hover:border-rose-300',
    iconColor: 'text-rose-600',
  },
  {
    category: 'Email & CRM',
    icon: Mail,
    items: ['HubSpot', 'ActiveCampaign', 'Mailchimp', 'Email Automation', 'Segmentation'],
    color: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    hoverBorder: 'hover:border-cyan-300',
    iconColor: 'text-cyan-600',
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [animatedLevel, setAnimatedLevel] = useState(0);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-sm text-slate-500 font-medium">{animatedLevel}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
          onUpdate={(latest: any) => {
            if (typeof latest.width === 'string') {
              setAnimatedLevel(Math.round(parseFloat(latest.width)));
            }
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('technical');

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 lg:py-28 bg-slate-50/50 relative"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-gradient-to-r from-blue-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gradient-to-l from-emerald-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm bg-violet-50 text-violet-700 border border-violet-200">
            Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built over 5+ years of hands-on SEO experience 
            across diverse industries.
          </p>
        </motion.div>

        {/* Skills Matrix */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Skill Categories</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 p-3.5 rounded-lg text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <category.icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-white' : 'text-slate-400'}`} />
                  <span className="font-medium text-sm">{category.title}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-5">
              {skillCategories.find((cat) => cat.id === activeCategory)?.title}
            </h3>
            <div className="space-y-4">
              {activeSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Grid - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-6 text-center">
            Tools & Platforms
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className={`group bg-white rounded-xl p-5 border ${tool.borderColor} ${tool.hoverBorder} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${tool.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <tool.icon className={`w-5 h-5 ${tool.iconColor}`} />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{tool.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tool.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600 group-hover:bg-slate-200 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
