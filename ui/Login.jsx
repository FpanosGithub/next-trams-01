'use client'
import {signIn} from 'next-auth/react'
import { usePathname } from 'next/navigation';

export default function Login({user}){
  const pathname = usePathname()
  return(
  <div className="flex items-center justify-between gap-x-2 p-3.5 lg:px-5 lg:py-3">
    <div className="flex gap-x-1 text-sm font-medium">
        {pathname ? (
          <>
            {pathname
              .split('/')
              .slice(2)
              .map((segment) => {
                return (
                  <div key={segment}>
                    <span>
                      <span
                        key={segment}
                        className="animate-[highlight_2s_ease-in-out_1] rounded-full px-1.5 py-0.5 text-gray-100">
                        {segment}
                      </span>
                    </span>
                    <span className="text-gray-600">/</span>
                  </div>
                );
              })}
          </>
        ) : null}
      </div>
    <div>{user.name}</div>
    <button onClick = {()=> signIn()} className="text-gray-400 ">
        Log in
    </button>
  </div> 
)
}