import { useScroll, useSpring, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({
    children
}) => {
    const [loading, setLoading] = useState(true);

    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (contentRef.current !== null) {
                setContentHeight(contentRef.current.scrollHeight);
            }
            setWindowHeight(window.innerHeight);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.addEventListener('resize', handleResize);
        }

    }, [contentRef]);

    
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.0001,
    });
    
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if(latest === 0) {
            setLoading(false);
        }
    });

    const y = useTransform(smoothProgress, (value) => {
        return value * -(contentHeight - windowHeight);
    })

    return (
        <>
            <div style={{height: contentHeight}}/>
            <motion.div style={{y: loading ? 0: y, opacity: loading ? 0: 1 ,backgroundColor: '#000212'}} ref={contentRef} className=" w-screen flex flex-col fixed top-0">
                {children}
            </motion.div>
        </>
    );
}

export default SmoothScroll;