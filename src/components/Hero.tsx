import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';
import ProfilePicture from '../img/pfp.jpg';
import './Hero.css';

export default function Hero() {
    // Typing animation state
    const roles = ['Developer', 'Designer', 'Creator', 'Student'];
    const [currentRole, setCurrentRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    // Typing animation effect
    useEffect(() => {
        const handleTyping = () => {
            const currentFullRole = roles[roleIndex];

            if (!isDeleting) {
                setCurrentRole(currentFullRole.substring(0, currentRole.length + 1));
                setTypingSpeed(150);

                if (currentRole === currentFullRole) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setCurrentRole(currentFullRole.substring(0, currentRole.length - 1));
                setTypingSpeed(100);

                if (currentRole === '') {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, roleIndex, typingSpeed]);

    return (
        <section
            className="section"
            style={{ paddingTop: '100px', paddingBottom: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ display: 'flex', gap: '64px', alignItems: 'center', flexWrap: 'wrap' }}
                >
                    {/* Profile Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        style={{
                            position: 'relative',
                            width: '280px',
                            height: '280px',
                            flexShrink: 0,
                        }}
                    >
                        {/* Gradient Border */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: '-4px',
                                background: 'linear-gradient(135deg, var(--text-primary), var(--text-tertiary), var(--text-primary))',
                                borderRadius: '50%',
                                opacity: 0.6,
                                filter: 'blur(8px)',
                                animation: 'rotate 8s linear infinite',
                            }}
                        />
                        {/* Avatar Image */}
                        <div
                            style={{
                                position: 'relative',
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid var(--bg-edge)',
                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '120px',
                                fontWeight: 900,
                                color: 'var(--text-primary)',
                            }}
                        >
                            <img src={ProfilePicture} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="hero-content" style={{ flex: 1, minWidth: '300px' }}>
                        {/* Category Label - Premium Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 20px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--border-subtle)',
                                borderRadius: '100px',
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--text-tertiary)',
                                marginBottom: '32px',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <div style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: 'var(--text-primary)',
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.5)',
                            }} />
                            Software Engineering Student
                        </motion.div>

                        {/* Name Header - Cinematic & Fancy */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            style={{
                                fontFamily: 'var(--font-subheading)', // Space Grotesk (supports mixed case)
                                fontSize: 'clamp(48px, 12vw, 130px)',
                                fontWeight: 700,
                                lineHeight: 0.9,
                                marginBottom: '16px',
                                letterSpacing: '-0.05em',
                                position: 'relative',
                                overflowWrap: 'break-word',
                                wordBreak: 'break-word',
                            }}
                        >
                            {/* Greeting - Subtle */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: 'var(--text-tertiary)',
                                    marginBottom: '16px',
                                }}
                            >
                                Welcome to my portfolio
                            </motion.div>

                            {/* Main Name - Glowing Text */}
                            <motion.div
                                animate={{
                                    textShadow: [
                                        '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.2)',
                                        '0 0 50px rgba(255, 255, 255, 0.4), 0 0 100px rgba(255, 255, 255, 0.25)',
                                        '0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.2)',
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    color: 'var(--text-primary)',
                                    position: 'relative',
                                    display: 'inline-block',
                                    textTransform: 'none',
                                }}
                            >
                                I'm LongTo
                            </motion.div>
                        </motion.h1>

                        {/* Typing Animation Role - Modern Geometric */}
                        <motion.div
                            className="hero-role"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                fontFamily: 'var(--font-subheading)', // Space Grotesk
                                fontSize: 'clamp(24px, 4vw, 42px)',
                                fontWeight: 500,
                                marginBottom: '32px',
                                color: 'var(--text-secondary)',
                                height: '56px',
                                display: 'flex',
                                alignItems: 'center',
                                letterSpacing: '-0.01em',
                            }}
                        >
                            <span style={{
                                textShadow: '0 2px 20px rgba(255, 255, 255, 0.15)',
                            }}>
                                {currentRole}
                            </span>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '4px',
                                    height: '0.8em',
                                    backgroundColor: 'var(--text-primary)',
                                    marginLeft: '8px',
                                    animation: 'blink 1s infinite',
                                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                                }}
                            />
                        </motion.div>

                        {/* Social Media Links */}
                        <motion.div
                            className="hero-social"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: '32px',
                            }}
                        >
                            <motion.a
                                href="https://github.com/longtoZ"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -4 }}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '12px',
                                    color: 'var(--text-primary)',
                                    fontSize: '24px',
                                    transition: 'all 300ms ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                href="https://facebook.com/longto.has.fallen"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -4 }}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '12px',
                                    color: 'var(--text-primary)',
                                    fontSize: '24px',
                                    transition: 'all 300ms ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <FaFacebook />
                            </motion.a>
                            <motion.a
                                href="mailto:[EMAIL_ADDRESS]"
                                whileHover={{ scale: 1.1, y: -4 }}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-subtle)',
                                    borderRadius: '12px',
                                    color: 'var(--text-primary)',
                                    fontSize: '24px',
                                    transition: 'all 300ms ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.borderColor = 'var(--border-medium)';
                                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.15)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <FaEnvelope />
                            </motion.a>
                        </motion.div>

                        {/* Value Statement - Elegant Typography */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            style={{
                                fontFamily: 'var(--font-body)', // Playfair Display
                                fontSize: '18px',
                                fontWeight: 400,
                                lineHeight: 1.7,
                                marginBottom: '48px',
                                maxWidth: '600px',
                                color: 'var(--text-secondary)',
                                fontStyle: 'italic',
                                letterSpacing: '0.01em',
                            }}
                        >
                            Passionate about building modern web applications and learning new technologies.
                            Currently exploring full-stack development and researching AI integration in software solutions.
                        </motion.p>

                        {/* CTA Buttons - Premium Realistic Design */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}
                        >
                            {/* View Projects Button - Filled with Edge Lighting */}
                            <div style={{ position: 'relative' }}>
                                {/* Glow effect container */}
                                <div
                                    className="button-glow"
                                    style={{
                                        position: 'absolute',
                                        top: '-2px',
                                        left: '-2px',
                                        right: '-2px',
                                        bottom: '-2px',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4))',
                                        borderRadius: '12px',
                                        opacity: 0,
                                        transition: 'opacity 400ms ease',
                                        pointerEvents: 'none',
                                        filter: 'blur(8px)',
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        const projectsSection = document.getElementById('projects');
                                        if (projectsSection) {
                                            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                    style={{
                                        position: 'relative',
                                        padding: '20px 52px',
                                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
                                        border: 'none',
                                        color: '#000000',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: `
                                            0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                            0 4px 8px rgba(0, 0, 0, 0.15),
                                            0 8px 16px rgba(0, 0, 0, 0.1),
                                            0 16px 32px rgba(0, 0, 0, 0.05)
                                        `,
                                        outline: '1px solid rgba(255, 255, 255, 0.2)',
                                        outlineOffset: '-1px',
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.5) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.15) inset,
                                            0 6px 12px rgba(0, 0, 0, 0.2),
                                            0 12px 24px rgba(0, 0, 0, 0.15),
                                            0 24px 48px rgba(0, 0, 0, 0.1),
                                            0 0 0 2px rgba(255, 255, 255, 0.3)
                                        `;
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 100%)';
                                        const glow = e.currentTarget.previousElementSibling as HTMLElement;
                                        if (glow) glow.style.opacity = '1';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                            0 4px 8px rgba(0, 0, 0, 0.15),
                                            0 8px 16px rgba(0, 0, 0, 0.1),
                                            0 16px 32px rgba(0, 0, 0, 0.05)
                                        `;
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)';
                                        const glow = e.currentTarget.previousElementSibling as HTMLElement;
                                        if (glow) glow.style.opacity = '0';
                                    }}
                                    onMouseDown={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                            0 2px 4px rgba(0, 0, 0, 0.2),
                                            0 4px 8px rgba(0, 0, 0, 0.15)
                                        `;
                                    }}
                                    onMouseUp={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.5) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.15) inset,
                                            0 6px 12px rgba(0, 0, 0, 0.2),
                                            0 12px 24px rgba(0, 0, 0, 0.15),
                                            0 24px 48px rgba(0, 0, 0, 0.1),
                                            0 0 0 2px rgba(255, 255, 255, 0.3)
                                        `;
                                    }}
                                >
                                    View Projects
                                </button>
                            </div>

                            {/* Download Resume Button - Outlined with Glass Effect */}
                            <div style={{ position: 'relative' }}>
                                {/* Animated border glow */}
                                <div
                                    className="button-border-glow"
                                    style={{
                                        position: 'absolute',
                                        top: '-2px',
                                        left: '-2px',
                                        right: '-2px',
                                        bottom: '-2px',
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.3))',
                                        borderRadius: '12px',
                                        opacity: 0,
                                        transition: 'opacity 400ms ease',
                                        pointerEvents: 'none',
                                        filter: 'blur(6px)',
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = '/resume.pdf';
                                        link.download = 'Resume.pdf';
                                        link.click();
                                    }}
                                    style={{
                                        position: 'relative',
                                        padding: '20px 52px',
                                        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                                        border: '1.5px solid rgba(255, 255, 255, 0.2)',
                                        color: 'var(--text-primary)',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        cursor: 'pointer',
                                        borderRadius: '12px',
                                        transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: `
                                            0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                            0 4px 8px rgba(0, 0, 0, 0.12),
                                            0 8px 16px rgba(0, 0, 0, 0.08)
                                        `,
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.25) inset,
                                            0 6px 12px rgba(0, 0, 0, 0.15),
                                            0 12px 24px rgba(0, 0, 0, 0.1),
                                            0 0 0 1px rgba(255, 255, 255, 0.15)
                                        `;
                                        const glow = e.currentTarget.previousElementSibling as HTMLElement;
                                        if (glow) glow.style.opacity = '1';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                            0 4px 8px rgba(0, 0, 0, 0.12),
                                            0 8px 16px rgba(0, 0, 0, 0.08)
                                        `;
                                        const glow = e.currentTarget.previousElementSibling as HTMLElement;
                                        if (glow) glow.style.opacity = '0';
                                    }}
                                    onMouseDown={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-1px) scale(0.98)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
                                            0 2px 4px rgba(0, 0, 0, 0.15),
                                            0 4px 8px rgba(0, 0, 0, 0.1)
                                        `;
                                    }}
                                    onMouseUp={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                                        e.currentTarget.style.boxShadow = `
                                            0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
                                            0 -1px 0 0 rgba(0, 0, 0, 0.25) inset,
                                            0 6px 12px rgba(0, 0, 0, 0.15),
                                            0 12px 24px rgba(0, 0, 0, 0.1),
                                            0 0 0 1px rgba(255, 255, 255, 0.15)
                                        `;
                                    }}
                                >
                                    Download Resume
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* CSS Keyframes for animations */}
            <style>{`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                @keyframes gradientShift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
        </section>
    );
}
