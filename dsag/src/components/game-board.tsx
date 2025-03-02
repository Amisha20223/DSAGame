"use client"

import { useState, useEffect } from "react"
import { Dice5, Coins, Trophy } from "lucide-react"
import Tile from "../components/tile"
import QuestionModal from "../components/question-modal"
import FactCard from "../components/fact-card"
import { questions } from "../data/questions"
import { facts } from "../data/facts"
import { generatePath } from "./utils/path-generator"

interface GameBoardProps {
  playerName: string
}

export default function GameBoard({ playerName }: GameBoardProps) {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [coins, setCoins] = useState(0)
  const [showQuestion, setShowQuestion] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<any>(null)
  const [showFact, setShowFact] = useState(false)
  const [currentFact, setCurrentFact] = useState("")
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [path, setPath] = useState<any[]>([])
  const [level, setLevel] = useState(1)

  // Generate game path on component mount
  useEffect(() => {
    setPath(generatePath(level))
  }, [level])

  const handleMove = () => {
    // Select a random question based on the current level
    const levelQuestions = questions.filter((q) => q.level === level)
    const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)]
    setCurrentQuestion(randomQuestion)
    setShowQuestion(true)
  }

  const handleAnswerSubmit = (isCorrect: boolean) => {
    setShowQuestion(false)

    if (isCorrect) {
      // Correct answer
      const newPosition = Math.min(currentPosition + 1, path.length - 1)
      const earnedCoins = 10 * level

      setCoins(coins + earnedCoins)
      setMessage(`Correct! You earned ${earnedCoins} coins.`)
      setShowMessage(true)

      // Check if landed on a fact tile
      if (path[newPosition].type === "fact") {
        const randomFact = facts[Math.floor(Math.random() * facts.length)]
        setCurrentFact(randomFact)
        setShowFact(true)
      }

      // Check if reached the end
      if (newPosition === path.length - 1) {
        if (level === 3) {
          setGameWon(true)
        } else {
          setLevel(level + 1)
          setMessage(`Level ${level} completed! Moving to level ${level + 1}`)
          setShowMessage(true)
          setCurrentPosition(0)
          return
        }
      }

      setCurrentPosition(newPosition)
    } else {
      // Incorrect answer
      setMessage("That's not correct. Try again!")
      setShowMessage(true)
    }
  }

  const closeMessage = () => {
    setShowMessage(false)
  }

  const closeFact = () => {
    setShowFact(false)
  }

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col">
      {/* Header with player info */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-purple-800">{playerName}'s Adventure</h2>
          <p className="text-gray-600">Level {level}</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-yellow-100 px-3 py-1 rounded-full">
            <Coins className="w-5 h-5 text-yellow-500 mr-1" />
            <span className="font-bold">{coins}</span>
          </div>
          <div className="bg-purple-100 px-3 py-1 rounded-full">
            <span className="font-bold">
              Position: {currentPosition + 1}/{path.length}
            </span>
          </div>
        </div>
      </div>

      {/* Game board */}
      <div className="flex-1 bg-white rounded-lg shadow-md p-4 mb-6 overflow-auto">
        <div className="relative w-full min-h-[500px]">
          {path.map((tile, index) => (
            <Tile
              key={index}
              type={tile.type}
              position={tile.position}
              index={index}
              isActive={index === currentPosition}
              isCompleted={index < currentPosition}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">Your next move</h3>
          <p className="text-sm text-gray-600">Solve a DSA problem to advance</p>
        </div>
        <button
          onClick={handleMove}
          disabled={gameWon}
          className="flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors disabled:bg-gray-400"
        >
          <Dice5 className="w-5 h-5 mr-2" />
          Solve & Move
        </button>
      </div>

      {/* Modals */}
      {showQuestion && currentQuestion && <QuestionModal question={currentQuestion} onSubmit={handleAnswerSubmit} />}

      {showFact && <FactCard fact={currentFact} onClose={closeFact} />}

      {showMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{message}</h3>
            <button
              onClick={closeMessage}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {gameWon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-purple-800 mb-2">Congratulations!</h2>
            <p className="text-xl mb-4">You've completed the DSA Adventure!</p>
            <p className="mb-6">Total coins earned: {coins}</p>
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

