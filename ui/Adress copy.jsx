'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export function AddresCopy() {
  try {const pathname = usePathname();}
  catch {const pathname = '';}
  
  console.log(pathname)
  return (
      <div className="flex gap-x-1 text-sm font-medium">
        {pathname ? (
          <>
            {pathname
              .split('/')
              .slice(2)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_2s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100"
                      >
                        {segment}
                      </span>
                    </span>

                    <span className="text-gray-600">/</span>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
      </div>
  );
}