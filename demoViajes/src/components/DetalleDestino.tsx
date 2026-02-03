import type { Destino } from "../types/Destino"

type DetalleDestinoProps = {
    destinos: Destino[]
    setDestinos: React.Dispatch<React.SetStateAction<Destino[]>>
    // onBack: () => void
}

export default function DetalleDestino({destinos, setDestinos}:DetalleDestinoProps) {

  return (
    <>
        {destinos.map((destino)=>(
            <div key={destino.id}>
                <div className={`w-full bg-${destino.color}-200`}>
                     &
                </div>
                <div>
                    <p>{destino.nombre}</p>
                    <p>{destino.descripcion}</p>
                </div>
            </div>
        ))}
    </>
  )
}
