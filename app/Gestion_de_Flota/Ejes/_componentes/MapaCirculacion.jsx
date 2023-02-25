'use client'
import { Map, ZoomControl, Marker, Overlay } from "pigeon-maps";
import { stamenToner } from 'pigeon-maps/providers';

export default function MapaCirculacion ({circulacion, onSelect}) {
  return(
    <div className="rounded-lg border border-slate-500 p-2 h-[38rem] 2xl:basis-2/3 2xl:h-full 2xl:mt-2">
    <Map 
      provider={stamenToner}
      dprs={[1, 2]} 
      defaultHeight={600} 
      defaultCenter={[40, -2]}
      defaultZoom={6} 
      attribution = {false}
      metaWheelZoom = {true}>
        <ZoomControl />
        <Marker 
          width={30} 
          color = {'green'} 
          anchor={[circulacion.lat_final, circulacion.lng_final]}
          onClick = {() => onSelect(-1)}/>
        <Marker 
          width={30} 
          color = {'black'} 
          anchor={[circulacion.lat_inicial, circulacion.lng_inicial]}
          onClick = {() => onSelect(-1)}/>

        {circulacion.eventos.map((evento)=>
        (
          <Marker 
          key = {evento.id}
          width={10} 
          color = {'orange'} 
          anchor={[evento.lat, evento.lng]}/>
        ))}
    </Map>
    </div>
  )
}