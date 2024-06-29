import React from 'react';
import Widget from './Widget';
import './styles/WidgetList.css';


const WidgetList: React.FC = () => {
  const widgets = [
    { id: 1, title: 'Первый Виджет', content: 'Описание' },
    { id: 2, title: 'Второй Виджет', content: 'Описание' },
    { id: 3, title: 'Третий Виджет', content: 'Описание' },
  ];

  return (
    <div className="widget-list">
      {widgets.map((widget) => (
        <Widget key={widget.id} title={widget.title} content={widget.content} />
      ))}
    </div>
  );
};

export default WidgetList;
