'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import { IoLogInOutline, IoLogOutOutline, IoShieldOutline } from "react-icons/io5";

export const LogoutButton = () => {

  const { data: session, status } = useSession();

  if (status === 'loading') {
    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <IoShieldOutline size={30} />
      <span className="group-hover:text-gray-700">Espere...</span>
    </button>
  }

  if (status === 'unauthenticated') {
    return (
    <button 
    onClick={() => signIn()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <IoLogInOutline size={30} />
      <span className="group-hover:text-gray-700">Ingresar</span>
    </button>
    )
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <IoLogOutOutline size={30} />
      <span className="group-hover:text-gray-700">Salir</span>
    </button>
  )
}
