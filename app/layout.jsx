import '@/styles/globals.css';
import Image from 'next/image';
import { client} from '@/lib/client';
import { AddressBar } from '@/ui/AddressBar';
import { GlobalNav } from '@/ui/GlobalNav';
import { VercelLogo } from '@/ui/VercelLogo';
import tria from '@/public/tria-corto.png'
//import { tria } from 'tria';


export default function RootLayout({children}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-gray-800 bg-[url('/grid.svg')]">
        <GlobalNav />
        <div className="lg:pl-72">
          <div className="mx-auto max-w-8xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
            </div>

            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <Byline />
              </div>
            </div>

          </div>
        </div>
        
      </body>
    </html>
  );
}

function Byline() {
  return (
    <div className="flex items-center justify-between gap-x-4 p-3.5 lg:px-5 lg:py-3">
      <div className="flex items-center gap-x-1.5">
        <div className="text-sm text-gray-400">By</div>
        <a href="https://triarail.com" title="Tria">
          <div className="w-16 text-gray-100 hover:text-gray-50">
            <Image src={tria} width = {70} height={15} alt='logo Tria'/>
          </div>
        </a>
      </div>
    </div>
  );
}
