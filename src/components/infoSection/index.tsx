import React from "react";
import { HomeType } from "../../@types/HomeType";
import { Button } from "../Button";

import {
    ContainerInfoSection,
    BtnWrap,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Img,
    ImgWrap,
    InfoRow,
    InfoWrapper,
    SubTitle,
    TopLine
} from "./styles";

export function InfoSection(props: HomeType) {
    return (
        <>
            <ContainerInfoSection lightBg={props.lightBg} id={props.id}>
                <InfoWrapper>
                    <InfoRow imgStart={props.imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{props.topLine}</TopLine>
                                <Heading lightText={props.lightText}>{props.heading}</Heading>
                                <SubTitle darkText={props.darkText}>{props.description}</SubTitle>
                                <BtnWrap>
                                    <Button
                                        to="/"
                                        primary={props.primary}
                                        dark={props.dark}
                                    >{props.buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={props.img} alt={props.alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </ContainerInfoSection>
        </>
    )
}