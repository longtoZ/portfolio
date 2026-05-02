import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';
import './About.css';

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

    // Counter animation - simplified for performance
    useEffect(() => {
        if (hasAnimated) return;
        const target = parseFloat(stat.value);
        if (isNaN(target)) return;

        let current = 0;
        const increment = target / 25;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
                setHasAnimated(true);
            } else {
                setCount(Math.floor(current));
            }
        }, 60);

        return () => clearInterval(timer);
    }, [hasAnimated, stat.value]);

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="stat-card"
            style={{
                position: 'relative',
                padding: '40px 32px',
                background: 'linear-gradient(135deg, var(--card-bg-light) 0%, var(--card-bg-dark) 100%)',
                border: '1.5px solid var(--card-border)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Gradient Border Frame - Static */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    padding: '1px',
                    background: 'linear-gradient(135deg, color-mix(in srgb, var(--card-border) 200%, transparent) 0%, var(--card-border) 100%)',
                    pointerEvents: 'none',
                    opacity: 0.5,
                }}
            />

            {/* Subtle top accent bar - Static */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40%',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
                    pointerEvents: 'none',
                    borderRadius: '20px 20px 0 0',
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
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="highlight-card"
            style={{
                position: 'relative',
                padding: isExpanded ? '48px 40px' : '40px 32px',
                background: 'linear-gradient(135deg, var(--card-bg-light) 0%, var(--card-bg-dark) 100%)',
                border: '1.5px solid var(--card-border)',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
            }}
            animate={isExpanded ? { scale: 1.02 } : { scale: 1 }}
        >
            {/* Gradient Border Frame - Static */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '20px',
                    padding: '1px',
                    background: 'linear-gradient(135deg, color-mix(in srgb, var(--card-border) 200%, transparent) 0%, var(--card-border) 100%)',
                    pointerEvents: 'none',
                    opacity: 0.5,
                }}
            />

            {/* Subtle top accent bar - Static */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '50%',
                    height: '3px',
                    background: 'linear-gradient(90deg, transparent, var(--card-border), transparent)',
                    pointerEvents: 'none',
                    borderRadius: '20px 20px 0 0',
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
