import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                position: 'relative',
                padding: '10px',
                background: theme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)' 
                    : 'rgba(0, 0, 0, 0.08)',
                border: theme === 'dark'
                    ? '1px solid rgba(255, 255, 255, 0.2)'
                    : '1px solid rgba(0, 0, 0, 0.15)',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                transition: 'all 300ms ease',
                overflow: 'hidden',
            }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0,
                    opacity: theme === 'dark' ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <HiMoon
                    size={20}
                    style={{
                        color: '#E8E8E8',
                        filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))',
                    }}
                />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : -180,
                    scale: theme === 'light' ? 1 : 0,
                    opacity: theme === 'light' ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <HiSun
                    size={20}
                    style={{
                        color: '#F59E0B',
                        filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.5))',
                    }}
                />
            </motion.div>
        </motion.button>
    );
}
