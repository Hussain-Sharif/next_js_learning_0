"use client"
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { tr } from "framer-motion/m";

const Navbar=({ className }: { className?: string })=>{
    const [active, setActive] = useState<string | null>(null);

    return (
        <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Courses">
                <div className="flex flex-col space-y-4 text-sm ">
                    <HoveredLink href="/courses"> <p className=" dark:text-white hover:dark:text-cyan-300">All Courses</p></HoveredLink>
                    <HoveredLink href="/basicmusictheory">
                    <p className=" dark:text-white hover:dark:text-cyan-300">
                    Basic Music Theory
                    </p>
                    </HoveredLink>
                    <HoveredLink href="/advancedcomposition">
                    <p className=" dark:text-white hover:dark:text-cyan-300">
                    Advanced Composition
                    </p>
                    </HoveredLink>
                    <HoveredLink href="/songwriting"><p className=" dark:text-white hover:dark:text-cyan-300">Songwriting</p></HoveredLink>
                    <HoveredLink href="/musicproduction">
                    <p className=" dark:text-white hover:dark:text-cyan-300">
                    Music Production
                    </p>
                    </HoveredLink>
                </div>
            </MenuItem>
            <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            </MenuItem>
            </Link>
        </Menu>
    </div>
    )
}

export default Navbar