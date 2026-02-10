import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    url: string;
    description: string;
}

const Contact = memo(function Contact() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    const email = 'longto.xp@gmail.com';

    // Update time every second using requestAnimationFrame for better performance
    useEffect(() => {
        let rafId: number;
        let lastSecond = -1;

        const updateTime = () => {
            const now = new Date();
            const currentSecond = now.getSeconds();

            // Only update state when the second actually changes
            if (currentSecond !== lastSecond) {
                setCurrentTime(now);
                lastSecond = currentSecond;
            }

            rafId = requestAnimationFrame(updateTime);
        };

        rafId = requestAnimationFrame(updateTime);

        return () => cancelAnimationFrame(rafId);
    }, []);

    const socialLinks: SocialLink[] = [
        {
            icon: <FaFacebook />,
            label: 'Facebook',
            url: 'https://facebook.com/longto.has.fallen',
            description: 'Social network',
        },
        {
            icon: <FaGithub />,
            label: 'GitHub',
            url: 'https://github.com/longtoZ',
            description: 'Code repositories',
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            url: `mailto:${email}`,
            description: 'Direct message',
        }
    ];

    return (
        <section
            className="section"
            style={{
                paddingTop: '160px',
                paddingBottom: '120px',
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: 'center',
                        marginBottom: '80px',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 20px',
                            background: 'rgba(52, 168, 83, 0.1)',
                            border: '1px solid rgba(52, 168, 83, 0.3)',
                            borderRadius: '100px',
                            marginBottom: '32px',
                        }}
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.6, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#34A853',
                                boxShadow: '0 0 12px #34A853',
                            }}
                        />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#34A853', letterSpacing: '0.1em' }}>
                            AVAILABLE FOR OPPORTUNITIES
                        </span>
                    </motion.div>

                    <h2
                        style={{
                            fontSize: 'clamp(48px, 8vw, 96px)',
                            fontWeight: 900,
                            color: 'var(--text-primary)',
                            letterSpacing: '-0.04em',
                            marginBottom: '20px',
                            lineHeight: 0.95,
                        }}
                    >
                        Let's Connect
                    </h2>
                    <p
                        style={{
                            fontSize: 'clamp(16px, 2vw, 18px)',
                            color: 'var(--text-secondary)',
                            maxWidth: '500px',
                            margin: '0 auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Open to new projects and collaborations
                    </p>
                </motion.div>

                {/* Location & Timezone Display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        marginBottom: '60px',
                    }}
                >
                    <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'relative',
                            background: 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(20px)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '24px',
                            padding: '32px 40px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
                        }}
                    >
                        {/* Background Glow */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '300px',
                                height: '300px',
                                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)',
                                filter: 'blur(40px)',
                                pointerEvents: 'none',
                                zIndex: 0,
                            }}
                        />

                        {/* Corner Accents */}
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '60px',
                                height: '60px',
                                borderTop: '2px solid rgba(255, 255, 255, 0.2)',
                                borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
                                borderTopLeftRadius: '24px',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                width: '60px',
                                height: '60px',
                                borderBottom: '2px solid rgba(255, 255, 255, 0.2)',
                                borderRight: '2px solid rgba(255, 255, 255, 0.2)',
                                borderBottomRightRadius: '24px',
                            }}
                        />

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 1,
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '32px',
                                alignItems: 'center',
                            }}
                        >
                            {/* Location Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <motion.div
                                    animate={{
                                        y: [0, -4, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        border: '1px solid var(--border-subtle)',
                                        fontSize: '20px',
                                        color: 'var(--text-primary)',
                                        flexShrink: 0,
                                    }}
                                >
                                    <FaMapMarkerAlt />
                                </motion.div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: '12px',
                                            color: 'var(--text-tertiary)',
                                            marginBottom: '4px',
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Based in
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        Ho Chi Minh, Vietnam
                                    </div>
                                </div>
                            </div>

                            {/* Timezone & Clock */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <motion.div
                                    animate={{
                                        rotate: 360,
                                    }}
                                    transition={{
                                        duration: 60,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        border: '1px solid var(--border-subtle)',
                                        fontSize: '20px',
                                        color: 'var(--text-primary)',
                                        flexShrink: 0,
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: -360,
                                        }}
                                        transition={{
                                            duration: 60,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                    >
                                        <FaClock />
                                    </motion.div>
                                </motion.div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: '12px',
                                            color: 'var(--text-tertiary)',
                                            marginBottom: '4px',
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            fontWeight: 600,
                                        }}
                                    >
                                        Local Time (GMT+7)
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '18px',
                                            fontWeight: 700,
                                            color: 'var(--text-primary)',
                                            fontVariantNumeric: 'tabular-nums',
                                            letterSpacing: '0.02em',
                                        }}
                                    >
                                        {currentTime.toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            second: '2-digit',
                                            hour12: true,
                                            timeZone: 'Asia/Bangkok',
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <motion.div
                            animate={{
                                scaleX: [0.5, 1, 0.5],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '60%',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, var(--text-primary), transparent)',
                                transformOrigin: 'center',
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Social Links Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                        gap: '20px',
                        marginBottom: '80px',
                    }}
                >
                    {socialLinks.map((link, index) => {
                        const isHovered = hoveredIndex === index;
                        return (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 150 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                whileHover={{ y: -6 }}
                                style={{
                                    position: 'relative',
                                }}
                            >
                                {/* Card Glow - appears on hover */}
                                <motion.div
                                    animate={{
                                        opacity: isHovered ? 0.4 : 0,
                                        scale: isHovered ? 1 : 0.8,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        position: 'absolute',
                                        inset: '-20px',
                                        background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), transparent 70%)',
                                        filter: 'blur(30px)',
                                        pointerEvents: 'none',
                                        zIndex: 0,
                                    }}
                                />

                                <motion.a
                                    href={link.url}
                                    target={link.label !== 'Email' ? '_blank' : undefined}
                                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                    style={{
                                        position: 'relative',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '16px',
                                        padding: '40px 24px',
                                        background: isHovered
                                            ? 'rgba(255, 255, 255, 0.1)'
                                            : 'rgba(255, 255, 255, 0.04)',
                                        backdropFilter: 'blur(20px)',
                                        border: `1px solid ${isHovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
                                        borderRadius: '20px',
                                        textDecoration: 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                        overflow: 'hidden',
                                        boxShadow: isHovered
                                            ? '0 20px 60px -10px rgba(255, 255, 255, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
                                            : '0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.03)',
                                    }}
                                >
                                    {/* Corner Accents */}
                                    <motion.div
                                        animate={{
                                            opacity: isHovered ? 0.8 : 0.3,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '40px',
                                            height: '40px',
                                            borderTop: '2px solid var(--text-primary)',
                                            borderLeft: '2px solid var(--text-primary)',
                                            borderTopLeftRadius: '20px',
                                        }}
                                    />
                                    <motion.div
                                        animate={{
                                            opacity: isHovered ? 0.8 : 0.3,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 0,
                                            width: '40px',
                                            height: '40px',
                                            borderBottom: '2px solid var(--text-primary)',
                                            borderRight: '2px solid var(--text-primary)',
                                            borderBottomRightRadius: '20px',
                                        }}
                                    />

                                    {/* Icon Container with background */}
                                    <motion.div
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                            rotate: isHovered ? [0, -5, 5, 0] : 0,
                                        }}
                                        transition={{ duration: 0.5 }}
                                        style={{
                                            position: 'relative',
                                            width: '64px',
                                            height: '64px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: '16px',
                                            background: isHovered
                                                ? 'rgba(255, 255, 255, 0.12)'
                                                : 'rgba(255, 255, 255, 0.06)',
                                            border: `1px solid ${isHovered ? 'var(--border-medium)' : 'var(--border-subtle)'}`,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                scale: isHovered ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                fontSize: '28px',
                                                color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
                                                display: 'flex',
                                                transition: 'color 0.3s ease',
                                                filter: isHovered ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))' : 'none',
                                            }}
                                        >
                                            {link.icon}
                                        </motion.div>
                                    </motion.div>

                                    {/* Label */}
                                    <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                                        <motion.div
                                            animate={{
                                                letterSpacing: isHovered ? '0.02em' : '-0.01em',
                                            }}
                                            transition={{ duration: 0.3 }}
                                            style={{
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                color: 'var(--text-primary)',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            {link.label}
                                        </motion.div>
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                color: 'var(--text-tertiary)',
                                                fontWeight: 500,
                                                letterSpacing: '0.01em',
                                            }}
                                        >
                                            {link.description}
                                        </div>
                                    </div>

                                    {/* Bottom gradient accent */}
                                    <motion.div
                                        animate={{
                                            scaleX: isHovered ? 1 : 0,
                                            opacity: isHovered ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            background: 'linear-gradient(90deg, transparent, var(--text-primary), transparent)',
                                            transformOrigin: 'center',
                                        }}
                                    />

                                    {/* Shimmer effect on hover */}
                                    <motion.div
                                        animate={{
                                            x: isHovered ? ['0%', '200%'] : '0%',
                                        }}
                                        transition={{
                                            duration: 0.8,
                                            ease: 'easeInOut',
                                        }}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '-100%',
                                            width: '50%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                                            pointerEvents: 'none',
                                        }}
                                    />
                                </motion.a>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                        textAlign: 'center',
                        paddingTop: '40px',
                        borderTop: '1px solid var(--border-subtle)',
                        fontSize: '13px',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.02em',
                    }}
                >
                    © {new Date().getFullYear()} · Designed & Built with React + Vite
                </motion.div>
            </div>
        </section>
    );
});

export default Contact;
