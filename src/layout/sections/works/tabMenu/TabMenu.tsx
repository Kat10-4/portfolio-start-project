import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <div>
            <StyledTabMenu>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ItemList key={index}>
                            <Link href="">{item}</Link>
                        </ItemList>
                    })}
                </ul>
            </StyledTabMenu>
        </div>
    );
};

const StyledTabMenu = styled.nav`
    margin-bottom: 40px;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
`
const ItemList=styled.li`
   
`


