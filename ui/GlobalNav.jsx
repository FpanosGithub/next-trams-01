'use client';

import { menu} from '@/lib/menu';
import Link from 'next/link';
import Image from 'next/image';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import adif from '@/public/favicon/adif2.png'
import tria from '@/public/favicon/TRIA.png'
import clsx from 'clsx';
import { useState } from 'react';

export function GlobalNav() {
 
  const [menuOpened, setMenuOpen] = useState(false);
  const [chaptersOpened, setChaptersOpen] = useState ([])
  
  const closeMenu = () => setMenuOpen(false);

  function openChapter (chapter) {
    if (!chaptersOpened.includes(chapter)) {
      setChaptersOpen([...chaptersOpened, chapter])
    }
  }
  function closeChapter (chapter) {
    const chapters = chaptersOpened.map(element => {
        if (element!==chapter){return element} 
      })
    setChaptersOpen(chapters)
  }

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-52 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={closeMenu}>
            <Image src={tria} width = {120} height={20} alt='logo adif' priority/>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setMenuOpen(!menuOpened)}>
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {menuOpened ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3Icon className="block w-6 text-gray-400" />
        )}
      </button>
      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': menuOpened,
          hidden: !menuOpened,
        })}>
        <nav className="space-y-4 px-2 py-8">
          {menu.map((chapter) => (
              chaptersOpened.includes(chapter.number)?
                (
                <div key={chapter.number}>
                  <div
                    className="px-3 pb-1 group flex flex-row justify-start font-semibold tracking-wider text-gray-400/80 hover:cursor-pointer"
                    onClick={() => closeChapter(chapter.number)}>
                      <div className='w-56'>{chapter.title}</div>
                      <ChevronDownIcon className="block w-6 text-gray-400"/>
                  </div>
                  <div className="pl-5">
                    {chapter.items.map((item) => (<GlobalNavItem key={item.slug} item={item} close={closeMenu} />))}
                  </div>
                </div>
                )
              :
                (
                <div key={chapter.number}>
                    <div
                      className="px-3 group flex flex-row justify-start font-semibold tracking-wider text-gray-400/80 hover:cursor-pointer  hover:text-gray-300/80"
                      onClick={() => openChapter(chapter.number)}>
                        <div className='w-56'>{chapter.title}</div>
                        <ChevronRightIcon className="block w-6 text-gray-400"/>
                    </div>
                </div>
                )
            ))}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({item, close,}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-1 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}