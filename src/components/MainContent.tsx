import React from 'react';
import Header from './Header';
import NewsList from './NewsList';
import WidgetList from './WidgetList';
import './styles/MainContent.css';


const MainPage: React.FC = () => (
  <div className="main-page">
    <Header />
    <div className="content">
      <NewsList />
      <WidgetList />
    </div>
  </div>
);

export default MainPage;
