"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import clsx from 'clsx'
import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState, useContext } from 'react'
import {AppContext} from '@/app/app-context'
import { truncateString } from '@/app/helpers/truncate_string'

function DashboardTopBar() {
  const session = useSession()
  const app_context = useContext(AppContext);

  return (
    <div className={clsx("flex flex-row items-center justify-between w-full border-b-[1px] border-b-neutral-50  px-5 py-5 bg-white")}>
        <div className="flex flex-row items-center justify-start w-full space-x-2">
            <Avatar
            >
                <AvatarImage
                    src={session?.data?.user?.image}
                />
                <AvatarFallback>
                    {session?.data?.user?.username}
                </AvatarFallback>
            </Avatar>
            <span className="text-md opacity-70 ">
                @{ session?.data?.user?.username }
            </span>
        </div>
        <div className="flex flex-row items-center justify-center cursor-pointer hover:bg-neutral-400 group p-2 rounded-full">
            <p>
                {app_context.user_address}
            </p>
            <LogOut
                className="group-hover:text-neutral-100"
                onClick={()=>signOut({
                    callbackUrl: "/"
                })}
            />
        </div>
    </div>
  )
}

export default DashboardTopBar