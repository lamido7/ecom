import React from 'react';
import './card.css'

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="header">
        {title}
      </div>
      <div className="card-body">
        {content}
      </div>
    </div>
  );
};

export default Card;
