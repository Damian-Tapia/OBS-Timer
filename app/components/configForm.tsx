"use client"

import { useState } from "react"
import { useCounter } from "../context/counterContext"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ConfigForm() {
  const [hours, setHours] = useState("")
  const [minutes, setMinutes] = useState("")
  const [seconds, setSeconds] = useState("")
  const { setTime, setIsRunning } = useCounter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const totalSeconds =
      (Number.parseInt(hours) || 0) * 3600 + (Number.parseInt(minutes) || 0) * 60 + (Number.parseInt(seconds) || 0)
    setTime(totalSeconds)
    setIsRunning(false)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Configurar tiempo inicial</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-1">
            Horas
          </label>
          <Input type="number" id="hours" value={hours} onChange={(e) => setHours(e.target.value)} min="0" />
        </div>
        <div>
          <label htmlFor="minutes" className="block text-sm font-medium text-gray-700 mb-1">
            Minutos
          </label>
          <Input
            type="number"
            id="minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
            min="0"
            max="59"
          />
        </div>
        <div>
          <label htmlFor="seconds" className="block text-sm font-medium text-gray-700 mb-1">
            Segundos
          </label>
          <Input
            type="number"
            id="seconds"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)}
            min="0"
            max="59"
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Configurar contador
      </Button>
    </form>
  )
}

