import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionHeader({
    title,
    subtitle,
    centered = true,
    className
}) {
    return (
        <div className={cn(
            "mb-12 md:mb-16",
            centered && "text-center",
            className
        )}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-secondary font-bold tracking-widest text-xs uppercase mb-3 block"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={cn(
                    "h-1 bg-secondary rounded-full mt-4",
                    centered && "mx-auto"
                )}
            />
        </div>
    );
}
