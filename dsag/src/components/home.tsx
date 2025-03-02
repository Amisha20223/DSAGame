"use client"

import type React from "react"

import { useState } from "react"
import { Trophy } from "lucide-react"

interface HomeProps {
  onStartGame: (name: string) => void
}

export default function Home({ onStartGame }: HomeProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onStartGame(name)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 mb-8 transform transition-all hover:scale-105">
        <h1 className="text-4xl font-bold text-purple-800 mb-2">DSA Adventure</h1>
        <h2 className="text-xl text-gray-600 mb-6">Solve. Learn. Advance.</h2>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Trophy className="w-20 h-20 text-yellow-500" />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              WIN
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Embark on a journey through the world of Data Structures & Algorithms. Solve problems, collect coins, and
          reach the finish line to become a DSA master!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Start Adventure
          </button>
        </form>
      </div>

      <div className="text-sm text-gray-600">
        <p>Solve DSA problems • Earn coins • Learn Java facts</p>
      </div>
    </div>
  )
}

