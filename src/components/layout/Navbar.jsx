import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Chardham Yatra', path: '/chardham-yatra' },
        { name: 'Do Dham Yatra', path: '/do-dham-yatra' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm py-2'
                    : 'bg-transparent py-4'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 z-50">
                    <img
                        src="/src/assets/logo.png"
                        alt="Flydheera Logo"
                        className="h-10 w-auto object-contain"
                    />
                    <h1 className={cn(
                        "text-xl font-normal font-sans tracking-tight leading-none transition-colors duration-300",
                        isScrolled ? "text-primary" : "text-white"
                    )}>
                        FlyDheera
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-secondary uppercase tracking-wide",
                                isScrolled
                                    ? "text-primary"
                                    : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isScrolled ? "primary" : "secondary"} size="sm" className="gap-2">
                        <Phone className="w-4 h-4" />
                        <span>Book Now</span>
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden z-50 p-2 transition-colors duration-300",
                        isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 pb-6 flex flex-col gap-6"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-2xl font-medium text-primary border-b border-gray-100 pb-4"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" size="lg">
                                Book Your Yatra
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
