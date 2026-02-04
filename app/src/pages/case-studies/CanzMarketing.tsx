import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Target, Link2, Newspaper, Users, Calendar, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function CanzMarketingCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Digital PR Campaign: 150+ Backlinks | Ehtasham Afzal';
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Badge className="bg-violet-100 text-violet-700 border-0">Agency</Badge>
              <span className="text-slate-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                February 2022 - January 2023
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Digital PR Campaign with 150+ High-Authority Backlinks
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Executed a strategic digital PR campaign that secured features in major publications 
              and built significant domain authority for multiple clients.
            </p>

            {/* Key Metrics */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300">
                <TrendingUp className="w-6 h-6 text-violet-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+12</p>
                <p className="text-sm text-slate-500">DA Points</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300">
                <Link2 className="w-6 h-6 text-violet-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">150+</p>
                <p className="text-sm text-slate-500">Backlinks</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-violet-300 hover:shadow-md transition-all duration-300">
                <Target className="w-6 h-6 text-violet-600 mb-2" />
                <p className="text-3xl font-bold text-slate-900">+45%</p>
                <p className="text-sm text-slate-500">Branded Search</p>
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
                Multiple SMB clients needed to build domain authority and improve their online presence 
                in competitive industries. Traditional link building was slow and ineffective.
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
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-600 text-xs font-bold">1</span>
                    </div>
                    <span className="text-slate-600">Newsworthy content creation for media outreach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-600 text-xs font-bold">2</span>
                    </div>
                    <span className="text-slate-600">Strategic journalist and publication targeting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-600 text-xs font-bold">3</span>
                    </div>
                    <span className="text-slate-600">Data-driven PR campaigns with unique insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-600 text-xs font-bold">4</span>
                    </div>
                    <span className="text-slate-600">Content partnerships and guest posting</span>
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
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all duration-300">
                  <Newspaper className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Major Publications</h4>
                    <p className="text-slate-600 text-sm">Secured features in TechCrunch, WSJ, and Deel</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all duration-300">
                  <Link2 className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Quality Links</h4>
                    <p className="text-slate-600 text-sm">150+ backlinks from DR 70+ domains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all duration-300">
                  <Award className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Authority Growth</h4>
                    <p className="text-slate-600 text-sm">+12 Domain Authority points increase</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-violet-300 hover:shadow-md transition-all duration-300">
                  <Users className="w-5 h-5 text-violet-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">Brand Awareness</h4>
                    <p className="text-slate-600 text-sm">45% increase in branded search volume</p>
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
              <p className="text-slate-600 mb-4">Need to build authority for your brand?</p>
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
