import React from 'react';
import styled from "styled-components";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledMenu>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <a href="">{item}</a>
                        </li>
                    })}
                </ul>
            </StyledMenu>
        </div>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
`
