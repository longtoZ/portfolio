import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';

interface StatCardProps {
    stat: { value: string; label: string; detail: string };
    index: number;
}

interface HighlightCardProps {
    highlight: { icon: React.ReactNode; title: string; description: string; fullDescription: string };
    index: number;
}

function StatCard({ stat, index }: StatCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    const rotateX = useTransform(springY, [-100, 100], [3, -3]);
    const rotateY = useTransform(springX, [-100, 100], [-3, 3]);

    // Counter animation
    useEffect(() => {
        if (hasAnimated) return;
        const target = parseInt(stat.value);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
                setHasAnimated(true);
            } else {
                setCount(Math.floor(current));
            }
        }, 30);

        return () => clearInterval(timer);
    }, [hasAnimated, stat.value]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                padding: '40px 32px',
                background: isHovered ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isHovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
                transition: 'background 0.3s ease, border 0.3s ease',
            }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Corner Brackets - Top Left */}
            <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isHovered ? { width: '20px', height: '20px' } : { width: '12px', height: '12px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    borderTop: '2px solid var(--border-glow)',
                    borderLeft: '2px solid var(--border-glow)',
                    opacity: isHovered ? 1 : 0.3,
                }}
            />
            {/* Corner Brackets - Top Right */}
            <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isHovered ? { width: '20px', height: '20px' } : { width: '12px', height: '12px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    borderTop: '2px solid var(--border-glow)',
                    borderRight: '2px solid var(--border-glow)',
                    opacity: isHovered ? 1 : 0.3,
                }}
            />
            {/* Corner Brackets - Bottom Left */}
            <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isHovered ? { width: '20px', height: '20px' } : { width: '12px', height: '12px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    borderBottom: '2px solid var(--border-glow)',
                    borderLeft: '2px solid var(--border-glow)',
                    opacity: isHovered ? 1 : 0.3,
                }}
            />
            {/* Corner Brackets - Bottom Right */}
            <motion.div
                initial={{ width: 0, height: 0 }}
                animate={isHovered ? { width: '20px', height: '20px' } : { width: '12px', height: '12px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    borderBottom: '2px solid var(--border-glow)',
                    borderRight: '2px solid var(--border-glow)',
                    opacity: isHovered ? 1 : 0.3,
                }}
            />

            {/* Dot pattern background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.4,
                    pointerEvents: 'none',
                }}
            />

            {/* Primary Glow overlay */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.4 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5), transparent 65%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Secondary intense glow */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: '-20%',
                    background:
                        'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4), transparent 50%)',
                    pointerEvents: 'none',
                    filter: 'blur(30px)',
                }}
            />

            {/* Edge highlight */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.6 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: -1,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.5), transparent 60%)',
                    borderRadius: '16px',
                    pointerEvents: 'none',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: 'clamp(48px, 6vw, 64px)',
                        fontWeight: 900,
                        color: 'var(--text-primary)',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1,
                    }}
                >
                    {stat.value.includes('+') ? `${count}+` : count}
                </motion.div>
                <div
                    style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                    }}
                >
                    {stat.label}
                </div>

                {/* Detail text - fades in on hover */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: '12px',
                        color: 'var(--text-tertiary)',
                        lineHeight: 1.6,
                        marginTop: '12px',
                    }}
                >
                    {stat.detail}
                </motion.div>
            </div>
        </motion.div>
    );
}

function HighlightCard({ highlight, index }: HighlightCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 25, stiffness: 200 });
    const springY = useSpring(mouseY, { damping: 25, stiffness: 200 });

    const translateX = useTransform(springX, [-200, 200], [-8, 8]);
    const translateY = useTransform(springY, [-200, 200], [-8, 8]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
                position: 'relative',
                padding: isExpanded ? '48px 40px' : '40px 32px',
                background: isHovered || isExpanded ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isExpanded ? 'var(--border-medium)' : isHovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                x: translateX,
                y: translateY,
                transition: 'background 0.3s ease, border 0.3s ease',
            }}
            animate={isExpanded ? { scale: 1.02 } : { scale: 1 }}
        >
            {/* Corner Brackets */}
            <motion.div
                animate={isHovered || isExpanded ? { width: '24px', height: '24px' } : { width: '14px', height: '14px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    borderTop: '2px solid var(--border-glow)',
                    borderLeft: '2px solid var(--border-glow)',
                    opacity: isHovered || isExpanded ? 1 : 0.3,
                }}
            />
            <motion.div
                animate={isHovered || isExpanded ? { width: '24px', height: '24px' } : { width: '14px', height: '14px' }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '20px',
                    borderBottom: '2px solid var(--border-glow)',
                    borderRight: '2px solid var(--border-glow)',
                    opacity: isHovered || isExpanded ? 1 : 0.3,
                }}
            />

            {/* Dot pattern */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    opacity: 0.5,
                    pointerEvents: 'none',
                }}
            />

            {/* Primary Glow effect */}
            <motion.div
                animate={{
                    opacity: isHovered || isExpanded ? 0.4 : 0,
                }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5), transparent 65%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Secondary intense glow */}
            <motion.div
                animate={{
                    opacity: isHovered || isExpanded ? 0.35 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    inset: '-25%',
                    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.45), transparent 50%)',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                }}
            />

            {/* Border glow that follows cursor */}
            <motion.div
                animate={{
                    opacity: isHovered ? 0.8 : 0,
                }}
                style={{
                    position: 'absolute',
                    inset: -1,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.6), transparent 50%)',
                    borderRadius: '16px',
                    pointerEvents: 'none',
                }}
            />

            {/* Expanded state glow */}
            <motion.div
                animate={{
                    opacity: isExpanded ? 0.3 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.3), transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>

                {/* Title */}
                <h3
                    style={{
                        fontSize: isExpanded ? '24px' : '20px',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginTop: '16px',
                        marginBottom: '16px',
                        letterSpacing: '-0.01em',
                        transition: 'font-size 0.3s ease',
                    }}
                >
                    {highlight.title}
                </h3>

                {/* Description */}
                <p
                    style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: 'var(--text-secondary)',
                        marginBottom: isExpanded ? '16px' : '6px',
                    }}
                >
                    {highlight.description}
                </p>

                {/* Expanded content */}
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: '14px',
                        lineHeight: 1.8,
                        color: 'var(--text-tertiary)',
                        borderTop: isExpanded ? '1px solid var(--border-subtle)' : 'none',
                        paddingTop: isExpanded ? '16px' : '0',
                    }}
                >
                    {highlight.fullDescription}
                </motion.div>

                {/* Expand indicator */}
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        fontSize: '12px',
                        color: 'var(--text-tertiary)',
                        fontWeight: 600,
                    }}
                >
                    ↓
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function About() {
    const stats = [
        { value: '3+', label: 'Years Learning', detail: 'Continuously improving skills' },
        { value: '10+', label: 'Academic Projects', detail: 'Hands-on development' },
        { value: '8+', label: 'Technologies', detail: 'Modern tech stack' },
        { value: '3.7+', label: 'GPA', detail: 'Academic excellence' },
    ];

    const highlights = [
        {
            icon: <FaCode />,
            title: 'Full-Stack Development',
            description: 'Building modern web applications with React, Node.js, and cloud technologies.',
            fullDescription:
                'Specialized in creating scalable full-stack applications using cutting-edge frameworks. Experienced with React for dynamic frontends, Node.js and Express for robust backends, and exploring cloud deployment with AWS and Docker.',
        },
        {
            icon: <FaGraduationCap />,
            title: 'Academic Foundation',
            description: 'Pursuing Software Engineering with focus on practical application.',
            fullDescription:
                'Currently pursuing a degree in Software Engineering with a strong emphasis on applying theoretical concepts to real-world projects. Consistently achieving high academic performance while maintaining a portfolio of practical development work.',
        },
        {
            icon: <FaRocket />,
            title: 'Eager to Learn',
            description: 'Constantly exploring new technologies and best practices.',
            fullDescription:
                'Passionate about staying current with industry trends. Regularly engaging with online courses, technical documentation, and open-source communities. Always seeking opportunities to expand knowledge in areas like DevOps, system design, and modern web architectures.',
        },
    ];

    return (
        <section className="section" id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ marginBottom: '64px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 64px' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--text-tertiary)',
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '16px',
                            }}
                        >
                            <span style={{ width: '40px', height: '1px', background: 'var(--border-subtle)' }} />
                            About Me
                            <span style={{ width: '40px', height: '1px', background: 'var(--border-subtle)' }} />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{
                                fontSize: 'clamp(40px, 6vw, 72px)',
                                fontWeight: 800,
                                color: 'var(--text-primary)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                                marginBottom: '32px',
                            }}
                        >
                            Learning &{' '}
                            <span style={{ color: 'var(--text-secondary)' }}>Building</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: 'clamp(16px, 2vw, 20px)',
                                lineHeight: 1.7,
                                color: 'var(--text-secondary)',
                                maxWidth: '700px',
                                margin: '0 auto',
                            }}
                        >
                            I'm an undergraduate student developer passionate about creating modern web applications.
                            Through my coursework and personal projects, I'm gaining experience with frontend frameworks,
                            backend development, and full-stack technologies.
                        </motion.p>
                    </div>

                    {/* Asymmetric Bento Grid Layout */}
                    <div style={{ marginBottom: '48px' }}>
                        {/* Stats Grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                                gap: '24px',
                                marginBottom: '32px',
                            }}
                        >
                            {stats.map((stat, index) => (
                                <StatCard key={stat.label} stat={stat} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, var(--border-subtle), transparent)',
                            marginBottom: '48px',
                        }}
                    />

                    {/* Highlights Section */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                            gap: '32px',
                        }}
                    >
                        {highlights.map((highlight, index) => (
                            <HighlightCard key={highlight.title} highlight={highlight} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
