import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    impacts: string[];
}

const experiences: Experience[] = [
    {
        id: '1',
        company: 'University of Science, Vietnam National University HCMC (VNU-HCMUS)',
        role: 'Undergraduate Student',
        period: '2023 - Present',
        impacts: [
            'Pursuing a Bachelor\'s degree in Software Engineering with a focus on software development and data structures.',
            'Engaged in various projects and coursework that enhance problem-solving and coding skills.',
        ],
    }
];

function ExperienceNode({ isInView }: { isInView: boolean }) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'var(--text-primary)',
                border: '3px solid var(--bg-edge)',
                flexShrink: 0,
                boxShadow: '0 0 20px var(--border-medium)',
            }}
        />
    );
}

export default function Experience() {
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
                    <div style={{ marginBottom: '64px', maxWidth: '600px' }}>
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
                            Experience
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
                            Academic <span style={{ color: 'var(--text-tertiary)' }}>Journey</span>
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {experiences.map((exp, index) => {
                            const ref = useRef(null);
                            const isInView = useInView(ref, { once: true, margin: '-100px' });

                            return (
                                <motion.div
                                    key={exp.id}
                                    ref={ref}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                    transition={{ delay: index * 0.2 }}
                                    style={{
                                        display: 'flex',
                                        gap: '32px',
                                        marginBottom: index !== experiences.length - 1 ? '64px' : 0,
                                    }}
                                >
                                    {/* Timeline Node */}
                                    <div
                                        style={{
                                            paddingTop: '8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <ExperienceNode isInView={isInView} />
                                        {index !== experiences.length - 1 && (
                                            <div
                                                style={{
                                                    width: '2px',
                                                    flex: 1,
                                                    background: 'var(--border-subtle)',
                                                    marginTop: '16px',
                                                }}
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div style={{ flex: 1, paddingBottom: '16px' }}>
                                        {/* Period */}
                                        <div
                                            style={{
                                                fontSize: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                color: 'var(--text-tertiary)',
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {exp.period}
                                        </div>

                                        {/* Role & Company */}
                                        <h3
                                            style={{
                                                fontSize: '28px',
                                                fontWeight: 700,
                                                color: 'var(--text-primary)',
                                                marginBottom: '8px',
                                                letterSpacing: '-0.01em',
                                            }}
                                        >
                                            {exp.role}
                                        </h3>
                                        <div
                                            style={{
                                                fontSize: '16px',
                                                color: 'var(--text-tertiary)',
                                                marginBottom: '24px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {exp.company}
                                        </div>

                                        {/* Impacts */}
                                        <ul
                                            style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                margin: 0,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '14px',
                                            }}
                                        >
                                            {exp.impacts.map((impact, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                                    style={{
                                                        display: 'flex',
                                                        gap: '12px',
                                                        alignItems: 'flex-start',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            width: '5px',
                                                            height: '5px',
                                                            borderRadius: '50%',
                                                            background: 'var(--text-tertiary)',
                                                            marginTop: '8px',
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <span
                                                        style={{
                                                            fontSize: '15px',
                                                            lineHeight: 1.7,
                                                            color: 'var(--text-secondary)',
                                                        }}
                                                    >
                                                        {impact}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
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
