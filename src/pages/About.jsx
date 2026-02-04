import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Heart, Award } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';

export function About() {
    const stats = [
        { label: 'Founded', value: '2023' },
        { label: 'Happy Pilgrims', value: '5000+' },
        { label: 'Safety Record', value: '100%' },
        { label: 'Services', value: 'Premium' },
    ];

    const values = [
        {
            icon: Shield,
            title: 'Uncompromised Safety',
            desc: 'Our fleet adheres to the strictest DGCA safety guidelines. Your well-being is our absolute priority.'
        },
        {
            icon: Heart,
            title: 'Customer First',
            desc: 'We believe in Atithi Devo Bhava. Every aspect of your journey is curated for comfort and peace of mind.'
        },
        {
            icon: Award,
            title: 'Excellence in Service',
            desc: 'From VIP darshan facilitation to luxury stays, we deliver a seamless, world-class aviation experience.'
        },
        {
            icon: Target,
            title: 'Reliability',
            desc: 'With experienced pilots and a dedicated support team, we ensure your yatra proceeds without a hitch.'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero Banner */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1464037866556-56549919f42b?auto=format&fit=crop&q=80"
                    alt="Himalayan Peaks"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="container relative z-20 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        DHEERA AVIATION LLP: Pioneering Spiritual Aviation since 2023
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-lg text-gray-700 leading-relaxed"
                        >
                            <SectionHeader
                                title="Who We Are"
                                subtitle="The Flydheera Difference"
                                centered={false}
                            />
                            <p>
                                Founded in May 2023 by Siddhant Nagpal and Saurabh Suman, <span className="font-semibold text-primary">Flydheera (Dheera Aviation LLP)</span> was born from a vision to transform pilgrimage aviation in India. We faced a simple truth: accessing the divine Himalayan shrines was often arduous and uncomfortable.
                            </p>
                            <p>
                                We set out to change that. By combining modern aviation technology with traditional Indian hospitality, we've created a service that allows you to focus solely on your devotion, while we handle the logistics.
                            </p>
                            <p>
                                Today, Flydheera is recognized for its transparency, integrity, and premium service quality. Whether it's the Chardham Yatra or a customized charter, we bring a touch of luxury to the skies.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:border-secondary/30 transition-colors">
                                    <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                                    <div className="text-gray-500 font-medium uppercase text-sm tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <SectionHeader title="Our Core Values" subtitle="What Drives Us" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
