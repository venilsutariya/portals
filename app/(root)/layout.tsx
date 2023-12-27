"use client";

import NavbarComp from "@/components/customUi/Navbar";
import { useEffect } from "react";
import { initializeSmoothScroll } from "@/utils/smoothScroll";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {

    useEffect(() => {
        initializeSmoothScroll();
    }, []);

    return (
        <div className=" relative">
            <div className="absolute w-full">
                <NavbarComp />
            </div>
            {children}
        </div>
    );
}

export default RootLayout;