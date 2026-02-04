import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Download, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustMetrics = [
  { icon: Award, value: '7+', label: 'Years Experience' },
  { icon: TrendingUp, value: '38%', label: 'Avg. Traffic Growth' },
  { icon: Users, value: '50+', label: 'Projects Delivered' },
  { icon: BarChart3, value: '4.5:1', label: 'Avg. ROAS' },
];

function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericMatch = value.match(/[\d.:]+/);
      if (numericMatch) {
        const targetStr = numericMatch[0];
        const hasColon = targetStr.includes(':');
        const hasTimes = value.includes('×') || value.includes('x');
        const hasPercent = value.includes('%');
        const hasPlus = value.includes('+');

        let start = 0;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);

          let formatted = value;
          if (!hasColon && !hasTimes) {
            const targetNum = parseFloat(targetStr);
            const current = start + (targetNum - start) * easeOut;
            formatted = current % 1 === 0 ? Math.round(current).toString() : current.toFixed(1);
            if (hasPercent) formatted += '%';
            if (hasPlus && current > 0) formatted = '+' + formatted;
          }

          setDisplayValue(formatted);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Subtle Futuristic Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl orb-1" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-200/15 to-transparent rounded-full blur-3xl orb-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-200/10 to-transparent rounded-full blur-3xl orb-3" />

        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              SEO Manager & Organic Growth Strategist
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Turning Search Intent Into{' '}
              <span className="text-gradient">Business Revenue</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              I help B2B SaaS and professional services brands scale organic traffic through
              technical excellence, data-driven content strategies, and measurable ROI.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                size="lg"
                className="gap-2 border-2 border-transparent bg-slate-900 hover:bg-slate-800 text-white px-6 py-5 text-base font-medium group shadow-lg shadow-slate-900/20"
                onClick={() => scrollToSection('#case-studies')}
              >
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-2 border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-900 hover:text-white px-6 py-5 text-base font-medium transition-all"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 border-t border-slate-200"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {trustMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="text-center sm:text-left"
                  >
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <metric.icon className="w-4 h-4 text-blue-600" />
                      <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                        <AnimatedCounter value={metric.value} />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Professional Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Animated Background Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-dashed border-slate-300/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-12px' }}
              />

              {/* Secondary Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border border-slate-200/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                style={{ margin: '-24px' }}
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-emerald-100/30 to-violet-100/40 rounded-3xl blur-2xl transform scale-110" />

              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-2 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden group">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-violet-500" />

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                  <img
                    src="/images/polished-profile.png"
                    alt="Ehtasham Afzal - SEO Manager"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />

                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-lg" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/40 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/40 rounded-bl-lg" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-lg" />
                </div>

                {/* Floating Badge - Organic Traffic */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-3 -left-3 bg-white rounded-xl p-3 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">+38%</p>
                      <p className="text-xs text-slate-500">Organic Growth</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge - Experience */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">7+</p>
                      <p className="text-xs text-slate-500">Years Exp.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 border-2 border-slate-200 rounded-2xl" />
              <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-slate-100 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
