import { motion } from 'framer-motion';

interface DividerProps {
    variant?: 'default' | 'gradient' | 'dots' | 'glow';
}

export default function Divider({ variant = 'default' }: DividerProps) {
    if (variant === 'gradient') {
        return (
            <div
                style={{
                    width: '100%',
                    padding: '80px 0',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeInOut' }}
                        style={{
                            height: '1px',
                            background:
                                'linear-gradient(90deg, transparent, var(--border-medium) 20%, var(--border-medium) 80%, transparent)',
                            transformOrigin: 'left',
                        }}
                    />
                </div>
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div
                style={{
                    width: '100%',
                    padding: '80px 0',
                    position: 'relative',
                }}
            >
                <div className="container">
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                        }}
                    >
                        {[0, 1, 2, 3, 4].map((i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                style={{
                                    width: i === 2 ? '10px' : '6px',
                                    height: i === 2 ? '10px' : '6px',
                                    borderRadius: '50%',
                                    background:
                                        i === 2
                                            ? 'var(--text-secondary)'
                                            : 'var(--text-tertiary)',
                                    boxShadow:
                                        i === 2
                                            ? '0 0 20px var(--border-medium)'
                                            : 'none',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'glow') {
        return (
            <div
                style={{
                    width: '100%',
                    padding: '80px 0',
                    position: 'relative',
                }}
            >
                <div className="container">
                    <div
                        style={{
                            position: 'relative',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Background line */}
                        <div
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                height: '1px',
                                background: 'var(--border-subtle)',
                            }}
                        />
                        {/* Center glow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background:
                                    'radial-gradient(circle, rgba(255, 255, 255, 0.15), transparent 60%)',
                                filter: 'blur(30px)',
                            }}
                        />
                        {/* Center dot */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            style={{
                                position: 'absolute',
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                background: 'var(--text-primary)',
                                boxShadow: '0 0 30px var(--border-medium)',
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    // Default variant
    return (
        <div
            style={{
                width: '100%',
                padding: '80px 0',
                position: 'relative',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '24px',
                    }}
                >
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            flex: 1,
                            height: '1px',
                            background:
                                'linear-gradient(90deg, transparent, var(--border-subtle))',
                            transformOrigin: 'left',
                        }}
                    />
                    <motion.div
                        initial={{ rotate: 0 }}
                        whileInView={{ rotate: 360 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            border: '1px solid var(--border-medium)',
                            background: 'var(--border-subtle)',
                        }}
                    />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            flex: 1,
                            height: '1px',
                            background:
                                'linear-gradient(90deg, var(--border-subtle), transparent)',
                            transformOrigin: 'right',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
