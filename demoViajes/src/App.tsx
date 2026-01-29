import { useState } from 'react'
import type { Destino } from './types/Destino'

function App() {
  const [nombreUsuario, setnombreUsuario] = useState("")
  const [destinos, setDestinos] = useState<Destino[]>([])

  return (
    <>
      <h1>hola</h1>
    </>
  )
}

export default App
