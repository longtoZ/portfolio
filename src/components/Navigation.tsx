import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { HiMenu, HiX } from 'react-icons/hi';

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

interface NavigationProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export default function Navigation({ theme, toggleTheme }: NavigationProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // Show nav after scrolling 200px
            setIsVisible(window.scrollY > 200);

            // Determine active section
            const sections = navItems.map((item) => item.href.replace('#', ''));
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && !isMobile && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '24px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 1000,
                        }}
                    >
                        <motion.nav
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                padding: '16px 24px',
                                background: theme === 'dark'
                                    ? 'rgba(0, 0, 0, 0.8)'
                                    : 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(20px)',
                                border: theme === 'dark'
                                    ? '1px solid rgba(255, 255, 255, 0.1)'
                                    : '1px solid rgba(0, 0, 0, 0.1)',
                                borderRadius: '50px',
                                boxShadow: theme === 'dark'
                                    ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                                transition: 'all 300ms ease',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    gap: '8px',
                                    alignItems: 'center',
                                }}
                            >
                                {navItems.map((item) => {
                                    const isActive = activeSection === item.href.replace('#', '');
                                    return (
                                        <motion.button
                                            key={item.href}
                                            onClick={() => scrollToSection(item.href)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            style={{
                                                position: 'relative',
                                                padding: '10px 20px',
                                                background: isActive
                                                    ? theme === 'dark'
                                                        ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.12) 100%)'
                                                        : 'linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.08) 100%)'
                                                    : 'transparent',
                                                border: 'none',
                                                color: isActive
                                                    ? theme === 'dark' ? '#ffffff' : '#000000'
                                                    : theme === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.6)'
                                                        : 'rgba(0, 0, 0, 0.6)',
                                                fontSize: '13px',
                                                fontWeight: isActive ? 700 : 500,
                                                cursor: 'pointer',
                                                borderRadius: '50px',
                                                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                boxShadow: isActive
                                                    ? theme === 'dark'
                                                        ? `0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
                                                           0 -1px 0 0 rgba(0, 0, 0, 0.15) inset,
                                                           0 2px 4px rgba(0, 0, 0, 0.1)`
                                                        : `0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
                                                           0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                                           0 2px 4px rgba(0, 0, 0, 0.08)`
                                                    : 'none',
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isActive) {
                                                    e.currentTarget.style.background = theme === 'dark'
                                                        ? 'rgba(255, 255, 255, 0.08)'
                                                        : 'rgba(0, 0, 0, 0.05)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                if (!isActive) {
                                                    e.currentTarget.style.background = 'transparent';
                                                }
                                            }}
                                        >
                                            {item.label}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '6px',
                                                        left: '50%',
                                                        transform: 'translateX(-50%)',
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        background: theme === 'dark' ? '#ffffff' : '#000000',
                                                        boxShadow: theme === 'dark'
                                                            ? '0 0 8px rgba(255, 255, 255, 0.6)'
                                                            : '0 0 8px rgba(0, 0, 0, 0.4)',
                                                    }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                                <div style={{ marginLeft: '4px' }}>
                                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                                </div>
                            </div>
                        </motion.nav>
                    </div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation */}
            {isMobile && (
                <>
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -100, opacity: 0 }}
                                style={{
                                    position: 'fixed',
                                    top: '16px',
                                    right: '16px',
                                    zIndex: 1001,
                                    display: 'flex',
                                    gap: '12px',
                                    alignItems: 'center',
                                }}
                            >
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: theme === 'dark'
                                            ? 'linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 100%)'
                                            : 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                                        backdropFilter: 'blur(20px)',
                                        border: theme === 'dark'
                                            ? '1px solid rgba(255, 255, 255, 0.15)'
                                            : '1px solid rgba(0, 0, 0, 0.1)',
                                        color: 'var(--text-primary)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px',
                                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                        boxShadow: theme === 'dark'
                                            ? `0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
                                               0 4px 8px rgba(0, 0, 0, 0.3),
                                               0 8px 16px rgba(0, 0, 0, 0.2)`
                                            : `0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.08) inset,
                                               0 4px 8px rgba(0, 0, 0, 0.1),
                                               0 8px 16px rgba(0, 0, 0, 0.05)`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = theme === 'dark'
                                            ? `0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.35) inset,
                                               0 6px 12px rgba(0, 0, 0, 0.4),
                                               0 12px 24px rgba(0, 0, 0, 0.25)`
                                            : `0 1px 0 0 rgba(255, 255, 255, 0.5) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                               0 6px 12px rgba(0, 0, 0, 0.15),
                                               0 12px 24px rgba(0, 0, 0, 0.08)`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = theme === 'dark'
                                            ? `0 1px 0 0 rgba(255, 255, 255, 0.1) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.3) inset,
                                               0 4px 8px rgba(0, 0, 0, 0.3),
                                               0 8px 16px rgba(0, 0, 0, 0.2)`
                                            : `0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                               0 -1px 0 0 rgba(0, 0, 0, 0.08) inset,
                                               0 4px 8px rgba(0, 0, 0, 0.1),
                                               0 8px 16px rgba(0, 0, 0, 0.05)`;
                                    }}
                                >
                                    {isMobileMenuOpen ? <HiX /> : <HiMenu />}
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    position: 'fixed',
                                    inset: 0,
                                    background: theme === 'dark'
                                        ? 'rgba(0, 0, 0, 0.8)'
                                        : 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    zIndex: 1000,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '20px',
                                }}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    onClick={(e) => e.stopPropagation()}
                                    style={{
                                        background: theme === 'dark'
                                            ? 'rgba(0, 0, 0, 0.95)'
                                            : 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(20px)',
                                        border: theme === 'dark'
                                            ? '1px solid rgba(255, 255, 255, 0.1)'
                                            : '1px solid rgba(0, 0, 0, 0.1)',
                                        borderRadius: '24px',
                                        padding: '32px 24px',
                                        width: '100%',
                                        maxWidth: '400px',
                                        boxShadow: theme === 'dark'
                                            ? '0 20px 60px rgba(0, 0, 0, 0.6)'
                                            : '0 20px 60px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <nav
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px',
                                        }}
                                    >
                                        {navItems.map((item, index) => {
                                            const isActive = activeSection === item.href.replace('#', '');
                                            return (
                                                <motion.button
                                                    key={item.href}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    onClick={() => scrollToSection(item.href)}
                                                    whileTap={{ scale: 0.98 }}
                                                    style={{
                                                        padding: '16px 20px',
                                                        background: isActive
                                                            ? theme === 'dark'
                                                                ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 100%)'
                                                                : 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.06) 100%)'
                                                            : 'transparent',
                                                        border: 'none',
                                                        borderRadius: '12px',
                                                        color: 'var(--text-primary)',
                                                        fontSize: '18px',
                                                        fontWeight: isActive ? 700 : 500,
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.05em',
                                                        boxShadow: isActive
                                                            ? theme === 'dark'
                                                                ? `0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                                                   0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                                                   0 2px 6px rgba(0, 0, 0, 0.15)`
                                                                : `0 1px 0 0 rgba(255, 255, 255, 0.3) inset,
                                                                   0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                                                   0 2px 6px rgba(0, 0, 0, 0.1)`
                                                            : 'none',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (!isActive) {
                                                            e.currentTarget.style.background = theme === 'dark'
                                                                ? 'rgba(255, 255, 255, 0.06)'
                                                                : 'rgba(0, 0, 0, 0.04)';
                                                            e.currentTarget.style.boxShadow = theme === 'dark'
                                                                ? '0 1px 3px rgba(0, 0, 0, 0.1)'
                                                                : '0 1px 3px rgba(0, 0, 0, 0.05)';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (!isActive) {
                                                            e.currentTarget.style.background = 'transparent';
                                                            e.currentTarget.style.boxShadow = 'none';
                                                        }
                                                    }}
                                                >
                                                    {item.label}
                                                </motion.button>
                                            );
                                        })}
                                    </nav>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </>
    );
}
