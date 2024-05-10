'use client';

import Link from "next/link";
import * as actions from '@/actions';

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Input,
    Button,
    Avatar,
    NavbarItem,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react';

import { useSession } from "next-auth/react";

export default function HeaderAuth() {
    const session = useSession();

    let authContent: React.ReactNode;

    if(session.data?.user) {
        authContent = <Popover placement="left">
            <PopoverTrigger>
                <Avatar src={session.data.user.image || ''} />
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <form action={actions.signOut}>
                        <Button type="submit">Sign Out</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    } else {
        authContent = <>
        <form action={actions.signIn}>
            <NavbarItem>
                <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
            </NavbarItem>
        </form>
        <form action={actions.signOut}>
            <NavbarItem>
                <Button type="submit" color="primary" variant="flat">Sign Out</Button>
            </NavbarItem>
        </form>

        </>
    }

    return authContent;
}

