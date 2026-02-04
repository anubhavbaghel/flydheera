import React from 'react'; // Trigger deployment
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Star,
    Shield,
    Clock,
    MapPin,
    Plane,
    Phone,
    CheckCircle2
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceCard } from '../components/ui/ServiceCard';
import { Link } from 'react-router-dom';

// Assets
import heroBg from '../assets/hero-bg.png';
import doDhamImg from '../assets/do-dham.png';
import joyrideImg from '../assets/joyride.png';
import aboutPilotImg from '../assets/about-pilot.png';

export function Home() {
    const features = [
        {
            icon: Shield,
            title: 'Safety First',
            description: 'DGCA certified helicopters & experienced pilots.',
        },
        {
            icon: Star,
            title: 'Premium Experience',
            description: 'VIP darshan, luxury stays, and gourmet meals.',
        },
        {
            icon: Clock,
            title: 'Time Saving',
            description: 'Complete Chardham Yatra in just 5 days.',
        },
        {
            icon: Plane,
            title: 'Modern Fleet',
            description: 'Latest twin-engine and single-engine helicopters.',
        },
    ];

    const services = [
        {
            title: 'Chardham Yatra',
            image: heroBg, // Reusing hero image or another specific one if available
            price: '₹1,90,000',
            description:
                'The ultimate spiritual journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Includes VIP darshan, luxury accommodation, and all transfers.',
            features: [
                '5 Days / 4 Nights',
                'VIP Darshan at all temples',
                'Luxury Hotels & Meals',
                'Start from Dehradun',
            ],
            link: '/chardham-yatra',
        },
        {
            title: 'Do Dham Yatra',
            image: doDhamImg,
            price: '₹95,000',
            description:
                'A divine short pilgrimage to Kedarnath and Badrinath Ji. Perfect for those with limited time but unlimited devotion.',
            features: [
                'Same Day Return or 1 Night',
                'VIP Darshan',
                'Priority shuttle service',
                'Breakfast & Lunch Included',
            ],
            link: '/do-dham-yatra',
        },
        {
            title: 'Heli Joyride',
            image: joyrideImg,
            price: '₹5,000',
            description:
                'Experience the breathtaking beauty of the Himalayas from the sky. A short but mesmerizing panoramic aerial tour.',
            features: [
                '15-20 Minutes Ride',
                'Himalayan Peaks View',
                'Professional Pilot Commentary',
                'Group Booking Discounts',
            ],
            link: '/contact',
        },
    ];

    const processSteps = [
        {
            number: "01",
            title: "Consultation",
            desc: "Contact our aviation experts to discuss your travel dates and requirements."
        },
        {
            number: "02",
            title: "Booking & Plan",
            desc: "We customize your itinerary (hotels, darshan slots) and confirm your charter."
        },
        {
            number: "03",
            title: "Arrival",
            desc: "Our team welcomes you at the helipad/airport with VIP ground handling."
        },
        {
            number: "04",
            title: "Fly & Explore",
            desc: "Experience the Himalayas with comfort, safety, and spiritual bliss."
        }
    ];

    const testimonials = [
        {
            name: "Rajesh & Priya Gupta",
            location: "Mumbai",
            text: "The Chardham Yatra with Flydheera was a life-changing experience. The VIP darshan arrangements were flawless, and the pilot made us feel so safe.",
            rating: 5
        },
        {
            name: "Amit Patel",
            location: "Gujarat",
            text: "Excellent service! We booked the Do Dham package. The helicopter ride was smooth, and the views of Kedarnath were divine. Highly recommended.",
            rating: 5
        },
        {
            name: "Sarah Jenkins",
            location: "London, UK",
            text: "A truly world-class aviation service in India. The team was professional, punctual, and the luxury element was delivered as promised.",
            rating: 5
        }
    ];

    return (
        <main>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Flydheera Helicopter"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="container relative z-10 px-4 md:px-6 text-white pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-3 py-1 bg-secondary/80 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-6">
                            India's Premier Aviation Service
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Reach new spiritual heights <br />
                            <span className="text-secondary bg-clip-text">Experience Divinity.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
                            Experience the Chardham Yatra with unmatched luxury, safety, and
                            comfort. Your spiritual journey begins with Flydheera.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="min-w-[180px]">
                                    Book Your Yatra <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/chardham-yatra">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="min-w-[180px] bg-white/10 backdrop-blur-md border-white/30 hover:bg-white/20 text-white"
                                >
                                    Explore Packages
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase"
                >
                    <span>Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            {/* Features Stripe */}
            <div className="bg-primary py-12 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-secondary transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Teaser */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2 space-y-6"
                        >
                            <div className="inline-block px-3 py-1 bg-gray-100 text-primary text-xs font-bold tracking-widest uppercase rounded-sm">
                                About Flydheera
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                                Redefining Aviation <br /> in India
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Flydheera Aviation, operated by <span className="font-bold text-primary">DHEERA AVIATION LLP</span>, is more than just a
                                charter service; we are your partners in spiritual ascent. Incorporated in 2023, we
                                have quickly established ourselves as pioneers in high-altitude pilgrimage
                                aviation.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our mission is to make the divine accessible. Whether it's the sacred peaks of
                                Kedarnath or a medical emergency, our fleet is ready to serve with precision,
                                safety, and unwavering dedication.
                            </p>
                            <Link to="/about">
                                <Button variant="primary" size="lg" className="mt-4">
                                    Read Our Story
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={aboutPilotImg}
                                    alt="Flydheera Pilot"
                                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            {/* Decorative Pattern */}
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 text-center mb-16">
                    <SectionHeader
                        title="Signature Journeys"
                        subtitle="Curated Experiences"
                        centered={true}
                    />
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
                        Embark on a spiritual odyssey with our exclusive Chardham and Do Dham packages,
                        designed for comfort, efficiency, and divine connection.
                    </p>
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    {/* Abstract pattern could go here */}
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                className="relative"
                            >
                                <div className="text-6xl font-black text-gray-700 absolute -top-10 left-0 select-none">
                                    {step.number}
                                </div>
                                <div className="relative pt-6">
                                    <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">{step.desc}</p>
                                </div>
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-[2px] bg-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Guest Experiences" subtitle="Testimonials" centered={true} />

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.2 }}
                                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic mb-6 leading-relaxed">"{item.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary text-sm">{item.name}</h4>
                                        <span className="text-xs text-gray-500">{item.location}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready for your Divine Journey?</h2>
                    <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
                        Book early to secure your preferred dates for Chardham Yatra 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button variant="primary" size="lg" className="bg-white text-secondary hover:bg-gray-100 border-none">
                                Start Booking Process
                            </Button>
                        </Link>
                        <Link to="tel:+917303714400">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Our Experts
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
