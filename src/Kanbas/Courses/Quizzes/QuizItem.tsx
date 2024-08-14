import React, { useState } from 'react';
import { FaEllipsisV, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as client from './client';
import QuizContextMenu from './QuizContextMenu';


interface QuizItemProps {
  quiz: {
    _id: string;
    title: string;
    availableDate: string;
    availableUntilDate: string;
    dueDate: string;
    points: number;
    questions: Array<any>;
    published: boolean;
  };
  courseId: string;
  setQuizzes: React.Dispatch<React.SetStateAction<any[]>>;
}

const QuizItem: React.FC<QuizItemProps> = ({ quiz, courseId, setQuizzes }) => {
  const [contextMenuVisible, setContextMenuVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleEditQuiz = (quizId: string) => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/edit`);
  };

  const handleDeleteQuiz = async (quizId: string) => {
    if (window.confirm('Are you sure you want to delete this quiz?')) {
      await client.deleteQuiz(quizId);
      setQuizzes(prevQuizzes => prevQuizzes.filter(q => q._id !== quizId));
    }
  };

  const handleTogglePublishQuiz = async (quizId: string, isPublished: boolean) => {
    if (isPublished) {
      await client.unpublishQuiz(quizId);
    } else {
      await client.publishQuiz(quizId);
    }
    setQuizzes(prevQuizzes => prevQuizzes.map(q =>
      q._id === quizId ? { ...q, published: !isPublished } : q
    ));
  };

  const handleContextMenuToggle = () => {
    setContextMenuVisible(!contextMenuVisible);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h5 onClick={() => handleEditQuiz(quiz._id)} style={{ cursor: 'pointer' }}>
          {quiz.title}
        </h5>
        <small>
          {new Date() > new Date(quiz.availableUntilDate)
            ? 'Closed'
            : new Date() > new Date(quiz.availableDate)
            ? 'Available'
            : `Not available until ${new Date(quiz.availableDate).toLocaleDateString()}`}
        </small>
        <br />
        <small>
          Due: {new Date(quiz.dueDate).toLocaleDateString()} | Points: {quiz.points} | Questions: {quiz.questions.length}
        </small>
      </div>
      <div className="d-flex align-items-center">
        {quiz.published ? (
          <FaCheckCircle
            className="text-success me-4 fs-4"
            onClick={() => handleTogglePublishQuiz(quiz._id, quiz.published)}
          />
        ) : (
          <FaTimesCircle
            className="text-danger me-4 fs-4"
            onClick={() => handleTogglePublishQuiz(quiz._id, quiz.published)}
          />
        )}
        <FaEllipsisV
          className="fs-4"
          onClick={handleContextMenuToggle}
        />
        {contextMenuVisible && (
          <QuizContextMenu
            onEdit={() => handleEditQuiz(quiz._id)}
            onDelete={() => handleDeleteQuiz(quiz._id)}
            onTogglePublish={() => handleTogglePublishQuiz(quiz._id, quiz.published)}
            isPublished={quiz.published}
          />
        )}
      </div>
    </li>
  );
};

export default QuizItem;
