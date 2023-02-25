'use client'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';
import { WifiIcon, PauseIcon, PlayIcon, WrenchIcon, SignalIcon, XMarkIcon} from '@heroicons/react/24/solid';

export default function MapaFlota ({vehiculos, hover, onHover}) {
  const router = useRouter()
  function handleClick(id) {
    router.push(`/Gestion_de_Flota/Vehiculos/${id}`)
  }
  let punto_purple = [0, 0]
  let codigo = ''
  let imagen = 'vagones.jpg'
  let keeper = ''
  let descripcion = ''
  let en_servicio = true
  let en_mantenimiento = false
  let en_circulacion = false
  let transmitiendo = false
  let alarma = false
  let lw = 0
  let id_vehiculo = -1
  if (hover !== -1)
        {
        vehiculos.forEach((vehiculo)=> {
            if (hover === vehiculo.id) {
                punto_purple = [vehiculo.lat, vehiculo.lng]
                codigo = vehiculo.matricula
                imagen = vehiculo.tipo.imagen
                keeper = vehiculo.keeper
                descripcion = vehiculo.descripcion
                if (vehiculo.en_servicio){en_servicio = true}
                if (vehiculo.en_mantenimiento){en_mantenimiento = true}
                if (vehiculo.en_circulacion){en_circulacion = true}
                if (vehiculo.transmitiendo){transmitiendo = true}
                if (vehiculo.alarma){alarma = true}
                lw = vehiculo.km_totales/1000
                id_vehiculo = vehiculo.id
            }
            })
        }
  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem] 2xl:basis-2/3 2xl:h-full">
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[40, -2]}
      defaultZoom={5} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        {vehiculos.map((vehiculo)=>(
          (hover !== vehiculo.id)?
            (<Marker 
              key = {vehiculo.id}
              width={30} 
              color = '#087314'
              anchor={[vehiculo.lat, vehiculo.lng]} 
              onMouseOver={() => onHover(vehiculo.id)}
              onClick={()=>handleClick(vehiculo.id)}/>)
            :
            ('')
            ))}
        <Marker 
          width={40} 
          color = 'purple'
          anchor={punto_purple} 
          onClick={()=>handleClick(id_vehiculo)}/>
        <Overlay anchor={punto_purple}>
            <div className="w-36 p-1 pb-2 bg-slate-700/90 shadow-xl rounded-md" onClick = {() => onHover(-1)}>
              <Image src = {`/images/vehiculos/${imagen}`} alt = '' height = {100} width = {160}/>
              <div className="text-center bg-slate-800/80 mt-1 rounded-lg">
                {codigo}
              </div>
              <div className="text-center text-slate-400">
                {keeper}
              </div>
              <div className="text-center text-sm text-slate-400">
                {descripcion}
              </div>
              <div className="flex justify-between mt-3 px-2 border border-slate-400 rounded-lg">
                {transmitiendo ? 
                  (<WifiIcon className="w-6 h-6 mr-1 text-green-400"/>)
                : (<WifiIcon className="w-6 h-6 mr-1 text-red-400"/>)}
                {!en_servicio ? 
                  (<XMarkIcon className="w-6 h-6 mr-1 text-slate-200"/>)
                : (en_mantenimiento ? 
                    (<WrenchIcon className="w-6 h-6 mr-1 text-green-600"/>)
                : (en_circulacion ? 
                    (<PlayIcon className = "w-6 h-6 mr-1 text-green-400"/>)
                  : (<PauseIcon className="w-6 h-6 mr-1 text-red-400"/>)
                ))}
                {(alarma)? 
                  (<SignalIcon className = "w-6 h-6 mr-1 text-red-400"/>)
                : (<SignalIcon className = "w-6 h-6 mr-1 text-slate-400"/>)}
              </div>
            </div>
        </Overlay>
    </Map>
    </div>
  )
}