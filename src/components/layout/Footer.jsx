import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="/src/assets/logo.png"
                                alt="Flydheera Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <h2 className="text-2xl font-normal font-sans tracking-tight text-white">FlyDheera</h2>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Fly Dheera offers luxury and convenience of private flights at affordable prices. We strive to redefine private aviation by providing personalized trips and streamlined experiences.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                                    <Icon className="w-5 h-5 text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Chardham Yatra', path: '/chardham-yatra' },
                                { name: 'Fleet', path: '/fleet' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Values / Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Our Values</h3>
                        <ul className="space-y-4">
                            {['Safety First', 'Premium Comfort', 'Experienced Pilots', '24/7 Support'].map((item) => (
                                <li key={item} className="text-gray-400 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-secondary">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-6 h-6 text-secondary shrink-0" />
                                <span className="text-gray-400 text-sm">
                                    New Delhi, India
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <a href="tel:+917303714400" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    +91 73037 14400
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:booking@flydheera.co.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    booking@flydheera.co.in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} FlyDheera. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
