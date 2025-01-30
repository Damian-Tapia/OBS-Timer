import Link from "next/link"
import { Button } from "@/components/ui/button"
import { House, Plus, Timer, Watch } from "lucide-react"

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold flex gap-2">
      <Timer />Stream Counter
      </Link>
      <div>
        <Link href="/" passHref>
          <Button variant="ghost" className="mr-2">
          <House />
            Inicio
          </Button>
        </Link>
        <Link href="/manual-control" passHref>
          <Button variant="ghost"><Plus />Agregar Tiempo</Button>
        </Link>
        <Link href="/onlyCounter" passHref>
          <Button variant="ghost"><Watch />Solo Reloj</Button>
        </Link>
      </div>
    </nav>
  )
}

