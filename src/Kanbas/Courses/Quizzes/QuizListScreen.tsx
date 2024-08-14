import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import * as client from './client';
import QuizItem from './QuizItem';

interface Quiz {
  _id: string;
  title: string;
  availableDate: string;
  availableUntilDate: string;
  dueDate: string;
  points: number;
  questions: Array<never>;
  published: boolean;
}

const mockQuizzes = [
    {
      _id: '1',
      title: 'Quiz 1',
      availableDate: '2024-08-01T00:00:00Z',
      availableUntilDate: '2024-08-31T23:59:59Z',
      dueDate: '2024-08-15T23:59:59Z',
      points: 100,
      questions: [],
      published: false,
    },
    {
      _id: '2',
      title: 'Quiz 2',
      availableDate: '2024-09-01T00:00:00Z',
      availableUntilDate: '2024-09-30T23:59:59Z',
      dueDate: '2024-09-15T23:59:59Z',
      points: 80,
      questions: [],
      published: true,
    },
  ];

const QuizListScreen: React.FC = () => {
  // use mock data for now
  const [quizzes, setQuizzes] = useState(mockQuizzes);
  const { courseId } = useParams<{ courseId: string }>();
  // const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (courseId) {
        const quizzesData = await client.findQuizzesForCourse(courseId);
        setQuizzes(quizzesData);
        setIsLoading(false);
      }
    };

    fetchQuizzes();
  }, [courseId]);

  const handleAddQuiz = async () => {
    if (courseId) {
      const newQuiz: Quiz = await client.createQuiz(courseId, { title: 'New Quiz' });
      setQuizzes([...quizzes, newQuiz]);
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${newQuiz._id}/edit`);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (quizzes.length === 0) {
    return (
      <div>
        <h4>No quizzes available. Please click the "Add Quiz" button to create a new quiz.</h4>
        <button className="btn btn-danger" onClick={handleAddQuiz}>
          <FaPlus className="me-2 fs-7" /> Quiz
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center mb-4">
        <div className="input-group me-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Quiz"
            aria-label="Search"
          />
        </div>
        <button className="btn btn-danger" onClick={handleAddQuiz}>
          <FaPlus className="me-2 fs-7" /> Quiz
        </button>
      </div>

      <ul className="list-group">
        {quizzes.map((quiz: Quiz) => (
          <QuizItem key={quiz._id} quiz={quiz} courseId={courseId ?? ''} setQuizzes={setQuizzes} />
        ))}
      </ul>
    </div>
  );
};

export default QuizListScreen;
