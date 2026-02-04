import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MapPin, Calendar, Clock, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Link } from 'react-router-dom';

export function PackageLayout({
    title,
    subtitle,
    heroImage,
    price,
    duration,
    location,
    overview,
    itinerary,
    inclusions,
    exclusions
}) {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-end">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                </div>

                <div className="container relative z-10 px-4 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold tracking-widest uppercase rounded-sm mb-4">
                            {subtitle}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl">
                            {title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-white/90 mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-secondary" />
                                <span>{duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-secondary" />
                                <span>{location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-secondary" />
                                <span>Min 4 Pax</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                            <div className="text-3xl font-bold text-white">
                                {price} <span className="text-lg font-normal text-gray-300">/ person</span>
                            </div>
                            <Link to="/contact">
                                <Button size="lg" className="min-w-[200px]">Book This Package</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">{overview}</p>
                        </div>

                        {/* Itinerary */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-8">Itinerary</h2>
                            <div className="space-y-8">
                                {itinerary.map((day, idx) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-secondary/20 pb-8 last:pb-0">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white" />
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Day {idx + 1}: {day.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{day.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Inclusions Card */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <h3 className="text-lg font-bold text-primary mb-6">What's Included</h3>
                            <ul className="space-y-4">
                                {inclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions Card */}
                        <div className="bg-white p-8 rounded-xl border border-gray-100">
                            <h3 className="text-lg font-bold text-primary mb-6">Exclusions</h3>
                            <ul className="space-y-4">
                                {exclusions.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-primary p-8 rounded-xl text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Need a Custom Plan?</h3>
                            <p className="text-gray-300 mb-6 text-sm">We can tailor the itinerary to your specific needs.</p>
                            <Link to="/contact">
                                <Button variant="secondary" className="w-full">Contact Expert</Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
