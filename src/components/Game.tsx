import React, { useState, useEffect } from 'react';
import { useStore } from '../store';
import { Timer, DollarSign, LogOut } from 'lucide-react';

const questions = [
  {
    question: "Which river is the longest in Africa?",
    options: ["Nile", "Congo", "Niger", "Zambezi"],
    correct: 0
  },
  {
    question: "What is the capital city of The Gambia?",
    options: ["Banjul", "Serekunda", "Bakau", "Brikama"],
    correct: 0
  },
  // Add more questions as needed
];

export default function Game() {
  const { currentMoney, questionNumber, updateMoney, nextQuestion, logout } = useStore();
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      setIsAnswered(true);
    }
  }, [timeLeft, isAnswered]);

  const currentQuestion = questions[questionNumber - 1];

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optionIndex);
    setIsAnswered(true);

    if (optionIndex === currentQuestion.correct) {
      updateMoney(100);
    }

    setTimeout(() => {
      nextQuestion();
      setTimeLeft(30);
      setSelectedOption(null);
      setIsAnswered(false);
    }, 2000);
  };

  const getOptionClassName = (index: number) => {
    if (!isAnswered) return "bg-white/10 hover:bg-white/20";
    if (index === currentQuestion.correct) return "bg-green-500";
    if (index === selectedOption) return "bg-red-500";
    return "bg-white/10 opacity-50";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
          <DollarSign className="h-5 w-5 text-yellow-400" />
          <span className="text-white font-bold">D{currentMoney}</span>
        </div>
        <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
          <Timer className="h-5 w-5 text-white" />
          <span className="text-white font-bold">{timeLeft}s</span>
        </div>
        <button
          onClick={logout}
          className="flex items-center space-x-2 bg-red-500/20 hover:bg-red-500/30 rounded-full px-4 py-2 text-red-300"
        >
          <LogOut className="h-5 w-5" />
          <span>Exit</span>
        </button>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h3 className="text-lg text-gray-400 mb-2">Question {questionNumber}</h3>
          <h2 className="text-2xl font-bold text-white">{currentQuestion.question}</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={`p-4 rounded-lg text-white text-left transition-all ${getOptionClassName(
                index
              )}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}