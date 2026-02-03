// import { useNavigate } from "react-router-dom";
import type { Destino } from '../types/Destino'

type DestinosListProps = {
        destinos: Destino[]
        setDestinos: React.Dispatch<React.SetStateAction<Destino[]>>
        nombreUsuario: string
    }

export default function DestinoList({destinos, setDestinos, nombreUsuario}:DestinosListProps) {
  // const navigate = useNavigate();

  function toggleFav (id : string){
    setDestinos(prev => 
        prev.map(destino =>
          destino.id === id
            ? {...destino, esFavorito: !destino.esFavorito}
            : destino
        )
      );
  }

  return (
    <>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded" onClick={() => navigate('/perfil')}>Hola {nombreUsuario || "Viajero"}</button> */}
      <hr />
      {
        destinos?.map((destino) => (
          <div key={destino.id}>
            <h3 className='text-3xl'>{destino.nombre}</h3>
            <p className='text-sm'>{destino.descripcion}</p>
            <p className='text-xs'>{destino.icono}</p>
            <p className='text-xs'>{destino.descripcion}</p>
            <button className={ `bg-${destino.color}-800` } onClick={() => toggleFav(destino.id)}>
              {destino.esFavorito ? "♥" : "♡"}
            </button>
            <hr />
             
          </div>
        ))

      }
      
    </>

  )
  
}
