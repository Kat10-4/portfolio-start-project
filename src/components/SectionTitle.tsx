import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    color: ${theme.colors.font};
    text-align: center;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    margin-bottom: 90px;

    position: relative;

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};
        width: 55px;
        height: 1px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
    }

`

