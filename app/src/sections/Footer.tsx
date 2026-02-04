import { ArrowUpRight, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ],
  services: [
    { name: 'Technical SEO', href: '#services' },
    { name: 'Content Strategy', href: '#services' },
    { name: 'E-commerce SEO', href: '#services' },
    { name: 'Analytics', href: '#services' },
    { name: 'Link Building', href: '#services' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ehtashamafzal', icon: Linkedin },
    { name: 'Email', href: 'mailto:ahtashamafzal@gmail.com', icon: Mail },
    { name: 'Phone', href: 'tel:+447762127314', icon: Phone },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EA</span>
                </div>
                <div>
                  <h3 className="font-bold text-base">Ehtasham Afzal</h3>
                  <p className="text-slate-400 text-sm">SEO Manager & Growth Strategist</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-md mb-6 leading-relaxed text-sm">
                Results-driven SEO professional with 5+ years of experience driving organic growth 
                for SaaS, B2B, and professional services brands. Specialized in technical SEO and data-driven marketing.
              </p>
              <div className="flex items-center gap-3">
                {footerLinks.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label={item.name}
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Navigation</h4>
              <ul className="space-y-2.5">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group text-sm"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-500 text-sm">
              {currentYear} Ehtasham Afzal. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Belfast, UK
              </span>
              <span>•</span>
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
