'use client'
import {useState, useEffect} from "react"
import MapaCirculaciones from "./MapaCirculaciones"
import ListaCirculaciones from "./ListaCirculaciones"

export default function PanelCirculaciones ({circulaciones}) {
  const [select, setSelect] = useState(-1)
  const [hover, setHover] = useState(-1)
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return(

    <div className="mt-6 space-y-2 2xl:flex 2xl:space-x-4 2xl:h-[40rem]">
    
      <MapaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/> 

      <ListaCirculaciones
        circulaciones = {circulaciones} 
        select = {select}
        onSelect = {setSelect}
        hover = {hover}
        onHover = {setHover}/>

    </div>
  )
}