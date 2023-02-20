import Link from 'next/link';
import Image from "next/image"
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

export default function FichaVehiculo ({vehiculo}){

  return(
    <>
    {/* Div general */}
    <div className="grid grid-cols-2 gap-1 past-sm:grid-cols-3 past-md:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8">
      {/* Div # 1 - Imagen + estado ocupa 2 cols */}
      <div className="flex justify-around align-middle col-span-2 rounded-md py-4 px-2 border border-slate-500 h-[13rem]">
          <Image src = {`/images/vehiculos/${vehiculo.tipo.imagen}`} alt = 'imagen vehículo' height = {200} width = {320} className="rounded-lg"/>
          <div className= "space-y-2 rounded-lg bg-slate-800 border border-slate-500 px-3 py-2">
            {vehiculo.en_servicio?
              (<BoltIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<BoltSlashIcon className="w-6 h-6 mx-auto text-red-500"/>)}
            {vehiculo.en_mantenimiento?
              (<WrenchIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<WrenchIcon className="w-6 h-6 mx-auto text-slate-500"/>)}
            {vehiculo.en_circulacion?
              (<PlayIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<PauseIcon className="w-6 h-6 mx-auto text-red-500"/>)}
            {vehiculo.transmitiendo?
              (<RssIcon className="w-6 h-6 mx-auto text-green-500"/>)
            : (<WifiIcon className="w-6 h-6 mx-auto text-red-500"/>)}
            {vehiculo.alarma?
            (<BellAlertIcon className="w-6 h-6 mx-auto text-red-500"/>)
          : (<BellAlertIcon className="w-6 h-6 mx-auto text-gray-500"/>)}
          </div>

      </div>
      
      {/* Div # 2 - */}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
        <div className="text-xs text-slate-300">matricula:</div>
        <div className="rounded-md mt-2 py-1 px-1 h-10  text-lg font-extralight text-center bg-slate-800 border border-slate-500">{vehiculo.matricula}</div>
        <div className="text-xs text-slate-300 mt-3">Descripción:</div>
        <div className="rounded-md mt-2 p-1 h-20 text-center text-slate-400 border border-slate-500">{vehiculo.descripcion}</div>
      </div>

      {/* Div # 3 - */}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
          <div className="text-xs text-slate-300">Clase:</div>
          <div className="rounded-md mt-2 p-1 h-10 text-lg font-extralight text-center border border-slate-500">{vehiculo.clase}</div>
          <div className="text-xs text-slate-300 mt-3">Tipo:</div>
          <div className="rounded-md mt-2 p-1 h-16 text-center text-slate-400 border border-slate-500">{vehiculo.tipo.codigo}</div>
      </div>

      

    {/* Div # 4 - Datos mantenimiento*/}
    

    <div className="col-span-2 rounded-md px-4 py-4 grid grid-cols-2 past-md:col-span-2 gap-8 border border-slate-500 h-[13rem]">
      <div className = ''>
        <div className="text-xs text-slate-300">Keeper:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 text-lg font-extralight text-center border border-slate-500">{vehiculo.keeper}</div>
        <div className="text-xs mt-3 text-slate-300">km Vehículo:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 text-lg font-extralight text-center border border-slate-500">{Math.round(vehiculo.km_totales).toLocaleString('fr')} km</div>
        <div className="text-s mt-2 text-slate-400 flex justify-between">
          Nudo Ferroviario:
          {vehiculo.en_nudo?
            (<CheckIcon className="w-6 h-6 text-green-400"/>)
          : (<XMarkIcon className="w-6 h-6 text-gray-400"/>)
          }
        </div>
      </div>        
      <div className = ''>
      <div className="text-xs text-slate-300">Próximo Mantenimiento:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 text-center  text-slate-400 border border-slate-500">{vehiculo.fecha_proximo_mantenimiento}</div>
        <div className="rounded-md mt-4 py-1 px-2 h-24 text-center  text-slate-400 border border-slate-500">{vehiculo.observaciones_servicio}</div>
      </div>    
    </div>
    
    {/* Div # 5 - */}
    <div className="col-span-2 rounded-md px-4 py-4  border border-slate-500 h-[13rem] past-sm:col-span-3 past-md:col-span-2">
        <div className="text-xs text-slate-300 mb-2">Ejes:</div>
        <div className="rounded-md border border-slate-500 p-4 h-40">
          {vehiculo.ejes.map((eje)=>{return(
              <Link key={eje.id} className="mt-1 flex justify-between text-lg font-extralight text-slate-400" href = '/flota'> 
                {eje.codigo} 
                <ArrowTopRightOnSquareIcon className="w-6 h-6 mx-auto"/>
              </Link>
            )
            })}
        </div>
      </div>

  </div>
  </>
  )
}
