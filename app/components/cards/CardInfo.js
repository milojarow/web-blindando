'use client';
import { useRef, useState } from 'react';
import styles from './CardInfo.module.css';

export default function CardInfo({ title, content }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update mouse position relative to the card
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      className={`text-center p-6 border border-gray-200 rounded-lg shadow-sm transition-all relative overflow-hidden ${styles.cardInfo} ${isHovering ? styles.hovering : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePosition.x}px`,
        '--mouse-y': `${mousePosition.y}px`,
        background: isHovering 
          ? `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.8), #FAFAFA)`
          : '#FAFAFA'
      }}
    >
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-gray-700 text-lg">
        {content}
      </p>
      
      {/* Sparkle elements */}
      <div className={styles.sparkle1} />
      <div className={styles.sparkle2} />
      <div className={styles.sparkle3} />
      <div className={styles.sparkle4} />
    </div>
  );
} 