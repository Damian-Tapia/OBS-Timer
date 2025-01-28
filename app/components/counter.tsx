"use client"

import { useCounter } from "../context/counterContext"
import { Button } from "@/components/ui/button"

export function Counter() {
  const { time, isRunning, setIsRunning } = useCounter()

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="text-center">
      <div className="text-6xl font-bold mb-4">{formatTime(time)}</div>
      <Button onClick={() => setIsRunning(!isRunning)}>{isRunning ? "Pausar" : "Iniciar"}</Button>
    </div>
  )
}

