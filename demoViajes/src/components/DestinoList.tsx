import type { Destino } from '../types/Destino'

type DestinosListProps = {
        destinos: Destino[]
        setDestinos: React.Dispatch<React.SetStateAction<Destino[]>>
        nombreUsuario: string
    }

export default function DestinosList({destinos, setDestinos, nombreUsuario}:DestinosListProps) {

  // 1. Define las funciones SIEMPRE antes del return para mayor claridad
  function toggleFavorito(id: number | string) {
    setDestinos(prevDestinos => 
      prevDestinos.map(destino => 
        destino.id === id 
          ? { ...destino, esFavorito: !destino.esFavorito } // Clonamos y negamos el booleano
          : destino // Retornamos el resto sin cambios
      )
    );
  }

  return (
    <>
      <h1 className='text-[30px] sm:text-[60px]'>Hola {nombreUsuario}</h1>
      <hr />
      {
        destinos?.map((destino) => (
          <div key={destino.id}>
            <h3 className='text-3xl'>{destino.nombre}</h3>
            <p className='text-sm'>{destino.descripcion}</p>
            <p className='text-xs'>{destino.icono}</p>
            <p className='text-xs'>{destino.descripcion}</p>
            <hr />
             <button onClick={() => toggleFavorito(destino.id)}>
              {destino.esFavorito ? '❤️' : '🤍'}
            </button>
          </div>
        ))

      }
      
    </>

  )
  
}
