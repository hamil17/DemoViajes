// import { useNavigate } from "react-router-dom";



type PerfilUsuarioProps = {
  nombreUsuario : string
  setnombreUsuario : React.Dispatch<React.SetStateAction<string>>
}

export default function PerfilUsuario({nombreUsuario, setnombreUsuario}:PerfilUsuarioProps) {
  // const navigate = useNavigate();

  return (
    <>
      <div>Hola {nombreUsuario}</div>
      <div>
        <input className="border" onChange={(e)=>setnombreUsuario(e.target.value)} value={nombreUsuario} type="text" placeholder="Cambia tu nombre aqui" />
      </div>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-4 rounded" onClick={() => navigate('/')}>Volver a lista</button> */}
    </>
  )
  
}
