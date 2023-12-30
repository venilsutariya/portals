"use client";

import React, { useEffect, useRef, useState, MouseEventHandler } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

const CursorFollower: React.FC = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [isLeftClicked, setIsLeftClicked] = useState(false);

    const updateCursorPosition = (e: MouseEvent) => {
        if (cursorRef.current) {
            cursorRef.current.style.left = e.clientX + 'px';
            cursorRef.current.style.top = e.clientY + 'px';
        }
    };

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsLeftClicked(true);
        setTimeout(() => {
            setIsLeftClicked(false);
        }, 500); // Adjust the duration of the left-click animation
    };

    const updateCursorPositionWithAnimationFrame = (e: MouseEvent) => {
        requestAnimationFrame(() => updateCursorPosition(e));
    };

    useEffect(() => {
        document.addEventListener('mousemove', updateCursorPositionWithAnimationFrame);

        return () => {
            document.removeEventListener('mousemove', updateCursorPositionWithAnimationFrame);
        };
    }, []);

    useEffect(() => {
        if (isLeftClicked && cursorRef.current) {
            cursorRef.current.classList.add('pop-animation');

            const onAnimationEnd = () => {
                if (cursorRef.current) {
                    cursorRef.current.classList.remove('pop-animation');
                }
            };

            cursorRef.current.addEventListener('animationend', onAnimationEnd);

            return () => {
                // @ts-ignore
                cursorRef.current.removeEventListener('animationend', onAnimationEnd);
            };
        }
    }, [isLeftClicked]);

    return (
        <div
            className={`${isLeftClicked && 'mouseclick'} hidden lg:block`}
            ref={cursorRef}
            onClick={handleClick}
            // @ts-ignore
            style={{
                position: 'fixed',
                width: '0px',
                height: '0px',
                boxShadow: '1px 1px 1000px 20px #fff',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.1s',
            }}
        ></div>
    );
};

export default CursorFollower;

