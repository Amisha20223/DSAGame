"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

interface QuestionModalProps {
  question: {
    id: number
    text: string
    options: string[]
    correctAnswer: number
    explanation: string
  }
  onSubmit: (isCorrect: boolean) => void
}

export default function QuestionModal({ question, onSubmit }: QuestionModalProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedOption === null) return

    setHasSubmitted(true)

    // After showing the explanation, allow the user to continue
    setTimeout(() => {
      onSubmit(selectedOption === question.correctAnswer)
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">DSA Challenge</h2>

        <div className="mb-6">
          <p className="text-lg mb-4">{question.text}</p>

          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div
                key={index}
                onClick={() => !hasSubmitted && setSelectedOption(index)}
                className={`p-3 border rounded-md cursor-pointer transition-colors ${
                  hasSubmitted
                    ? index === question.correctAnswer
                      ? "bg-green-100 border-green-500"
                      : selectedOption === index
                        ? "bg-red-100 border-red-500"
                        : "border-gray-300"
                    : selectedOption === index
                      ? "bg-purple-100 border-purple-500"
                      : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center">
                  <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                  {hasSubmitted && index === question.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                  )}
                  {hasSubmitted && selectedOption === index && index !== question.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {hasSubmitted ? (
          <div className="mb-4 p-3 bg-gray-100 rounded-md">
            <h3 className="font-bold mb-1">Explanation:</h3>
            <p>{question.explanation}</p>
          </div>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-gray-400"
          >
            Submit Answer
          </button>
        )}
      </div>
    </div>
  )
}

