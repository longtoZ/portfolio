import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            {/* Progress bar */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--border-subtle)',
                    zIndex: 9999,
                }}
            >
                <motion.div
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--text-secondary), var(--text-primary))',
                        transformOrigin: '0%',
                        scaleX,
                        boxShadow: '0 0 10px var(--border-medium)',
                    }}
                />
            </motion.div>
        </>
    );
}
