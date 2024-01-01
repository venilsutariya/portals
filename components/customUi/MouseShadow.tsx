import React, { useEffect, useRef, useState, MouseEventHandler } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

const CursorFollower: React.FC<{ isHovering: boolean }> = ({ isHovering, setIsHovering }: any) => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [isLeftClicked, setIsLeftClicked] = useState(false);

    const updateCursorPosition = (e: MouseEvent) => {
        if (cursorRef.current) {
            const offset = 10; // Adjust the offset as needed
            cursorRef.current.style.left = e.clientX + 'px';
            cursorRef.current.style.top = e.clientY + 'px';

            // Update width and height when hovering over .cursorimg
            if (isHovering) {
                cursorRef.current.style.width = '100px'; // Adjust the width
                cursorRef.current.style.height = '100px'; // Adjust the height
            } else {
                cursorRef.current.style.width = '20px'; // Default width
                cursorRef.current.style.height = '20px'; // Default height
            }
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
            className={`${isLeftClicked && 'mouseclick'} ${isHovering ? ' p-14 text-center rounded-full' : 'h-20 w-20'} flex justify-center items-center`}
            ref={cursorRef}
            onClick={handleClick}
            style={{
                position: 'fixed',
                backgroundColor: '#B4BCD0',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.2s',
                zIndex: '9999999',
                pointerEvents: 'none', // Add this line
            }}
        >
            {
                isHovering && <span className={`${isHovering ? 'flex' : 'hidden'} font-semibold`}>Explore</span>
            }
        </div>
    );
};

export default CursorFollower;