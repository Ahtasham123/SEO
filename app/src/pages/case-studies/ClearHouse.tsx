import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, DollarSign, FileText, Users, Calendar, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ClearHouseCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Clear House Case Study: 145% YoY Growth | Ehtasham Afzal';
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-emerald-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-emerald-100 text-emerald-700 border-0">Professional Services</Badge>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                July 2020 - July 2022
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              145% YoY Growth for Accounting Firm
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Developed a comprehensive content strategy using topic clustering and implemented 
              conversion rate optimization to drive qualified leads for a professional services firm.
            </p>

            {/* Key Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+145%</p>
                <p className="text-sm text-slate-500">Organic Traffic</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                <Target className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+65%</p>
                <p className="text-sm text-slate-500">Qualified Leads</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                <DollarSign className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+32%</p>
                <p className="text-sm text-slate-500">Demo Bookings</p>
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
                Clear House Accountants struggled to generate consistent qualified leads through 
                organic search. Their website lacked a cohesive content strategy, and their service 
                pages were not optimized for search intent or conversions.
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
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-slate-600">Topic clustering strategy for accounting services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-slate-600">Service page optimization for local SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-slate-600">CRO implementation with Hotjar and A/B testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-600 text-xs font-bold">4</span>
                    </div>
                    <span className="text-slate-600">Structured data implementation for rich snippets</span>
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
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <FileText className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Content Strategy</h4>
                    <p className="text-slate-600 text-sm">Created 50+ optimized articles targeting accounting keywords</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <BadgeCheck className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Technical SEO</h4>
                    <p className="text-slate-600 text-sm">Identified and fixed 200+ technical issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <Users className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">CRO</h4>
                    <p className="text-slate-600 text-sm">32% improvement in demo booking rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all duration-300">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Paid Media</h4>
                    <p className="text-slate-600 text-sm">Retargeting campaigns with 120% ROAS improvement</p>
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
              <p className="text-slate-600 mb-4">Want similar results for your professional services firm?</p>
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
