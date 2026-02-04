import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, Code, Zap, Search, Calendar, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function SwipeWiresCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Swipe Wires Case Study: Technical SEO | Ehtasham Afzal';
  }, []);

  const navigateBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              className="gap-2 text-slate-600 hover:text-slate-900"
              onClick={navigateBack}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <a href="/" className="font-semibold text-slate-900">EA</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-amber-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-amber-100 text-amber-700 border-0">Web Development</Badge>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 2018 - June 2020
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Technical SEO & Performance Optimization
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Executed comprehensive technical SEO audits and developed optimized components 
              that significantly improved search visibility and user engagement.
            </p>

            {/* Key Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-amber-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+35</p>
                <p className="text-sm text-slate-500">Ranking Positions</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300">
                <Target className="w-6 h-6 text-amber-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+48%</p>
                <p className="text-sm text-slate-500">Organic CTR</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md transition-all duration-300">
                <Zap className="w-6 h-6 text-amber-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+65%</p>
                <p className="text-sm text-slate-500">Conversions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
              <p className="text-slate-600 leading-relaxed">
                Swipe Wires needed to improve their clients' website performance and search visibility. 
                Many sites had technical issues, slow loading times, and poor on-page optimization.
              </p>
            </motion.div>

            {/* Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">The Strategy</h2>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-slate-600">Comprehensive technical SEO audits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-slate-600">Performance optimization and code improvements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-slate-600">On-page SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-amber-600 text-xs font-bold">4</span>
                    </div>
                    <span className="text-slate-600">SEO-optimized component development</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Execution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Execution Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all duration-300">
                  <Search className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Technical Audits</h4>
                    <p className="text-slate-600 text-sm">Identified and resolved critical SEO issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all duration-300">
                  <Code className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Development</h4>
                    <p className="text-slate-600 text-sm">Built SEO-optimized components (PHP/JS)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all duration-300">
                  <Zap className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Performance</h4>
                    <p className="text-slate-600 text-sm">40% load time improvement, 25% bounce rate reduction</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-amber-300 hover:shadow-md transition-all duration-300">
                  <BadgeCheck className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Results</h4>
                    <p className="text-slate-600 text-sm">35 position avg. improvement in rankings</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center pt-8 border-t border-slate-200"
            >
              <p className="text-slate-600 mb-4">Need technical SEO expertise for your website?</p>
              <Button
                size="lg"
                className="gap-2 bg-slate-900 hover:bg-slate-800"
                onClick={() => window.location.href = '/#contact'}
              >
                Let's Discuss Your Project
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
