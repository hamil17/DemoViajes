import type { Destino } from '../types/Destino'

type DestinosListProps = {
        destinos: Destino[]
        setDestinos: React.Dispatch<React.SetStateAction<Destino[]>>
        nombreUsuario: string
    }

export default function DestinosList({nombreUsuario}:DestinosListProps) {

  return (
    <h1>Hola {nombreUsuario}</h1>

  )
}
