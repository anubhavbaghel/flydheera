import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Shield, Star, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ServiceCard } from '../components/ui/ServiceCard';
import { SectionHeader } from '../components/ui/SectionHeader';
import HeroBg from '../assets/hero-bg.png';

export function Home() {
    const features = [
        { icon: Shield, title: 'Safety First', desc: 'DGCA certified helicopters & experienced pilots.' },
        { icon: Star, title: 'Premium Experience', desc: 'VIP darshan, luxury stays, and gourmet meals.' },
        { icon: Clock, title: 'Time Saving', desc: 'Complete Chardham Yatra in just 5 days.' },
        { icon: Plane, title: 'Modern Fleet', desc: 'Latest twin-engine and single-engine helicopters.' },
    ];

    const packages = [
        {
            title: 'Chardham Yatra',
            description: 'The ultimate spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Includes VIP darshan, luxury accommodation, and all transfers.',
            price: 'Starting from ₹1,90,000',
            image: HeroBg, // Using hero bg as placeholder for now, will generate specific one later
            features: ['5 Days / 4 Nights', 'VIP Darshan at all temples', 'Luxury Hotels & Meals', 'Start from Dehradun'],
            link: '/chardham-yatra'
        },
        {
            title: 'Do Dham Yatra',
            description: 'A divine short pilgrimage to Kedarnath and Badrinath Ji. Perfect for those with limited time but unlimited devotion.',
            price: 'Starting from ₹95,000',
            image: 'https://images.unsplash.com/photo-1542314831-068cd1dbd802?auto=format&fit=crop&q=80', // Placeholder
            features: ['Same Day Return or 1 Night', 'VIP Darshan', 'Priority shuttle service', 'Breakfast & Lunch included'],
            link: '/do-dham-yatra'
        },
        {
            title: 'Heli Joyride',
            description: 'Experience the breathtaking beauty of the Himalayas from the sky. A short but mesmerizing panoramic aerial tour.',
            price: 'Starting from ₹5,000',
            image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80', // Placeholder
            features: ['15-20 Minutes Ride', 'Himalayan Peaks View', 'Professional Pilot Commentary', 'Group Booking Discounts'],
            link: '/fleet'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={HeroBg}
                        alt="Himalayas Helicopter View"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-4 pt-20">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-white uppercase bg-secondary/90 rounded-sm backdrop-blur-sm"
                        >
                            India's Premier Aviation Service
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            Soar to the <br />
                            <span className="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">Divine Abode</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
                        >
                            Experience the Chardham Yatra with unmatched luxury, safety, and comfort.
                            Your spiritual journey begins with Flydheera.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button size="lg" className="text-lg px-8">
                                Book Your Yatra
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white/10 hover:border-white">
                                Explore Packages
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll to Explore</span>
                    <div className="w-0.5 h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>
            </section>

            {/* Features Stripe */}
            <section className="bg-primary py-12 border-b border-white/5 relative z-20 -mt-2">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                    <feature.icon className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-snug">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Packages */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionHeader
                        title="Our Signature Journeys"
                        subtitle="Choose Your Path"
                        className="mb-16"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, idx) => (
                            <ServiceCard key={idx} {...pkg} delay={idx * 0.2} />
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="min-w-[200px]">
                            View All Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionHeader
                                title="Redefining Aviation in India"
                                subtitle="About Flydheera"
                                centered={false}
                                className="mb-8"
                            />
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Flydheera Aviation, operated by DHEERA AVIATION LLP, is more than just a charter service; we are your partners in spiritual ascent. Incorporated in 2023, we have quickly established ourselves as pioneers in high-altitude pilgrimage aviation.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Our mission is to make the divine accessible. Whether it's the sacred peaks of Kedarnath or a medical emergency, our fleet is ready to serve with precision, safety, and unwavering dedication.
                            </p>
                            <Button size="lg">Read Our Story</Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl transform rotate-3" />
                            <img
                                src="https://images.unsplash.com/photo-1559814068-d65ce70dfa90?auto=format&fit=crop&q=80"
                                alt="Luxury Aviation Service"
                                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
