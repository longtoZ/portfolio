import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    SiReact,
    SiTailwindcss,
    SiJest,
    SiExpress,
    SiSocketdotio,
    SiRedis,
    SiOpencv,
    SiFlask,
    SiSupabase,
    SiPrisma,
    SiLangchain,
    SiKubernetes,
    SiPrometheus,
    SiGrafana,
    SiSpringboot,
    SiSelenium,
    SiKotlin,
    SiFirebase,
    SiAmazonwebservices,
    SiJenkins,
    SiGithubactions,
    SiMongodb,
    SiPostgresql,
    SiMysql,
} from 'react-icons/si';
import type { ReactElement } from 'react';

type Category = 'Frontend' | 'Backend' | 'DevOps' | 'Mobile' | 'Database' | 'Tools';

interface TechItem {
    icon: ReactElement;
    name: string;
    category: Category;
}

const techStack: TechItem[] = [
    { icon: <SiReact />, name: 'React', category: 'Frontend' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', category: 'Frontend' },
    { icon: <SiJest />, name: 'Jest', category: 'Tools' },
    { icon: <SiExpress />, name: 'Express.js', category: 'Backend' },
    { icon: <SiSocketdotio />, name: 'Socket.IO', category: 'Backend' },
    { icon: <SiRedis />, name: 'Redis', category: 'Backend' },
    { icon: <SiOpencv />, name: 'OpenCV', category: 'Tools' },
    { icon: <SiFlask />, name: 'Flask', category: 'Backend' },
    { icon: <SiSupabase />, name: 'Supabase', category: 'Backend' },
    { icon: <SiPrisma />, name: 'Prisma', category: 'Backend' },
    { icon: <SiLangchain />, name: 'LangGraph', category: 'Tools' },
    { icon: <SiSpringboot />, name: 'Spring Boot', category: 'Backend' },
    { icon: <SiSelenium />, name: 'Selenium', category: 'Tools' },
    { icon: <SiKotlin />, name: 'Kotlin', category: 'Mobile' },
    { icon: <SiFirebase />, name: 'Firebase', category: 'Mobile' },
    { icon: <SiGithubactions />, name: 'GitHub Actions', category: 'DevOps' },
    { icon: <SiAmazonwebservices />, name: 'AWS', category: 'DevOps' },
    { icon: <SiJenkins />, name: 'Jenkins', category: 'DevOps' },
    { icon: <SiKubernetes />, name: 'Kubernetes', category: 'DevOps' },
    { icon: <SiPrometheus />, name: 'Prometheus', category: 'DevOps' },
    { icon: <SiGrafana />, name: 'Grafana', category: 'DevOps' },
    { icon: <SiMongodb />, name: 'MongoDB', category: 'Database' },
    { icon: <SiPostgresql />, name: 'PostgreSQL', category: 'Database' },
    { icon: <SiMysql />, name: 'MySQL', category: 'Database' },
];

const categories: Category[] = ['Frontend', 'Backend', 'DevOps', 'Mobile', 'Database', 'Tools'];

// Brand colors for each technology
const techColors: Record<string, string> = {
    'React': '#61DAFB',
    'Tailwind CSS': '#06B6D4',
    'Jest': '#C21325',
    'Express.js': '#000000',
    'Socket.IO': '#010101',
    'Redis': '#DC382D',
    'OpenCV': '#5C3EE8',
    'Flask': '#000000',
    'Supabase': '#3ECF8E',
    'Prisma': '#2D3748',
    'Langchain': '#FF5722',
    'Spring Boot': '#6DB33F',
    'Selenium': '#43B02A',
    'Kotlin': '#7F52FF',
    'Firebase': '#FFCA28',
    'GitHub Actions': '#2088FF',
    'AWS': '#FF9900',
    'Jenkins': '#D24939',
    'Kubernetes': '#326CE5',
    'Prometheus': '#E6522C',
    'Grafana': '#F46800',
    'MongoDB': '#47A248',
    'PostgreSQL': '#4169E1',
    'MySQL': '#4479A1',
};

export default function Skills() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cardPositions, setCardPositions] = useState<Record<string, { x: number; y: number }>>({});
    const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
    const [isMouseInGrid, setIsMouseInGrid] = useState(false);
    const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

    const filteredTech = activeCategory === 'All' 
        ? techStack 
        : techStack.filter(tech => tech.category === activeCategory);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, techName: string) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        setMousePosition({ x, y });
        setHoveredCard(techName);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
        setMousePosition({ x: 0, y: 0 });
    };

    const handleGridMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setGlobalMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setIsMouseInGrid(true);
    };

    const handleGridMouseLeave = () => {
        setIsMouseInGrid(false);
    };

    const updateCardPosition = (techName: string, element: HTMLDivElement | null) => {
        if (element && element.parentElement) {
            const rect = element.getBoundingClientRect();
            const parent = element.parentElement.getBoundingClientRect();
            const centerX = rect.left - parent.left + rect.width / 2;
            const centerY = rect.top - parent.top + rect.height / 2;
            
            setCardPositions(prev => {
                // Only update if position changed significantly
                const oldPos = prev[techName];
                if (!oldPos || Math.abs(oldPos.x - centerX) > 1 || Math.abs(oldPos.y - centerY) > 1) {
                    return {
                        ...prev,
                        [techName]: { x: centerX, y: centerY }
                    };
                }
                return prev;
            });
        }
    };

    const calculateOpacity = (techName: string): number => {
        // Directly hovered card gets full brightness
        if (hoveredCard === techName) return 1.0;
        
        if (!isMouseInGrid) return 0.45; // Default low opacity when mouse not in grid
        
        const cardPos = cardPositions[techName];
        if (!cardPos) return 0.45;

        const distance = Math.sqrt(
            Math.pow(globalMousePos.x - cardPos.x, 2) + 
            Math.pow(globalMousePos.y - cardPos.y, 2)
        );

        // Spotlight radius - cards within this distance get brightness boost
        const spotlightRadius = 250;
        
        if (distance < spotlightRadius) {
            // Smooth falloff from 0.95 to 0.45 (leave 1.0 for direct hover)
            const normalizedDistance = distance / spotlightRadius;
            // Use ease-out curve for smoother transition
            const easedDistance = 1 - Math.pow(1 - normalizedDistance, 2);
            return 0.95 - (easedDistance * 0.6);
        }
        
        return 0.45; // Dim opacity for cards outside spotlight
    };
    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ marginBottom: '48px', maxWidth: '600px' }}>
                        <div
                            style={{
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                color: 'var(--text-tertiary)',
                                marginBottom: '20px',
                            }}
                        >
                            Expertise
                        </div>
                        <h2
                            style={{
                                fontSize: 'clamp(40px, 6vw, 72px)',
                                fontWeight: 800,
                                color: 'var(--text-primary)',
                                lineHeight: 1.1,
                                letterSpacing: '-0.02em',
                            }}
                        >
                            Tech <span style={{ color: 'var(--text-secondary)' }}>Stack</span>
                        </h2>
                    </div>

                    {/* Category Filter Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '12px',
                            marginBottom: '48px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <button
                            onClick={() => setActiveCategory('All')}
                            style={{
                                padding: '12px 24px',
                                background: activeCategory === 'All' ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--border-subtle)',
                                color: activeCategory === 'All' ? 'var(--bg-edge)' : 'var(--text-tertiary)',
                                fontSize: '12px',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                borderRadius: '8px',
                                transition: 'all 300ms ease',
                            }}
                        >
                            All
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    padding: '12px 24px',
                                    background: activeCategory === category ? 'var(--text-primary)' : 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-subtle)',
                                    color: activeCategory === category ? 'var(--bg-edge)' : 'var(--text-tertiary)',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    transition: 'all 300ms ease',
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Unified Tech Stack Grid */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 120px), 1fr))',
                            gap: '20px',
                        }}
                        onMouseMove={handleGridMouseMove}
                        onMouseLeave={handleGridMouseLeave}
                    >
                        {filteredTech.map((tech, index) => {
                            const isHovered = hoveredCard === tech.name;
                            const magneticOffset = isHovered 
                                ? { x: mousePosition.x * 0.15, y: mousePosition.y * 0.15 }
                                : { x: 0, y: 0 };
                            const cardOpacity = calculateOpacity(tech.name);

                            return (
                                <motion.div
                                    key={tech.name}
                                    ref={(el) => updateCardPosition(tech.name, el)}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ 
                                        opacity: cardOpacity,
                                        scale: 1,
                                        x: magneticOffset.x,
                                        y: magneticOffset.y,
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ 
                                        opacity: { duration: 0.15, ease: 'easeOut' },
                                        delay: index * 0.03,
                                        x: { type: 'spring', stiffness: 200, damping: 20 },
                                        y: { type: 'spring', stiffness: 200, damping: 20 },
                                        scale: { duration: 0.15 },
                                    }}
                                    whileHover={{ scale: 1.08, y: -6 }}
                                    className="glass-card"
                                    style={{
                                        padding: '28px 20px',
                                        background: isHovered 
                                            ? 'var(--skill-card-bg-hover)'
                                            : 'var(--skill-card-bg)',
                                        filter: isHovered ? 'brightness(1.5)' : 'brightness(1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '16px',
                                        cursor: 'default',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        boxShadow: isHovered 
                                            ? '0 8px 32px rgba(255, 255, 255, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.1)' 
                                            : 'none',
                                        transition: 'background 0.15s ease-out, box-shadow 0.15s ease-out',
                                    }}
                                    onMouseMove={(e) => handleMouseMove(e, tech.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {/* Top glow */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            width: '60%',
                                            height: '2px',
                                            background:
                                                'linear-gradient(90deg, transparent, var(--border-medium), transparent)',
                                        }}
                                    />
                                    <motion.div
                                        animate={{
                                            color: isHovered ? (techColors[tech.name] || 'var(--text-primary)') : 'var(--text-secondary)',
                                            rotate: isHovered ? 8 : 0,
                                        }}
                                        transition={{ duration: 0.15 }}
                                        style={{
                                            fontSize: '48px',
                                        }}
                                    >
                                        {tech.icon}
                                    </motion.div>
                                    <div
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: 'var(--text-secondary)',
                                            textAlign: 'center',
                                            letterSpacing: '-0.01em',
                                        }}
                                    >
                                        {tech.name}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
