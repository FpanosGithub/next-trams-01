import { TabGroup } from '@/ui/TabGroup';

export default async function Layout({children}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/Gestion_de_Flota/Vehiculos"
          items={[
            {
              text: 'Todos',
            },
            {
              text: 'Locomotoras',
              slug: 'locomotoras',
              segment: 'locomotoras',
            },
            {
              text: 'Vehiculos Auxiliares',
              slug: 'auxiliares',
              segment: 'auxiliares',
            },
            {
              text: 'Vagones',
              slug: 'vagones',
              segment: 'vagones',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}