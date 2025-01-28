"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface CounterContextType {
  time: number
  setTime: (time: number) => void
  isRunning: boolean
  setIsRunning: (isRunning: boolean) => void
  addTime: (seconds: number) => void
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

export const useCounter = () => {
  const context = useContext(CounterContext)
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider")
  }
  return context
}

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setIsRunning(false)
    }

    return () => clearInterval(interval)
  }, [isRunning, time])

  const addTime = (seconds: number) => {
    setTime((prevTime) => prevTime + seconds)
  }

  return (
    <CounterContext.Provider value={{ time, setTime, isRunning, setIsRunning, addTime }}>
      {children}
    </CounterContext.Provider>
  )
}

