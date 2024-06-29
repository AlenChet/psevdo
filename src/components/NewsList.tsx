import React from 'react';
import NewsItem from './NewsItem';
import './styles/NewsList.css';


const NewsList: React.FC = () => {
  const news = [
    { id: 1, icon: '📰', text: 'Первая Новость', link: '#' },
    { id: 2, icon: '📰', text: 'Вторая Новость', link: '#' },
    { id: 3, icon: '📰', text: 'Третья Новость', link: '#' },
  ];

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem key={item.id} icon={item.icon} text={item.text} link={item.link} />
      ))}
    </div>
  );
};

export default NewsList;
