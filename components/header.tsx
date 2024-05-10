import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
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
import SearchInput from "@/components/search-input";
import { Suspense } from "react";

export default async function Header() {    

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href='/' className="font-bold" >Discuss</Link>

            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Suspense>
                        <SearchInput />

                    </Suspense>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                
                    <HeaderAuth />
                
            </NavbarContent>
        </Navbar>
    );
}