import { useState } from 'react';

const QuizManager = ({courseId}) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddQuestion = async () => {
    if (!newQuestion || options.some(opt => !opt)) {
      setMessage('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setMessage('');


    try {
      const question = {
        id: Date.now(),
        question: newQuestion,
        options: [...options],
        correctAnswer,
        courseId: courseId,
      };

      const response = await fetch('http://localhost:5000/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
      });

      if (response.ok) {
        setQuestions([...questions, question]);
        setNewQuestion('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);
        setMessage('Question added successfully!');
      } else {
        setMessage('Failed to add question');
      }
    } catch (error) {
      setMessage('Error adding question');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Quiz Manager for {courseId}</h3>
        
        {message && (
          <div className={`mt-2 p-2 rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Question
            </label>
            <input
              type="text"
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Options
            </label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  checked={correctAnswer === index}
                  onChange={() => setCorrectAnswer(index)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleAddQuestion}
            disabled={isLoading}
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
              isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {isLoading ? 'Adding...' : 'Add Question'}
          </button>
        </div>

        <div className="mt-6">
          <h4 className="text-md font-medium text-gray-900">Added Questions</h4>
          <div className="mt-4 space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="border rounded-md p-4">
                <p className="font-medium">{q.question}</p>
                <ul className="mt-2 space-y-1">
                  {q.options.map((option, index) => (
                    <li key={index} className={index === q.correctAnswer ? 'text-green-600' : ''}>
                      {index + 1}. {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizManager;