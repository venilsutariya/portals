"use client";

import React, { useEffect, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const updateCursorPosition = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = e.clientX + 'px';
      cursorRef.current.style.top = e.clientY + 'px';
    }
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

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '00px',
        height: '00px',
        boxShadow: '1px 1px 50px 10px #fff',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999999'
      }}
    ></div>
  );
};

export default CursorFollower;

