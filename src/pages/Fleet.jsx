import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Check } from 'lucide-react';

export function Fleet() {
    const fleet = [
        {
            name: 'Airbus H130',
            type: 'Single Engine',
            image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80',
            description: 'The Airbus H130 is a lightweight single-engine helicopter tailored for passenger transport, sightseeing and VIP duties.',
            specs: [
                'Capacity: 6 Passengers + 1 Pilot',
                'Range: 610 km',
                'Cruise Speed: 237 km/h',
                'Large panoramic windows'
            ]
        },
        {
            name: 'Bell 407',
            type: 'Single Engine',
            image: 'https://images.unsplash.com/photo-1599553727220-41fa1a43a054?auto=format&fit=crop&q=80',
            description: 'The Bell 407 integrates reliability, speed, performance and maneuverability with a cabin configured for an array of missions.',
            specs: [
                'Capacity: 6 Passengers + 1 Pilot',
                'Range: 598 km',
                'Cruise Speed: 246 km/h',
                'Smooth flight experience'
            ]
        },
        {
            name: 'Agusta A119 Koala',
            type: 'Single Engine',
            image: 'https://images.unsplash.com/photo-1486749005080-36b19a311100?auto=format&fit=crop&q=80',
            description: 'A top-of-the-class single engine helicopter, the Koala offers high productivity, performance and a spacious cabin.',
            specs: [
                'Capacity: 7 Passengers + 1 Pilot',
                'Range: 954 km',
                'Cruise Speed: 260 km/h',
                'Best-in-class power'
            ]
        }
    ];

    return (
        <div className="pt-20">
            <section className="bg-primary text-white py-20 px-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">Our Fleet</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Fly with confidence aboard our modern, maintained, and DGCA-compliant helicopters.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-16">
                        {fleet.map((heli, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                        <img src={heli.image} alt={heli.name} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                                            {heli.type}
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full lg:w-1/2 space-y-6">
                                    <h3 className="text-3xl font-bold text-primary">{heli.name}</h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">{heli.description}</p>

                                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                        <h4 className="font-bold text-primary mb-4 uppercase text-sm tracking-widest">Specifications</h4>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {heli.specs.map((spec, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                                    <Check className="w-4 h-4 text-secondary" />
                                                    <span>{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
