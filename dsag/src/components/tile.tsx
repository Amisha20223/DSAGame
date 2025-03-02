interface TileProps {
    type: string
    position: { x: number; y: number }
    index: number
    isActive: boolean
    isCompleted: boolean
  }
  
  export default function Tile({ type, position, index, isActive, isCompleted }: TileProps) {
    const getBackgroundColor = () => {
      if (isActive) return "bg-purple-500"
      if (isCompleted) return "bg-purple-200"
  
      switch (type) {
        case "start":
          return "bg-green-400"
        case "end":
          return "bg-red-400"
        case "fact":
          return "bg-yellow-300"
        default:
          return "bg-blue-300"
      }
    }
  
    const getLabel = () => {
      if (type === "start") return "Start"
      if (type === "end") return "Finish"
      if (type === "fact") return "Fact"
      return (index + 1).toString()
    }
  
    return (
      <div
        className={`absolute w-16 h-16 rounded-lg flex items-center justify-center ${getBackgroundColor()} shadow-md transition-all duration-300 transform ${isActive ? "scale-110 ring-4 ring-purple-300" : ""}`}
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `translate(-50%, -50%) ${isActive ? "scale(1.1)" : "scale(1)"}`,
        }}
      >
        <span className="font-bold text-white">{getLabel()}</span>
        {isActive && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border-2 border-purple-500"></div>
        )}
      </div>
    )
  }
  
  