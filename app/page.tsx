import { Navbar } from "./components/navbar"
import { Counter } from "./components/counter"
import { ConfigForm } from "./components/configForm"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Configurar Contador de Stream</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ConfigForm />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Vista previa del contador</h2>
            <Counter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

