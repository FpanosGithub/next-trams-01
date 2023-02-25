import PanelCirculaciones from "./PanelCirculaciones";

async function getCirculaciones(id) {
  const res = await fetch(`https://mercave-2301.azurewebsites.net/eventos/circulaciones_vehiculo_ampliadas/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}


export default async function CirculacionesVehiculo ({id_vehiculo}){
  const circulaciones = await getCirculaciones(id_vehiculo);
  return(
    <PanelCirculaciones circulaciones = {circulaciones}/>
  )
}
