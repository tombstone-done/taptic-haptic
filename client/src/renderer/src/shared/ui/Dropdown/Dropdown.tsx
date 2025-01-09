import React, { useState } from 'react';
import './styles.css';

interface Props {
  target: React.ReactNode;
  children: React.ReactNode;
}

export const Dropdown = ({ target, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="dropdown__target">{target}</div>
      {isOpen && <div className="dropdown__container">{children}</div>}
    </div>
  );
};
