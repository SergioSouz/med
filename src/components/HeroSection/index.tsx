import React, { useState } from "react";
import { Button } from "../Button";
import { 
    ContainerHero,
    HeroBg,
    ArrowForward,
    ArrowRight,
    HeroContent,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
} from "./styles";


export function HeroSection(){

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return(
        <ContainerHero>
            <HeroBg>
                
            </HeroBg>
            <HeroContent>
                <HeroTitle>Auxiliamos no seu Diagnosticos</HeroTitle>
                <HeroP>Plataforma especializada em Desenvolvimento e Inteligência Artificial no ramo da medicina</HeroP>
                <HeroBtnWrapper>
                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true} >
                        Saiba mais { hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </ContainerHero>
    )
}