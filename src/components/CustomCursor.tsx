import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });
    const isHovering = useRef(false);
    const isClicking = useRef(false);

    useEffect(() => {
        // Check if touch device
        const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isTouchDevice) return;

        const cursor = cursorRef.current;
        const trail = trailRef.current;
        if (!cursor || !trail) return;

        const updateMousePosition = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            // Update cursor position immediately for no lag
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const handleMouseDown = () => {
            isClicking.current = true;
            cursor.classList.add('click');
        };

        const handleMouseUp = () => {
            isClicking.current = false;
            cursor.classList.remove('click');
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const wasHovering = isHovering.current;
            
            // Check if hovering over interactive elements
            const newIsHovering = 
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('button') !== null ||
                target.closest('a') !== null ||
                target.classList.contains('glass-card') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            if (newIsHovering !== wasHovering) {
                isHovering.current = newIsHovering;
                if (newIsHovering) {
                    cursor.classList.add('hover');
                } else {
                    cursor.classList.remove('hover');
                }
            }
        };

        // Smooth trail animation using requestAnimationFrame
        let animationFrameId: number;
        const animateTrail = () => {
            // Smooth lerp with faster response
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.25;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.25;
            
            trail.style.left = `${trailPos.current.x}px`;
            trail.style.top = `${trailPos.current.y}px`;
            
            animationFrameId = requestAnimationFrame(animateTrail);
        };
        animateTrail();

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                id="custom-cursor"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            />
            <div
                ref={trailRef}
                id="cursor-trail"
                style={{
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </>
    );
}
