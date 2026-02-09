import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
    onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Delay before calling onLoadingComplete for smooth exit animation
                    setTimeout(() => onLoadingComplete(), 300);
                    return 100;
                }
                // Accelerate progressively
                const increment = prev < 50 ? 5 : prev < 80 ? 10 : 15;
                return Math.min(prev + increment, 100);
            });
        }, 100);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                inset: 0,
                background: 'var(--bg-primary)',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Animated background gradient */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
                    ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Logo/Name Animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{
                    marginBottom: '48px',
                    textAlign: 'center',
                }}
            >
                <motion.h1
                    style={{
                        fontFamily: 'var(--font-subheading)',
                        fontSize: 'clamp(32px, 8vw, 64px)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        margin: 0,
                        letterSpacing: '0.05em',
                        background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    LongTo
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        fontFamily: 'var(--font-subheading)',
                        fontSize: '14px',
                        color: 'var(--text-tertiary)',
                        marginTop: '8px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}
                >
                    Full-Stack Engineer
                </motion.p>
            </motion.div>

            {/* Progress Bar Container */}
            <div
                style={{
                    width: 'min(400px, 80%)',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                }}
            >
                {/* Progress Bar Fill */}
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--text-primary) 0%, var(--text-secondary) 100%)',
                        borderRadius: '4px',
                        position: 'relative',
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                    }}
                >
                    {/* Shimmer effect */}
                    <motion.div
                        animate={{
                            x: ['-100%', '200%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                        }}
                    />
                </motion.div>
            </div>

            {/* Progress Percentage */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                    marginTop: '16px',
                    fontSize: '13px',
                    color: 'var(--text-tertiary)',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                }}
            >
                {progress}%
            </motion.p>

            {/* Decorative Elements */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '400px',
                    height: '400px',
                    pointerEvents: 'none',
                }}
            >
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.1, 0, 0.1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: 'easeInOut',
                        }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '50%',
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
