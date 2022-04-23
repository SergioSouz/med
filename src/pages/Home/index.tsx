import React, { useState } from "react";
import { HeroSection } from "../../components/HeroSection";
import { InfoSection } from "../../components/infoSection";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/SideBar";
import { HomeObj } from "../../utils/dataPages";

export function Home(){

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <SideBar isOpen={isOpen} handleOpen={handleOpen}/>
            <Navbar handleOpen={handleOpen}/>
            <HeroSection/>
            <InfoSection {...HomeObj}/>
        </>
    )
}