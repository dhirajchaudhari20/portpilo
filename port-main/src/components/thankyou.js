import React from 'react';
import styled from 'styled-components';

const ThankYou = () => {

    return(
        <Thank>
            <Container>

            <h1>Thanks for being awesome!</h1>
            <p>I have received your message and would like to thank you for writing to me.</p>
            <p>I will reply by email as soon as possible.</p>
            <p>Talk to you soon, Dhiraj</p>

            </Container>
            
        </Thank>
    )
}

export default ThankYou;

const Thank = styled.div`
    width: 100%;;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #66FCF1;
    padding: 15vh 0;

   
`

const Container = styled.div`
     width: 80%;
    max-width: 1220px;
    display: flex;
    align-items: normal;
    justify-content: space-between;
    flex-direction: column;

    h1{
        font-size: 3rem;
        margin-bottom: 2rem;
       
    }
    p{
        font-size: 1.5rem;
        margin: 1rem 0rem;

    }
`