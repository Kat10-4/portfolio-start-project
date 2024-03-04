import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpeg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Svetlana Dyablo</Name>
                    <MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #f1f1b3;
`
const MainTitle = styled.h1``

const Name = styled.h2``


const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
