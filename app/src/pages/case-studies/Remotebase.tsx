import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, DollarSign, Users, Award, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RemotebaseCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Update page title and meta
    document.title = 'Remotebase Case Study: 38% Organic Growth | Ehtasham Afzal';
  }, []);

  const navigateBack = () => {
    window.history.back();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-blue-100 text-blue-700 border-0">SaaS</Badge>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                July 2022 - February 2025
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              How Remotebase Achieved 38% Organic Traffic Growth
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Led a complete website migration to React + Strapi while optimizing Core Web Vitals 
              and implementing a comprehensive SEO strategy that delivered measurable business results.
            </p>

            {/* Key Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <TrendingUp className="w-6 h-6 text-blue-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+38%</p>
                <p className="text-sm text-slate-500">Organic Traffic</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <Target className="w-6 h-6 text-emerald-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">2×</p>
                <p className="text-sm text-slate-500">Demo Requests</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <DollarSign className="w-6 h-6 text-violet-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+85%</p>
                <p className="text-sm text-slate-500">ROAS Improvement</p>
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
                Remotebase was facing stagnating organic growth in a highly competitive remote hiring 
                SaaS market. Their existing WordPress site had technical limitations, slow loading times, 
                and poor Core Web Vitals scores that were impacting both user experience and search rankings.
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
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-slate-600">Complete website migration to React + Strapi headless CMS</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-slate-600">Core Web Vitals optimization (LCP, FID, CLS improvements)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-slate-600">Comprehensive technical SEO audit and implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">4</span>
                    </div>
                    <span className="text-slate-600">Content strategy with programmatic SEO pages</span>
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
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <Users className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Team Leadership</h4>
                    <p className="text-slate-600 text-sm">Built and led team of 8 specialists across SEO, content, and design</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <Award className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Digital PR</h4>
                    <p className="text-slate-600 text-sm">Secured features in TechCrunch, WSJ, and Deel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">AI Integration</h4>
                    <p className="text-slate-600 text-sm">Pioneered AI tools (Surfer SEO, ChatGPT) reducing content time by 30%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Analytics</h4>
                    <p className="text-slate-600 text-sm">Designed GA4 dashboards for multi-touch attribution</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Results</h2>
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl p-6 border border-blue-100">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Traffic & Engagement</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• 38% organic traffic increase in 6 months</li>
                      <li>• 2× improvement in demo requests</li>
                      <li>• 45% branded search growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Authority & Links</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• 150+ high-quality backlinks (DR 70+)</li>
                      <li>• +12 Domain Authority points</li>
                      <li>• Featured in major publications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-center pt-8 border-t border-slate-200"
            >
              <p className="text-slate-600 mb-4">Facing similar challenges with your SaaS business?</p>
              <Button
                size="lg"
                className="gap-2 bg-slate-900 hover:bg-slate-800"
                onClick={scrollToContact}
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
