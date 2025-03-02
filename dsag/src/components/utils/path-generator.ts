// Function to generate a winding path for the game board
export function generatePath(level: number) {
    // Number of tiles increases with level
    const tileCount = 10 + level * 5
  
    const path = []
  
    // Start tile
    path.push({
      type: "start",
      position: { x: 10, y: 10 },
    })
  
    // Generate a winding path
    let direction = "right"
    let x = 10
    let y = 10
    const step = 10
  
    for (let i = 1; i < tileCount - 1; i++) {
      // Determine if this should be a fact tile (approximately every 4th tile)
      const isFact = i % 4 === 0
  
      // Update position based on current direction
      switch (direction) {
        case "right":
          x += step
          if (x >= 90) {
            direction = "down"
          }
          break
        case "down":
          y += step
          if (y >= 90) {
            direction = "left"
          }
          break
        case "left":
          x -= step
          if (x <= 10) {
            direction = "up"
          }
          break
        case "up":
          y -= step
          if (y <= 10) {
            direction = "right"
          }
          break
      }
  
      // Add tile to path
      path.push({
        type: isFact ? "fact" : "normal",
        position: { x, y },
      })
    }
  
    // End tile
    path.push({
      type: "end",
      position: {
        x: direction === "right" ? x + step : direction === "left" ? x - step : x,
        y: direction === "down" ? y + step : direction === "up" ? y - step : y,
      },
    })
  
    return path
  }
  
  