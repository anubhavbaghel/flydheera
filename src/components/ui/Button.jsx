import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const buttonVariants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    ghost: 'text-primary hover:bg-primary/10',
    link: 'text-primary underline-offset-4 hover:underline',
};

const buttonSizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
    icon: 'h-10 w-10 p-2',
};

export const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    asChild = false,
    children,
    ...props
}, ref) => {
    const Comp = motion.button;
    return (
        <Comp
            ref={ref}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ring-offset-background',
                buttonVariants[variant],
                buttonSizes[size],
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
});

Button.displayName = 'Button';
