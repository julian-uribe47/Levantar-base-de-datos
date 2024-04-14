'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";


export default function ProfilePage() {

    const { data: session } = useSession();

    useEffect(() => {
        console.log('Client Side')
    }, [])



    return (
        <div>
            <h1> Page Profile</h1>
            <hr />

            <div className=" flex flex-col">
                <span>{ session?.user?.name ?? 'NO name' }</span>
                <span>{ session?.user?.email ?? 'NO email'}</span>
                <span>{ session?.user?.image ?? 'NO image' }</span>
                <span>{ session?.user?.id ?? 'NO UUID' }</span>
                <span>{ session?.user?.roles?.join(',') ?? 'No-roles' }</span>

            </div>
        </div>
    );
}