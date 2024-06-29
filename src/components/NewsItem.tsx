import React from 'react';
import './styles/NewsItem.css';

interface NewsItemProps {
  icon: string;
  text: string;
  link: string;
}


const NewsItem: React.FC<NewsItemProps> = ({ icon, text, link }) => (
  <div className="news-item">
    <span className="icon">{icon}</span>
    <a href={link} className="text">{text}</a>
  </div>
);

export default NewsItem;
