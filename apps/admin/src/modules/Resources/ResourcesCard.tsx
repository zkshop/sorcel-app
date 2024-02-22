import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type ResourceCardProps = {
  title: string;
  description: string;
  link: string;
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '14px',
  color: '#555',
};

const ResourceCard = ({ title, description, link }: ResourceCardProps) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    minWidth: '350px',
    boxShadow: hover ? '0 8px 16px 0 rgba(0,0,0,0.2)' : '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
    textDecoration: 'none',
    color: 'inherit',
    background: hover ? '#f5f5f5' : '', // Changement de fond au survol
    transform: hover ? 'scale(1.05)' : 'scale(1)',
  };

  return (
    <Link
      to={link}
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={titleStyle}>{title}</div>
      <div style={descriptionStyle}>{description}</div>
    </Link>
  );
};

export default ResourceCard;
