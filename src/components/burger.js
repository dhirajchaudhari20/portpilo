import React, {useState} from 'react';
import styled from 'styled-components/macro';
import NormalNav from './normalNav';

const Burger = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
        <StyledBurger open = {open} onClick = {() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <NormalNav open  = {open}/>
        </>

    )
}

export default Burger;

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 2000;
    display: none;
    cursor: pointer;
    

    @media(max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;

    }


    div{
        width: 2rem;
        height: 0.25rem;
        background: #66fcf1;
        border-radius: 5px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        

        &:nth-child(1){
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'} ;
        }
        &:nth-child(2){
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'} ;
            opacity: ${({open}) => open ? 0 : 1} ;
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'} ;
        }
    }
`