import React from 'react';

const FloatingElements: React.FC = () => {
  const elements = [
    { width: 300, height: 300, top: '10%', left: '5%', background: 'var(--primary)', delay: '0s' },
    { width: 400, height: 400, bottom: '15%', right: '8%', background: 'var(--secondary)', delay: '1s' },
    { width: 250, height: 250, top: '40%', right: '20%', background: 'var(--accent)', delay: '2s' }
  ];

  return (
    <>
      {elements.map((el, index) => (
        <div 
          key={index}
          className="math-bg-element float-animation"
          style={{
            width: el.width,
            height: el.height,
            top: el.top,
            left: el.left,
            right: el.right,
            bottom: el.bottom,
            background: el.background,
            animationDelay: el.delay
          }}
        />
      ))}
    </>
  );
};

export default FloatingElements;