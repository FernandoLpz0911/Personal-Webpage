
import React, { useEffect, useState, useMemo } from 'react';
import '../styles/PuzzleBackground.css';

const PUZZLE_PATH = "M 25 25 L 42 25 C 42 18 58 18 58 25 L 75 25 L 75 42 C 82 42 82 58 75 58 L 75 75 L 58 75 C 58 82 42 82 42 75 L 25 75 L 25 58 C 18 58 18 42 25 42 Z";

const PuzzlePiece = ({ x, y, delay }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeoutId;

    const runLoop = () => {
      // Higher chance to be active (0.6) to create "clusters" of flow
      const isActive = Math.random() > 0.85; 
      setActive(isActive);
      
      // Random duration between updates: 1s to 4s
      // This makes it feel more organic/monster-like than mechanical
      const nextTime = 1000 + Math.random() * 3000;
      timeoutId = setTimeout(runLoop, nextTime);
    };

    // Initial random delay to desynchronize the grid
    const initialTimeout = setTimeout(() => {
      
      // erratic heartbeat interval
      timeoutId = setTimeout(runLoop, Math.random() * 2000);
      
    }, delay * 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [delay]);

  return (
    <path
      d={PUZZLE_PATH}
      // Pass x and y as CSS variables if needed for advanced transforms, 
      // currently applied directly via transform prop
      transform={`translate(${x}, ${y}) scale(1.5)`}
      className={`puzzle-piece ${active ? 'active' : 'inactive'}`}
    />
  );
};

const PuzzleBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const columns = Math.ceil(dimensions.width / 75) + 1;
  const rows = Math.ceil(dimensions.height / 75) + 1;

  const pieces = useMemo(() => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        grid.push({
          id: `${i}-${j}`,
          x: j * 75 - 20,
          y: i * 75 - 20,
          delay: Math.random() * 5,
        });
      }
    }
    return grid;
  }, [rows, columns]);

  if (dimensions.width === 0) return null;

  return (
    <div className="puzzle-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="puzzle-svg"
      >
        {pieces.map((p) => (
          <PuzzlePiece key={p.id} x={p.x} y={p.y} delay={p.delay} />
        ))}
      </svg>
      <div className="puzzle-overlay" />
    </div>
  );
};

export default PuzzleBackground;
