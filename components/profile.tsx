'use client';

import { useSession } from "next-auth/react";


export default function Profile() {
    const session = useSession();

    return (
        <div>
            {
            session.data?.user 
            ?
            <div>
               From Client: Signed In
            </div>
            :
            <div>
                From Client: Signed Out
            </div>
            }
        </div>
            
    );
}