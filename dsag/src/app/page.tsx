"use client"

import { useState } from "react"
import Home from "../components/home"
import GameBoard from "../components/game-board"

export default function App() {
  const [gameStarted, setGameStarted] = useState(false)
  const [playerName, setPlayerName] = useState("")

  const startGame = (name: string) => {
    setPlayerName(name)
    setGameStarted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100">
      {!gameStarted ? <Home onStartGame={startGame} /> : <GameBoard playerName={playerName} />}
    </div>
  )
}

