import Link from 'next/link';
import Image from "next/image"
import {BoltIcon, BoltSlashIcon, WrenchIcon,  PauseIcon, PlayIcon, WifiIcon, RssIcon,  BellAlertIcon, XMarkIcon, CheckIcon, ViewfinderCircleIcon, ArrowTopRightOnSquareIcon} from '@heroicons/react/24/solid';

async function getCirculaciones(id) {
  const res = await fetch(`https://mercave-2301.azurewebsites.net/eventos/circulaciones_vehiculo/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}


export default async function CirculacionesVehiculo ({vehiculo}){
  const circulaciones = await getCirculaciones(vehiculo.id);
  console.log(circulaciones)
  return(
    <>
    {/* Div general */}
    <div className="mt-6 grid grid-cols-2 gap-1 past-sm:grid-cols-3 past-md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8">
      {/* Div # 1 - Imagen + estado ocupa 2 cols */}
      <div className="flex justify-around align-middle col-span-2 rounded-md py-4 px-2 bg-gray-800 border border-slate-500 h-[13rem]">
      </div> 
      
      {/* Div # 2 - */}
      <div className="rounded-md px-4 py-5 bg-slate-800 border border-slate-500 h-[13rem]">
      </div>

      {/* Div # 3 - */}
      <div className="rounded-md px-4 py-5 bg-slate-800 border border-slate-500 h-[13rem]">
      </div>

      {/* Div # 4 - */}
      <div className="rounded-md px-4 py-5 bg-slate-800 border border-slate-500 h-[13rem]">
      </div>

      {/* Div # 5 - */}
      <div className="rounded-md px-4 py-4 bg-slate-800 border border-slate-500 h-[13rem]">
        <div className="text-xs text-slate-300 mb-2">Ejes:</div>
        <div className="rounded-md border border-slate-500 p-4 h-40">
          {vehiculo.ejes.map((eje)=>{return(
              <Link key={eje.id} className="mt-2 flex justify-between" href = '/flota'> 
                {eje.codigo} 
                <ArrowTopRightOnSquareIcon className="w-6 h-6 mx-auto text-gray-300"/>
              </Link>
            )
            })}
        </div>
      </div>

    {/* Div # 6 - Datos mantenimiento*/}
    

    <div className="col-span-2 rounded-md px-4 py-5 grid grid-cols-2 past-sm:col-span-3 past-md:col-span-2 gap-8 bg-slate-800 border border-slate-500 h-[13rem]">
      <div className = ''>
        <div className="text-xs text-slate-300">EEM:</div>
        <div className="rounded-md mt-2 py-3 px-2 h-14 text-center border border-slate-500">{vehiculo.EEM}</div>
        <div className="text-xs mt-4 text-slate-300">Próximo Mantenimiento:</div>
        <div className="rounded-md mt-2 py-1 px-2 h-13 text-center  text-slate-400 border border-slate-500">{vehiculo.fecha_proximo_mantenimiento}</div>
      </div>        
      <div className = ''>
        <div className="text-xs text-slate-300">km Vehículo:</div>
        <div className="rounded-md mt-2 py-3 px-2 h-14 text-center border border-slate-500">{Math.round(vehiculo.km_totales).toLocaleString('es-ES')} km</div>
        <div className="rounded-md mt-2 py-1 px-2 h-16 text-center  text-slate-400 border border-slate-500">{vehiculo.observaciones_servicio}</div>
        <div className="text-s mt-2 text-slate-400 flex justify-between">
          Nudo Ferroviario:
          {vehiculo.en_nudo?
            (<CheckIcon className="w-6 h-6 text-green-400"/>)
          : (<XMarkIcon className="w-6 h-6 text-gray-400"/>)
        }
        </div>
      </div>    

    </div>
  </div>
  </>
  )
}
