import { Suspense } from "react";
import FichaVehiculo from '../_componentes/FichaVehiculo';
import CirculacionesVehiculo from '../_componentes/CirculacionesVehiculo';

async function getVehiculo(id) {
  const res = await fetch(`https://mercave-2301.azurewebsites.net/vehiculos/${id}`)
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch data for vehicle: ${id}`);
  }
  return res.json();
}

// Generación estática de páginas 
async function getVehiculos() {
  const res = await fetch('https://mercave-2301.azurewebsites.net/vehiculos')
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data for vehicles');
  }
  return res.json();
}
export async function generateStaticParams() {
  const vehiculos = await getVehiculos();
  return vehiculos.map((vehiculo) => ({
    vehiculo: `${vehiculo.id}`,
  }));
}

export default async function Page({params}) {
  const vehiculo = await getVehiculo(params.vehiculo);
  return (
    <>
    <FichaVehiculo vehiculo = {vehiculo}/>
    <Suspense fallback = {<p>cargando últimas 5 circulaciones del vehículo: {vehiculo.id}...........</p>}>
      <CirculacionesVehiculo id_vehiculo = {vehiculo.id}/>
    </Suspense>
    </>
  )
}