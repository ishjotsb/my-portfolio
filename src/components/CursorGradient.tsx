import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export function CursorGradient() {
  const { theme } = useTheme();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (theme !== 'dark') return;
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: `radial-gradient(500px at ${cursor.x}px ${cursor.y}px, rgba(120,120,255,0.13) 0%, transparent 80%)`,
        transition: 'background 0.2s',
        mixBlendMode: 'lighten',
      }}
      aria-hidden="true"
    />
  );
}
