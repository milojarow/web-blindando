'use client';
import { useRef, useState } from 'react';
import styles from './CardInfo.module.css';

export default function CardInfo({ title, content }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      ref={cardRef}
      className={`text-center p-6 border border-gray-200 rounded-lg shadow-sm transition-shadow relative overflow-hidden bg-white ${styles.cardInfo} ${isHovering ? styles.hovering : ''}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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