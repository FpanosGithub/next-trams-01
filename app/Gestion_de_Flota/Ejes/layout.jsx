import { TabGroup } from '@/ui/TabGroup';

export default async function Layout({children}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/Gestion_de_Flota/Ejes"
          items={[
            {
              text: 'Todos',
            },
            {
              text: 'EAV-Remolcados',
              slug: 'EAV-R',
              segment: 'EAV-R',
            },
            {
              text: 'EAV-Tractores',
              slug: 'EAV-T',
              segment: 'EAV-T',
            },
            {
              text: 'Estandar',
              slug: 'Estandar',
              segment: 'Estandar',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}