import { useState } from 'react'
import type { Destino } from './types/Destino'
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { Routes } from "react-router"
import PerfilUsuario from './components/PerfilUsuario'
import DestinoList from './components/DestinoList'
import DetalleDestino from './components/DetalleDestino'

// App que estoy montanto
// https://chatgpt.com/c/697b8a41-5950-8331-9dec-3c20482ce68d

function App() {
  const [nombreUsuario, setnombreUsuario] = useState("")
  const [destinos, setDestinos] = useState<Destino[]>([
    {id:"1", nombre: "París", icono: "building.columns.fill", descripcion: "Amor y luz", color: "blue", esFavorito: false, puntuacion: 2},
    {id:"2",nombre: "Roma", icono: "globe.europe.africa.fill", descripcion: "Historia y tradición", color: "orange", esFavorito: false, puntuacion: 2},
    {id:"3",nombre: "Tokio", icono: "tram.fill", descripcion: "Neones y ramen", color: "red", esFavorito: false, puntuacion: 3},
    {id:"4",nombre: "Colombia", icono: "environments.fill", descripcion: "Naturaleza", color: "lime", esFavorito: true, puntuacion: 4}
  ])
  const [tabActual, setTabActual] = useState(0)
  const [vistaActual, setVistaActual] = useState<"tabs" | "detalle">("tabs")
  const [destinoSeleccionado, setDestinoSeleccionado] = useState<Destino | null>(null)

  return (
      // <BrowserRouter>
      //   <Routes>
      //     <Route
      //       path="/"
      //       element={
      //         <DestinoList
      //           destinos={destinos}
      //           setDestinos={setDestinos}
      //           nombreUsuario={nombreUsuario}
      //         />
      //       }
      //     />

      //     <Route path="/perfil" element={
      //       <PerfilUsuario
      //         nombreUsuario={nombreUsuario}
      //         setnombreUsuario={setnombreUsuario}
      //       />
      //       } />
      //   </Routes>
      // </BrowserRouter>
      <div>
        {tabActual === 0 ? (
          <DestinoList
            destinos={destinos}
            setDestinos={setDestinos}
            nombreUsuario={nombreUsuario}
          />
        ) : (
          <PerfilUsuario
            nombreUsuario={nombreUsuario}
            setnombreUsuario={setnombreUsuario}
          />
        )}

        <DetalleDestino
          destinos={destinos}
          setDestinos={setDestinos}
          // onBack={"/"}
        />
        
        {/* Tabs abajo */}
        <div className="tabs">
          <button onClick={() => setTabActual(0)}>🗺️ Explorar</button>
          <button onClick={() => setTabActual(1)}>👤 Perfil</button>
        </div>
      </div>
  )
}

export default App
