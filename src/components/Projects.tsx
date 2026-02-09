import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { RiGeminiFill } from "react-icons/ri";
import { BsCpuFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { FaFileZipper } from "react-icons/fa6";
import { PiTreeStructure } from "react-icons/pi";
import { IoLogoVercel } from "react-icons/io5";
import {
    SiReact,
    SiExpress,
    SiPostgresql,
    SiPrisma,
    SiSocketdotio,
    SiAmazonwebservices,
    SiSupabase,
    SiRedis,
    SiKotlin,
    SiSpringboot,
    SiFirebase,
    SiFlask,
    SiStripe,
    SiCelery,
    SiJenkins,
    SiKubernetes,
    SiGrafana,
    SiOpencv,
    SiNumpy,
    SiCplusplus,
    SiScikitlearn,
    SiDocker,
    SiPandas,
    SiMysql,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiTypescript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiSelenium,
    SiGmail,
    SiJest
} from 'react-icons/si';
import {
    FaWindows
} from 'react-icons/fa';
import type { ReactElement } from 'react';
import SmartRestaurantImage from '../img/smart-restaurant.png';
import CineMinImage from '../img/cinemin.png';
import ForumusImage from '../img/forumus.png';
import StudyShareImage from '../img/study-share.png';
import DreamFlowerImage from '../img/dream-flower.png';
import GmailRemoteDesktopImage from '../img/gmail-remote-desktop.png';
import ImageSegmentationAndLabeling from '../img/image-segmentation-and-labeling.png';
import Spacify from '../img/spacify.png';
import ScoreGen2 from '../img/score-gen-2.png';
import TrieImage from '../img/trie.png';
import SimpleGamestoreImage from '../img/simple-gamestore.png';

type ProjectType = 'primary' | 'side';

interface Project {
    id: string;
    type: ProjectType;
    name: string;
    description: string;
    role: string;
    timeline: string;
    features: string[];
    tech: string[];
    image: string;
    github?: string;
    demo?: string;
}

// Tech icon mapping
const techIcons: Record<string, ReactElement> = {
    'React': <SiReact />,
    'Express.js': <SiExpress />,
    'PostgreSQL': <SiPostgresql />,
    'Prisma': <SiPrisma />,
    'WebSocket': <SiSocketdotio />,
    'AWS': <SiAmazonwebservices />,
    'Gemini API': <RiGeminiFill />,
    'Supabase': <SiSupabase />,
    'Redis': <SiRedis />,
    'Android Kotlin': <SiKotlin />,
    'Spring Boot': <SiSpringboot />,
    'Firestore': <SiFirebase />,
    'Firebase': <SiFirebase />,
    'Firebase Cloud Messaging': <SiFirebase />,
    'Flask': <SiFlask />,
    'Stripe': <SiStripe />,
    'Celery': <SiCelery />,
    'Jenkins': <SiJenkins />,
    'Kubernetes': <SiKubernetes />,
    'Grafana': <SiGrafana />,
    'OpenCV': <SiOpencv />,
    'YOLOv8': <SiOpencv />,
    'NumPy': <SiNumpy />,
    'Pydub': <SiOpencv />,
    'C++': <SiCplusplus />,
    'Socket': <SiSocketdotio />,
    'Windows API': <FaWindows />,
    'Multithreading': <BsCpuFill />,
    'scikit-learn': <SiScikitlearn />,
    'Docker': <SiDocker />,
    'Discord API': <SiDocker />,
    'Multer': <SiExpress />,
    'Pandas': <SiPandas />,
    'MySQL': <SiMysql />,
    'Next.js': <SiNextdotjs />,
    'TailwindCSS': <SiTailwindcss />,
    'MongoDB': <SiMongodb />,
    'TypeScript': <SiTypescript />,
    'Python': <SiPython />,
    'JavaScript': <IoLogoJavascript />,
    'HTML5': <SiHtml5 />,
    'CSS3': <SiCss3 />,
    'File Compression': <FaFileZipper />,
    'Data Structures': <PiTreeStructure />,
    'Vercel': <IoLogoVercel />,
    'Selenium': <SiSelenium />,
    'Gmail API': <SiGmail />,
    'Jest': <SiJest />,
};

const projects: Project[] = [
    {
        id: '1',
        type: 'primary',
        name: 'Smart Restaurant System',
        description: 'The Smart Restaurant Platform is a comprehensive restaurant management ecosystem designed to streamline restaurant operations, enhance customer experience, and provide centralized platform administration.',
        role: 'Full-Stack Lead',
        timeline: 'Nov 2025 - Jan 2026',
        features: [
            'User authentication with order history and preference tracking. Enables personalized recommendations and streamlined reordering based on past orders.',
            'Real-time order synchronization across all devices. Ensures staff and customers always see the latest order status and updates.',
            'QR-based table management and ordering system. Provides contactless ordering experience with instant menu access.',
            'Role-specific dashboards for customers, staff, and administrators. Each interface is tailored to specific workflows and permissions.',
            'Automated CI/CD pipeline with code quality checks and AWS deployment. Ensures reliable deployments with automated testing and infrastructure provisioning.',
        ],
        tech: ['React', 'TailwindCSS', 'Express.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Redis', 'WebSocket', 'AWS', 'Gmail API'],
        image: SmartRestaurantImage,
        github: 'https://github.com/K23-Smart-Restaurant',
        demo: 'https://youtu.be/l-kez8bRPS0',
    },
    {
        id: '2',
        type: 'primary',
        name: 'CineMin - Online Movie Ticketing Website',
        description: 'A comprehensive, full-stack cinema management and ticket booking platform built with modern web technologies. The system provides a seamless experience for customers to browse movies and book tickets, while offering administrators powerful tools to manage cinema operations.',
        role: 'Backend Engineer',
        timeline: 'Oct 2025 - Dec 2025',
        features: [
            'Interactive seat selection with live availability tracking. Users can visually choose preferred seats with instant feedback on availability.',
            'Automated reservation system with time-based cancellation. Prevents double bookings and automatically releases unpaid reservations.',
            'Email notifications for bookings, confirmations, and reminders. Keeps customers informed at every stage of their booking journey.',
            'Secure user authentication with profile management. Protects user data with encrypted passwords and JWT-based sessions.',
            'Comprehensive admin panel for cinema operations and analytics. Provides detailed insights into bookings, revenue, and customer behavior.',
        ],
        tech: ['React', 'TailwindCSS', 'Express.js', 'Supabase', 'Prisma', 'Redis'],
        image: CineMinImage,
        github: 'https://github.com/longtoZ/CineMin',
        demo: 'https://youtu.be/AeWGNoSpvGY',
    },
    {
        id: '3',
        type: 'primary',
        name: 'Forumus - Internal Forum for University',
        description: 'A comprehensive mobile forum application ecosystem built with Android Kotlin and Spring Boot, designed specifically for university communities to facilitate academic discussions, content moderation, and real-time communication.',
        role: 'Full-Stack Lead',
        timeline: 'Oct 2025 - Jan 2026',
        features: [
            'AI-powered content moderation for safe academic discussions. Uses Gemini API to detect and flag inappropriate content automatically.',
            'Real-time messaging with instant delivery and read receipts. Enables seamless communication between students with typing indicators.',
            'Multi-channel push notifications via FCM. Delivers timely updates for posts, replies, and mentions across devices.',
            'User reputation system with escalation and reporting tools. Community-driven moderation with automated escalation for repeated violations.',
            'Administrative dashboard for content and user management. Centralized control for monitoring activity and handling reports.',
        ],
        tech: ['Android Kotlin', 'Spring Boot', 'AWS', 'Firestore', 'Firebase Cloud Messaging', 'Gemini API', 'Gmail API'],
        image: ForumusImage,
        github: 'https://github.com/Forumus',
        demo: 'https://youtu.be/o50v57Y16vA',
    },
    {
        id: '4',
        type: 'primary',
        name: 'StudyShare - Online Document Sharing Platform',
        description: 'A platform enables students to upload, share, and access academic materials while leveraging AI-powered features for enhanced learning experiences. Built with a microservices architecture, the application ensures scalability, maintainability, and high performance.',
        role: 'Full-Stack Solo Developer',
        timeline: 'Aug 2025 - Oct 2025',
        features: [
            'Document upload with automatic text extraction and AI summarization. Processes PDFs and images to generate concise summaries for quick understanding.',
            'Stripe payment integration for premium content monetization. Enables secure transactions for accessing exclusive educational materials.',
            'AI chatbot assistant for instant Q&A on uploaded materials. Provides contextual answers based on document content using NLP.',
            'Personal library with bookmarks, favorites, and access history. Organizes materials with intuitive categorization and search capabilities.',
            'Jenkins CI/CD pipeline with automated testing and monitoring. Ensures code quality with continuous integration and Grafana dashboards.',
            'Microservices architecture deployed on Kubernetes clusters. Provides horizontal scalability and independent service deployment.',
        ],
        tech: ['React', 'Express.js', 'Flask', 'Supabase', 'Stripe', 'Celery', 'Redis', 'Jenkins', 'Kubernetes', 'Grafana', 'Jest', 'AWS', 'Gmail API', 'Gemini API'],
        image: StudyShareImage,
        github: 'https://github.com/longtoZ/Study-Share',
        demo: 'https://github.com/longtoZ/Study-Share/tree/main/images',
    },
    {
        id: '5',
        type: 'side',
        name: 'Dream Flower - Optical Music Recognition and Audio Processing for Piano',
        description: 'A web application that utilizes Optical Music Recognition (OMR) to convert images of piano sheet music into playable audio files, allowing users to hear the music directly from the sheet images they upload.',
        role: 'Solo Developer',
        timeline: 'Jan 2025 - Apr 2025',
        features: [
            'Advanced image preprocessing for enhanced sheet music clarity. Applies OpenCV filters to handle varying lighting and image quality.',
            'Custom-trained YOLOv8 model for precise musical note detection. Achieves high accuracy through training on annotated sheet music datasets.',
            'Post-processing algorithms to refine detections and correct errors. Validates musical logic and fixes common recognition mistakes.',
            'Intelligent conversion from detected notes to structured music data. Transforms bounding boxes into playable MIDI-compatible format.',
            'High-quality audio synthesis with professional piano samples. Uses pre-recorded samples with dynamic adjustments for realistic playback.',
            'Interactive editor for manual note adjustment and correction. Allows drag-and-drop editing for fine-tuning detected notes.',
            'Multi-threaded processing for fast image analysis and audio generation. Parallel execution reduces processing time significantly.',
            'WebSocket-based real-time progress updates during conversion. Provides live feedback on processing stages and completion status.',
        ],
        tech: ['React', 'TailwindCSS', 'Flask', 'OpenCV', 'YOLOv8', 'NumPy', 'Pydub', 'WebSocket'],
        image: DreamFlowerImage,
        github: 'https://github.com/longtoZ/Dream-Flower/',
        demo: 'https://youtu.be/_i_xELRyrVo',
    },
    {
        id: '6',
        type: 'side',
        name: 'Gmail PC Controller System',
        description: 'A system consisting of a Linux server that listens for command from multiple Gmail accounts and several client applications that receive and execute the commands sent via email to control various aspects of the user\'s PC remotely.',
        role: 'Backend Developer',
        timeline: 'Sep 2024 - Oct 2024',
        features: [
            'Gmail API integration for secure command transmission. Uses OAuth2 authentication for sending and receiving encrypted commands.',
            'Comprehensive remote control: file management, app launching, screen recording, webcam access. Supports a wide range of operations through email-based commands.',
            'Multi-client architecture supporting concurrent command processing. Handles requests from multiple Gmail accounts simultaneously without conflicts.',
            'Multi-threaded execution engine for parallel task handling. Executes multiple commands in parallel for improved responsiveness.',
            'Robust authentication system ensuring authorized access only. Validates sender identity and permissions before executing commands.',
        ],
        tech: ['C++', 'Socket', 'Gmail API', 'Windows API', 'Multithreading'],
        image: GmailRemoteDesktopImage,
        github: 'https://github.com/longtoZ/Gmail-Remote-Desktop',
        demo: 'https://youtu.be/aQrdP25BAwk',
    },
    {
        id: '7',
        type: 'side',
        name: 'Image Segmentation and Labeling Tool',
        description: 'A web-based tool that allows users to upload images and perform segmentation and labeling tasks based on color similarity using various clustering algorithms.',
        role: 'Solo Developer',
        timeline: 'Jul 2024 - Aug 2024',
        features: [
            'Intuitive image upload interface with real-time preview. Drag-and-drop functionality with instant image validation and display.',
            'K-Means clustering for color-based segmentation with median filtering. Groups similar colors while reducing noise for cleaner segments.',
            'Custom Flood-fill algorithm for particle removal and region merging. Eliminates small artifacts and consolidates fragmented regions.',
            'Hoshen-Kopelman labeling with Moore-neighbor and Quad-tree optimization. Efficiently assigns unique labels to connected components.',
            'Live progress visualization with downloadable segmented results. Shows step-by-step processing with PNG and data exports.',
        ],
        tech: ['React', 'Flask', 'OpenCV', 'scikit-learn', 'NumPy'],
        image: ImageSegmentationAndLabeling,
        github: 'https://github.com/longtoZ/Image-segmentation-and-labeling',
        demo: 'https://youtu.be/bq-ItJV3dMY',
    },
    {
        id: '8',
        type: 'side',
        name: 'Spacity - Extended Cloud Storage Service',
        description: 'A cloud storage web application that extends traditional file storage services by splitting files into smaller chunks and saving them in Discord channels. This approach leverages Discord\'s infrastructure to provide a unique and cost-effective cloud storage solution.',
        role: 'Solo Developer',
        timeline: 'Jun 2024 - Jul 2024',
        features: [
            'Smart file chunking for unlimited storage capacity. Splits large files into Discord-compatible segments for seamless storage.',
            'Discord CDN integration for distributed file hosting. Leverages Discord servers as reliable and free cloud storage backend.',
            'Secure user authentication with session management. JWT-based authentication ensures protected access to user files.',
            'Intuitive file manager for uploads, downloads, and organization. Features file search, folders, and progress tracking.',
            'Robust error handling with automatic retry mechanisms. Handles network failures and ensures reliable file reconstruction.',
        ],
        tech: ['React', 'Express.js', 'PostgreSQL', 'Discord API', 'Multer', 'WebSocket'],
        image: Spacify,
        github: 'https://github.com/longtoZ/spacify',
        demo: 'https://youtu.be/vi3m3ZNpoHw',
    },
    {
        id: '9',
        type: 'side',
        name: 'Score - High School Entrance Grade Analysis System',
        description: 'A web application that analyzes high school entrance exam scores to predict admission chances and provide insights for students and parents.',
        role: 'Solo Developer',
        timeline: 'May 2024 - Jun 2024',
        features: [
            'Historical data aggregation from thousands of entrance exam records. Compiled multi-year dataset with normalized scoring metrics.',
            'Statistical analysis with interactive score distribution charts. Visualizes trends with percentile rankings and admission thresholds.',
            'Advanced search and filtering for schools and programs. Find institutions by location, major, and admission requirements.',
            'School comparison tool with customizable ranking criteria. Compare multiple schools side-by-side with weighted scoring.',
            'Clean, intuitive interface for score input and prediction results. Provides instant admission probability with detailed breakdowns.',
        ],
        tech: ['React', 'Express.js', 'Pandas', 'MySQL', 'Vercel', 'Selenium'],
        image: ScoreGen2,
        github: 'https://github.com/longtoZ/Score-Gen-2/',
        demo: 'https://youtu.be/3b1j1Y8nX1s',
    },
    {
        id: '10',
        type: 'side',
        name: 'Trie in Autocomplete',
        description: 'A dedicated Data Structures and Algorithms project implementing a Trie data structure to power an efficient autocomplete system. It demonstrates core concepts of prefix trees and string matching algorithms used in modern search engines.',
        role: 'Solo Developer',
        timeline: 'Nov 2023',
        features: [
            'Efficient string insertion, deletion, and search operations. Optimized for rapid prefix lookups.',
            'Advanced regex support for pattern matching. Supports wildcards and character sets for complex queries.',
            'Fuzzy search capability for approximate string matching. Handles typos and close matches effectively.',
            'Performance optimization using caching mechanisms. Reduces lookup time for frequently accessed patterns.',
            'Comprehensive comparison with sorted array implementations. Demonstrates algorithmic advantages of Tries.',
        ],
        tech: ['C++', 'Data Structures', 'Algorithms'],
        image: TrieImage,
        github: 'https://github.com/longtoZ/Trie-Autocomplete',
        demo: 'https://youtu.be/s2pLG1ZJhXE'
    },
    {
        id: '11',
        type: 'side',
        name: 'VNU-LIB eBook Downloader',
        description: 'A specialized automation tool designed to streamline the process of downloading educational resources from VNU Library. It handles authentication, environment setup, and data aggregation to provide a seamless user experience.',
        role: 'Solo Developer',
        timeline: 'Side Project',
        features: [
            'Automated environment setup with sandboxed virtual execution. Prevents dependency conflicts with existing system packages.',
            'Multi-threaded downloading engine for high-speed retrieval. Maximizes bandwidth usage to reduce wait times.',
            'Intelligent file merging and processing. Combines downloaded sections into a single, cohesive document.',
            'Automatic resource cleanup and management. Maintains system cleanliness by removing temporary files after processing.',
            'Robust error handling and session management. Ensures reliable operation even with intermittent connections.',
        ],
        tech: ['Python', 'Multithreading'],
        image: '',
        github: 'https://github.com/longtoZ/vnulib',
    },
    {
        id: '12',
        type: 'side',
        name: 'Simple Gamestore',
        description: 'A modern e-commerce platform for digital game distribution, built as a comprehensive introduction to full-stack development. It features a responsive interface and essential shopping functionalities.',
        role: 'Full-Stack Developer',
        timeline: 'University Project',
        features: [
            'Responsive product catalog with filtering and search. Users can easily find games by genre, price, or popularity.',
            'Seamless shopping cart and checkout flow. Provides a smooth user experience from browsing to purchase.',
            'Dynamic product details with media integration. Showcases games with high-quality images and descriptions.',
            'Admin dashboard for inventory management. Allows administrators to add, update, or remove game listings.',
            'Modern UI design using TailwindCSS. Ensures a consistent and visually appealing experience across devices.',
        ],
        tech: ['Next.js', 'TailwindCSS', 'MongoDB', 'Express.js'],
        image: SimpleGamestoreImage,
        github: 'https://github.com/longtoZ/Simple-Gamestore',
        demo: 'https://www.youtube.com/watch?v=319IuHgZBHc'
    },
    {
        id: '13',
        type: 'side',
        name: 'Easier - Web Content Stylizer',
        description: 'A lightweight browser extension designed to enhance reading experiences by allowing users to customize web content styling. It provides granular control over text appearance and highlighting.',
        role: 'Solo Developer',
        timeline: 'Side Project',
        features: [
            'Real-time text styling and customization. Users can modify font colors, backgrounds, and styles on any webpage.',
            'Customizable color presets for quick application. Saves preferred style configurations for repeated use.',
            'Smart text highlighting mechanism. Automatically highlights selected text for better visibility and focus.',
            'Domain whitelisting for automatic activation. Allows users to define specific sites where the extension should be active.',
            'Lightweight and privacy-focused architecture. Operates locally without tracking user data or browsing history.',
        ],
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        image: '',
        github: 'https://github.com/longtoZ/easier',
    },
    {
        id: '14',
        type: 'side',
        name: 'Zipper - Multiprocessing Password Cracker',
        description: 'A high-performance system utility for password recovery, leveraging multiprocessing to accelerate brute-force operations on ZIP and RAR archives. It demonstrates advanced Python concurrency patterns.',
        role: 'Solo Developer',
        timeline: 'Side Project',
        features: [
            'Parallel processing architecture for maximum throughput. Utilizes multiple CPU cores to significantly speed up cracking.',
            'Dual-mode operation: Character-based and List-based. Offers flexibility in attack strategies based on known information.',
            'Support for multiple archive formats (ZIP, RAR). meaningful utility across different file types.',
            'Customizable character sets and length ranges. Allows fine-tuning of the brute-force search space.',
            'Real-time progress tracking and logging. Provides feedback on current speed, tested combinations, and estimated time remains.',
        ],
        tech: ['Python', 'Multithreading', 'File Compression'],
        image: '',
        github: 'https://github.com/longtoZ/zipper',
    }
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState<ProjectType>('primary');
    const filteredProjects = projects.filter((p) => p.type === activeTab);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Close modal on ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && selectedProject) {
                setSelectedProject(null);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [selectedProject]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [selectedProject]);

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Header */}
                    <div style={{ marginBottom: '48px', textAlign: 'center', maxWidth: '900px', margin: '0 auto 48px' }}>
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
                            Portfolio
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
                                marginBottom: '24px',
                            }}
                        >
                            Selected <span style={{ color: 'var(--text-secondary)' }}>Work</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                fontSize: 'clamp(15px, 2vw, 18px)',
                                lineHeight: 1.7,
                                color: 'var(--text-secondary)',
                                maxWidth: '700px',
                                margin: '0 auto',
                            }}
                        >
                            Click on any project to explore detailed features, technologies, and outcomes
                        </motion.p>
                    </div>

                    {/* Tab Toggle - Premium Realistic Design */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginBottom: '48px',
                            gap: '16px',
                        }}
                    >
                        {(['primary', 'side'] as ProjectType[]).map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <div key={tab} style={{ position: 'relative' }}>
                                    {/* Glow effect for active button */}
                                    {isActive && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '-2px',
                                                left: '-2px',
                                                right: '-2px',
                                                bottom: '-2px',
                                                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3))',
                                                borderRadius: '10px',
                                                opacity: 0.6,
                                                filter: 'blur(8px)',
                                                pointerEvents: 'none',
                                            }}
                                        />
                                    )}
                                    <motion.button
                                        onClick={() => setActiveTab(tab)}
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            position: 'relative',
                                            padding: '16px 36px',
                                            background: isActive
                                                ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)'
                                                : 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
                                            border: isActive
                                                ? 'none'
                                                : '1.5px solid rgba(255, 255, 255, 0.2)',
                                            color: isActive ? '#000000' : 'var(--text-tertiary)',
                                            fontSize: '13px',
                                            fontWeight: 700,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.12em',
                                            cursor: 'pointer',
                                            borderRadius: '10px',
                                            transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                                            backdropFilter: 'blur(10px)',
                                            boxShadow: isActive
                                                ? `0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                                   0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                                   0 4px 8px rgba(0, 0, 0, 0.15),
                                                   0 8px 16px rgba(0, 0, 0, 0.1),
                                                   0 16px 32px rgba(0, 0, 0, 0.05)`
                                                : `0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                                   0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                                   0 2px 4px rgba(0, 0, 0, 0.1)`,
                                            outline: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                                            outlineOffset: '-1px',
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                                e.currentTarget.style.boxShadow = `
                                                    0 1px 0 0 rgba(255, 255, 255, 0.2) inset,
                                                    0 -1px 0 0 rgba(0, 0, 0, 0.25) inset,
                                                    0 4px 8px rgba(0, 0, 0, 0.12),
                                                    0 8px 16px rgba(0, 0, 0, 0.08)
                                                `;
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.currentTarget.style.background = 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)';
                                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                                                e.currentTarget.style.boxShadow = `
                                                    0 1px 0 0 rgba(255, 255, 255, 0.15) inset,
                                                    0 -1px 0 0 rgba(0, 0, 0, 0.2) inset,
                                                    0 2px 4px rgba(0, 0, 0, 0.1)
                                                `;
                                            }
                                        }}
                                    >
                                        {tab === 'primary' ? 'Main Projects' : 'Side Projects'} ({projects.filter(p => p.type === tab).length})
                                    </motion.button>
                                </div>
                            );
                        })}
                    </div>

                    {/* Project Grid */}
                    <motion.div
                        layout
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))',
                            gap: '32px',
                            marginBottom: '32px',
                        }}
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => {
                                const isHovered = hoveredId === project.id;
                                return (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        onMouseEnter={() => setHoveredId(project.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        onClick={() => setSelectedProject(project)}
                                        style={{
                                            position: 'relative',
                                            background: isHovered ? 'var(--project-card-hover-bg)' : 'var(--project-card-bg)',
                                            border: `1px solid ${isHovered ? 'var(--border-glow)' : 'var(--border-subtle)'}`,
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                        whileHover={{ y: -8 }}
                                    >
                                        {/* Image */}
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '240px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                background: 'var(--bg-edge)',
                                            }}
                                        >
                                            <img
                                                src={project.image || 'https://placehold.co/600x400?text=No+Image'}
                                                alt={project.name}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.4s ease',
                                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                                }}
                                            />
                                            {/* Overlay */}
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: isHovered
                                                        ? 'linear-gradient(to bottom, transparent 0%, var(--project-image-overlay-hover) 100%)'
                                                        : 'linear-gradient(to bottom, transparent 0%, var(--project-image-overlay) 100%)',
                                                    transition: 'all 0.3s ease',
                                                }}
                                            />
                                            {/* Hover indicator */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: isHovered ? 1 : 0 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '16px',
                                                    right: '16px',
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                    backdropFilter: 'blur(10px)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: 'var(--text-primary)',
                                                    fontSize: '18px',
                                                }}
                                            >
                                                →
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '24px' }}>
                                            <h3
                                                style={{
                                                    fontSize: '20px',
                                                    fontWeight: 700,
                                                    color: 'var(--text-primary)',
                                                    marginBottom: '8px',
                                                    letterSpacing: '-0.01em',
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {project.name}
                                            </h3>
                                            <div
                                                style={{
                                                    fontSize: '13px',
                                                    color: 'var(--text-tertiary)',
                                                    marginBottom: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                }}
                                            >
                                                <span style={{
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background: 'var(--text-secondary)'
                                                }} />
                                                {project.role}
                                            </div>
                                            <p
                                                style={{
                                                    fontSize: '14px',
                                                    lineHeight: 1.6,
                                                    color: 'var(--text-secondary)',
                                                    marginBottom: '16px',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                {project.description}
                                            </p>
                                            {/* Tech Stack Preview */}
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '6px',
                                                }}
                                            >
                                                {project.tech.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        style={{
                                                            fontSize: '11px',
                                                            padding: '4px 10px',
                                                            background: 'rgba(255, 255, 255, 0.08)',
                                                            border: '1px solid var(--border-subtle)',
                                                            borderRadius: '4px',
                                                            color: 'var(--text-tertiary)',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <span
                                                        style={{
                                                            fontSize: '11px',
                                                            padding: '4px 10px',
                                                            color: 'var(--text-tertiary)',
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        +{project.tech.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Corner Brackets */}
                                        <motion.div
                                            animate={{
                                                width: isHovered ? '24px' : '16px',
                                                height: isHovered ? '24px' : '16px',
                                                opacity: isHovered ? 1 : 0.5
                                            }}
                                            style={{
                                                position: 'absolute',
                                                bottom: '20px',
                                                right: '20px',
                                                borderBottom: '2px solid var(--border-glow)',
                                                borderRight: '2px solid var(--border-glow)',
                                                transition: 'all 0.3s ease',
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Modal */}
                    <AnimatePresence>
                        {selectedProject && (
                            <>
                                {/* Backdrop */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        position: 'fixed',
                                        inset: 0,
                                        background: 'rgba(0, 0, 0, 0.6)',
                                        backdropFilter: 'blur(8px)',
                                        zIndex: 9998,
                                    }}
                                />

                                {/* Modal Container - Centered with flex */}
                                <div
                                    style={{
                                        position: 'fixed',
                                        inset: 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 9999,
                                        pointerEvents: 'none',
                                        padding: '20px',
                                        cursor: 'auto', // Ensure cursor is visible
                                    }}
                                >
                                    {/* Modal Content */}
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            rotateX: 45,
                                            y: 100,
                                            filter: 'blur(20px)'
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            rotateX: 0,
                                            y: 0,
                                            filter: 'blur(0px)'
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.8,
                                            rotateX: -20,
                                            y: 50,
                                            filter: 'blur(10px)'
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                        style={{
                                            width: '100%',
                                            maxWidth: '1100px',
                                            maxHeight: '90vh',
                                            background: 'var(--bg-edge)',
                                            backdropFilter: 'blur(40px)',
                                            border: '1px solid var(--border-medium)',
                                            borderRadius: '24px',
                                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                            pointerEvents: 'auto',
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {/* Close Button */}
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2, duration: 0.3, type: 'spring', stiffness: 400 }}
                                            onClick={() => setSelectedProject(null)}
                                            style={{
                                                position: 'absolute',
                                                top: '24px',
                                                right: '24px',
                                                width: '48px',
                                                height: '48px',
                                                borderRadius: '50%',
                                                border: '1px solid var(--border-subtle)',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                color: 'var(--text-primary)',
                                                fontSize: '24px',
                                                cursor: 'pointer',
                                                zIndex: 10,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.2s ease',
                                            }}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                            }}
                                        >
                                            ×
                                        </motion.button>

                                        {/* Scrollable Content */}
                                        <div
                                            style={{
                                                flex: 1,
                                                overflowY: 'auto',
                                                overflowX: 'hidden',
                                            }}
                                        >
                                            {/* Image Header */}
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: '400px',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <img
                                                    src={selectedProject.image || 'https://placehold.co/600x400?text=No+Image'}
                                                    alt={selectedProject.name}
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        inset: 0,
                                                        background: 'linear-gradient(to bottom, transparent 0%, var(--project-image-overlay) 100%)',
                                                    }}
                                                />
                                            </div>

                                            {/* Content */}
                                            <div style={{ padding: '48px 48px 64px' }}>
                                                <h2
                                                    style={{
                                                        fontFamily: 'var(--font-subheading)',
                                                        fontSize: 'clamp(32px, 4vw, 48px)',
                                                        fontWeight: 800,
                                                        color: 'var(--text-primary)',
                                                        marginBottom: '16px',
                                                        letterSpacing: '-0.02em',
                                                    }}
                                                >
                                                    {selectedProject.name}
                                                </h2>

                                                {/* Meta */}
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        gap: '24px',
                                                        marginBottom: '32px',
                                                        flexWrap: 'wrap',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '8px',
                                                            fontSize: '15px',
                                                            color: 'var(--text-secondary)',
                                                        }}
                                                    >
                                                        <span style={{
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '50%',
                                                            background: 'var(--text-secondary)'
                                                        }} />
                                                        {selectedProject.role}
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: '15px',
                                                            color: 'var(--text-tertiary)',
                                                            fontFamily: 'monospace',
                                                        }}
                                                    >
                                                        {selectedProject.timeline}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p
                                                    style={{
                                                        fontSize: '17px',
                                                        lineHeight: 1.8,
                                                        color: 'var(--text-secondary)',
                                                        marginBottom: '40px',
                                                    }}
                                                >
                                                    {selectedProject.description}
                                                </p>

                                                {/* Features */}
                                                <div style={{ marginBottom: '40px' }}>
                                                    <h3
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            letterSpacing: '0.15em',
                                                            textTransform: 'uppercase',
                                                            color: 'var(--text-tertiary)',
                                                            marginBottom: '20px',
                                                        }}
                                                    >
                                                        Key Features
                                                    </h3>
                                                    <ul
                                                        style={{
                                                            listStyle: 'none',
                                                            padding: 0,
                                                            margin: 0,
                                                            display: 'grid',
                                                            gap: '16px',
                                                        }}
                                                    >
                                                        {selectedProject.features.map((feature, idx) => (
                                                            <li
                                                                key={idx}
                                                                style={{
                                                                    fontSize: '15px',
                                                                    lineHeight: 1.7,
                                                                    color: 'var(--text-secondary)',
                                                                    paddingLeft: '28px',
                                                                    position: 'relative',
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        position: 'absolute',
                                                                        left: '0',
                                                                        top: '10px',
                                                                        width: '6px',
                                                                        height: '6px',
                                                                        borderRadius: '50%',
                                                                        background: 'var(--text-primary)',
                                                                    }}
                                                                />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Tech Stack */}
                                                <div style={{ marginBottom: '40px' }}>
                                                    <h3
                                                        style={{
                                                            fontSize: '13px',
                                                            fontWeight: 700,
                                                            letterSpacing: '0.15em',
                                                            textTransform: 'uppercase',
                                                            color: 'var(--text-tertiary)',
                                                            marginBottom: '20px',
                                                        }}
                                                    >
                                                        Tech Stack
                                                    </h3>
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: '12px',
                                                        }}
                                                    >
                                                        {selectedProject.tech.map((tech) => (
                                                            <div
                                                                key={tech}
                                                                style={{
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '8px',
                                                                    padding: '10px 16px',
                                                                    background: 'rgba(255, 255, 255, 0.08)',
                                                                    border: '1px solid var(--border-subtle)',
                                                                    borderRadius: '8px',
                                                                    fontSize: '14px',
                                                                    fontWeight: 600,
                                                                    color: 'var(--text-secondary)',
                                                                }}
                                                            >
                                                                {techIcons[tech] && (
                                                                    <span style={{ fontSize: '18px', display: 'flex' }}>
                                                                        {techIcons[tech]}
                                                                    </span>
                                                                )}
                                                                {tech}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Links */}
                                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                                    {selectedProject.github && (
                                                        <a
                                                            href={selectedProject.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '10px',
                                                                padding: '16px 32px',
                                                                fontSize: '15px',
                                                                fontWeight: 600,
                                                                color: 'var(--bg-edge)',
                                                                background: 'var(--text-primary)',
                                                                border: '1px solid var(--text-primary)',
                                                                borderRadius: '10px',
                                                                textDecoration: 'none',
                                                                transition: 'all 200ms ease',
                                                            }}
                                                            onMouseOver={(e) => {
                                                                e.currentTarget.style.background = 'transparent';
                                                                e.currentTarget.style.color = 'var(--text-primary)';
                                                            }}
                                                            onMouseOut={(e) => {
                                                                e.currentTarget.style.background = 'var(--text-primary)';
                                                                e.currentTarget.style.color = 'var(--bg-edge)';
                                                            }}
                                                        >
                                                            <FaGithub size={20} />
                                                            Source Code
                                                        </a>
                                                    )}
                                                    {selectedProject.demo && (
                                                        <a
                                                            href={selectedProject.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            style={{
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                gap: '10px',
                                                                padding: '16px 32px',
                                                                fontSize: '15px',
                                                                fontWeight: 600,
                                                                color: 'var(--text-primary)',
                                                                background: 'transparent',
                                                                border: '1px solid var(--border-medium)',
                                                                borderRadius: '10px',
                                                                textDecoration: 'none',
                                                                transition: 'all 200ms ease',
                                                            }}
                                                            onMouseOver={(e) => {
                                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                                                                e.currentTarget.style.borderColor = 'var(--text-primary)';
                                                            }}
                                                            onMouseOut={(e) => {
                                                                e.currentTarget.style.background = 'transparent';
                                                                e.currentTarget.style.borderColor = 'var(--border-medium)';
                                                            }}
                                                        >
                                                            <FaExternalLinkAlt size={18} />
                                                            Live Demo
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
