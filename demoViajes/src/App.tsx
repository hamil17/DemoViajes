import { useState } from 'react'
import type { Destino } from './types/Destino'
import DestinosList from './components/DestinoList'

// App que estoy montanto
// https://chatgpt.com/c/697b8a41-5950-8331-9dec-3c20482ce68d

function App() {
  const [nombreUsuario, setnombreUsuario] = useState("")
  const [destinos, setDestinos] = useState<Destino[]>([
    {id:"1", nombre: "París", icono: "building.columns.fill", description: "Amor y luz", color: "blue", esFavorito: false, puntuacion: 2},
    {id:"2",nombre: "Roma", icono: "globe.europe.africa.fill", description: "Historia y tradición", color: "orange", esFavorito: false, puntuacion: 2},
    {id:"3",nombre: "Tokio", icono: "tram.fill", description: "Neones y ramen", color: "red", esFavorito: false, puntuacion: 3},
    {id:"4",nombre: "Colombia", icono: "environments.fill", description: "Naturaleza", color: "yellow", esFavorito: true, puntuacion: 4}
  ])
    

  return (
    <>
      <DestinosList
        destinos={destinos}
        setDestinos={setDestinos}
        nombreUsuario={"Hamilton"}
      />
    </>
  )
}

export default App
