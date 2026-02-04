import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export function ServiceCard({
    title,
    description,
    image,
    price,
    features = [],
    link = '/contact',
    delay = 0
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 flex flex-col h-full"
        >
            {/* Image Overlay */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">{title}</h3>
                    {price && <p className="text-white/90 font-medium">{price}</p>}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                    <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

                    {features.length > 0 && (
                        <ul className="mb-6 space-y-2">
                            {features.slice(0, 4).map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <Link to={link} className="w-full">
                    <Button variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
