import { X } from "lucide-react"

interface FactCardProps {
  fact: string
  onClose: () => void
}

export default function FactCard({ fact, onClose }: FactCardProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold mb-4 text-purple-800">DSA & Java Fact</h3>
        <p className="mb-4">{fact}</p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  )
}

