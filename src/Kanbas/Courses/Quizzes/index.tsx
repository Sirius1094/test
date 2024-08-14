import React from 'react';
import ReactDOM from 'react-dom';
import QuizListScreen from './QuizListScreen';

// 如果需要，可以在此处设置全局样式或全局状态

const App: React.FC = () => {
  return (
    <div>
      <QuizListScreen />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));