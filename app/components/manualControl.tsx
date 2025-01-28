"use client"

import { useState } from "react"
import { useCounter } from "../context/counterContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ManualControl() {
  const [timeToAdd, setTimeToAdd] = useState("")
  const { addTime } = useCounter()

  const handleAddTime = () => {
    const seconds = Number.parseInt(timeToAdd)
    if (!isNaN(seconds) && seconds > 0) {
      addTime(seconds)
      setTimeToAdd("")
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Agregar tiempo manualmente</h2>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          value={timeToAdd}
          onChange={(e) => setTimeToAdd(e.target.value)}
          placeholder="Segundos a agregar"
          min="1"
        />
        <Button onClick={handleAddTime}>Agregar</Button>
      </div>
    </div>
  )
}

