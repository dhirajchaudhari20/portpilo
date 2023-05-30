import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Link } from 'react-scroll';

import Burger from './burger';


const Nav = () => {
    // const item = document.querySelectorAll('.list-item');
    // console.log(item);

    const location = useLocation();
    const history = useHistory();

    

    const backHome = () => {
        if(location.pathname !== '/'){
            history.push('/');
            
        }
    }


    return (
        <StyledNav>
            <Container>
                <div className="logo">
                    <Link onClick = {backHome} to = 'home' smooth = {true} duration = {1000}><p>Dhiraj</p></Link>
                </div>
                <Burger/>
                
                
            </Container>
        </StyledNav>
    )
}

export default Nav;

const StyledNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1C1E29;
    z-index: 1000;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);

    
`

const Container = styled.div`
    width: 80%;
    display: flex;
    color: #66FCF1;
    display: flex;
    align-items: normal;
    justify-content: space-between;
    
    max-width: 1220px;
    

    @media(max-width: 768px){
                  width: 95%;
                  
                    }

    .logo p{
        font-family: 'Pacifico', cursive;
        font-size: 2rem;
        cursor: pointer;

        @media(max-width: 768px){
                   font-size: 1.5rem;
                    }
    }

    
    
`