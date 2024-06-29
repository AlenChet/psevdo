import React from 'react';
import './styles/Widget.css';

interface WidgetProps {
  title: string;
  content: string;
}


const Widget: React.FC<WidgetProps> = ({ title, content }) => (
  <div className="widget">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default Widget;
