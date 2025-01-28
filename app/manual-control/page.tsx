import { Navbar } from "../components/navbar"
import { Counter } from "../components/counter"
import { ManualControl } from "../components/manualControl"
import Footer from "../components/footer"
export default function ControlManual() {
  return (
    <>
    <div className="h-screen bg-gray-50 flex flex-col ">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Control Manual del Contador</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ManualControl />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Estado actual del contador</h2>
            <Counter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </>
  )
}

