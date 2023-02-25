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
      
      {/* Div # 2 - Matrícula y Descripción*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
        <div className="text-xs text-slate-300">matricula:</div>
        <div className="rounded-md mt-2 py-1 px-1 h-10  text-lg font-extralight text-center overflow-hidden bg-slate-800 ">{vehiculo.matricula}</div>
        <div className="text-xs text-slate-300 mt-3">Descripción:</div>
        <div className="rounded-md mt-2 p-1 h-20 overflow-hidden text-slate-400">{vehiculo.descripcion}</div>
      </div>

      {/* Div # 3 - Clase y Tipo*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
          <div className="text-xs text-slate-300">Clase:</div>
          <div className="rounded-md mt-2 p-1 h-10 text-lg font-extralight  overflow-hidden">{vehiculo.clase}</div>
          <div className="text-xs text-slate-300 mt-3">Tipo:</div>
          <div className="rounded-md mt-2 p-1 h-20 overflow-hidden text-slate-400">{vehiculo.tipo.codigo}</div>
      </div>

      {/* Div # 4 - Owner y Keeper*/}
      <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
          <div className="text-xs text-slate-300">Owner:</div>
          <div className="rounded-md mt-2 p-1 h-10 text-lg font-extralight">{vehiculo.owner}</div>
          <div className="text-xs text-slate-300 mt-4">Keeper:</div>
          <div className="rounded-md mt-2 p-1 h-10 text-lg font-extralight">{vehiculo.keeper}</div>
      </div>

    {/* Div # 5 - Datos servicio*/}
    <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
        <div className="text-xs text-slate-300">KM realizados</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 text-lg font-extralight overflow-hidden">{Math.round(vehiculo.km_totales).toLocaleString('fr')} km</div>
        <div className="text-s my-3 text-slate-400 flex justify-between">
          Nudo:
          {vehiculo.en_nudo?
            (<CheckIcon className="mx-auto w-6 h-6 text-green-400"/>)
          : (<XMarkIcon className="mx-auto w-6 h-6 text-gray-400"/>)
          }
        </div>    
        <div className="rounded-md mt-2 py-1 h-16 overflow-hidden text-slate-400">{vehiculo.observaciones_servicio}</div>   
    </div>

    {/* Div # 6 - Datos Mantenimiento*/}
    <div className="rounded-md px-4 py-4 border border-slate-500 h-[13rem]">
    <div className="text-xs text-slate-300">Último Mant.:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 overflow-hidden text-slate-400 ">{vehiculo.fecha_ultimo_mantenimiento}</div> 
        <div className="mt-2 text-xs text-slate-300">Próximo Mant.:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-10 overflow-hidden text-slate-400">{vehiculo.fecha_proximo_mantenimiento}</div>  
        <Link className="mt-2 flex justify-between text-lg font-extralight text-slate-400" href = '/flota'> 
            Mantenimientos
            <ArrowTopRightOnSquareIcon className="w-6 h-6 mx-auto"/>
        </Link>
    </div>
    
    {/* Div # 7- */}
    <div className="rounded-md px-4 py-4  border border-slate-500 h-[13rem] past-sm:col-span-2 past-md:col-span-1">
        <div className="text-xs text-slate-300 mb-2">Ejes:</div>
        <div className="rounded-m p-2 h-36  bg-slate-900 ">
          {vehiculo.ejes.map((eje)=>{return(
              <Link key={eje.id} className="mt-1 flex justify-between text-lg font-extralight text-slate-400 overflow-hidden" href = '/flota'> 
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
