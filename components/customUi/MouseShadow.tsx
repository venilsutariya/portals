import React, { useEffect, useRef, useState, MouseEventHandler } from 'react';

interface CursorPosition {
    x: number;
    y: number;
}

const CursorFollower: React.FC<{ isHovering: boolean }> = ({ isHovering, isHoveringMain }: any) => {
    const cursorRef = useRef<HTMLDivElement | null>(null);
    const [isLeftClicked, setIsLeftClicked] = useState(false);

    const updateCursorPosition = (e: MouseEvent) => {
        if (cursorRef.current) {
            const offset = 10; // Adjust the offset as needed
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
        <div className=' hidden lg:block pointer-events-none'>
            {
                !isHoveringMain ? <div
                    className={`${isLeftClicked && 'mouseclick'} ${isHovering ? ' bg-black text-white h-[100px] w-[100px] text-center rounded-full' : ' bg-black h-0 w-0'} lg:flex justify-center items-center hidden`}
                    ref={cursorRef}
                    onClick={handleClick}
                    style={{
                        position: 'fixed',
                        backgroundColor: '#B4BCD0',
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.2s',
                        zIndex: '9999999',
                        pointerEvents: 'none',
                    }}
                >
                    {
                        isHovering && <span className={`${isHovering ? 'flex' : 'hidden'} font-semibold`}>Explore</span>
                    }
                </div> : <div
                    ref={cursorRef}
                    onClick={handleClick}
                    style={{
                        position: 'fixed',
                        backgroundColor: '#B4BCD0',
                        height: '0px',
                        width: '0px',
                        borderRadius: '50%',
                        boxShadow: '1px 1px 200px 20px #606BD2',
                        opacity: '0.8',
                        transform: 'translate(-50%, -50%)',
                        transition: 'all 0.2s',
                        pointerEvents: 'none',
                        zIndex: '99999999'
                    }}
                >
                </div>
            }
        </div>
    );
};

export default CursorFollower;