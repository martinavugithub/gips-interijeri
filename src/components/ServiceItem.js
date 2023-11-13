import React from 'react';

function ServiceItem({ imageSrc, title, text }) {
  return (
    <div className="service-item">
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ServiceItem;
