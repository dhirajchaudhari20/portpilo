
import { Link } from 'react-scroll';
import github from '../img/github.svg'
import linkedin from '../img/linkedin.svg';
import styled from 'styled-components/macro';

import { useLocation, useHistory } from 'react-router';

const NormalNav = ({open}) => {

    
    function generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyzABSDEFGHIJKLMNOPQRSTUVWXYZ";
      
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      }

    const hoverEnter = (e) => {
        // console.log(e.target.innerText);
        let name = e.target.innerText;
        //console.log(name[0]);
        
            let array = name.split('');
            //console.log(array);
           
            const changeArray = (array) => {
                for(let i = 0; i < array.length; i++){
                    array[i] = generateRandomLetter();
                }

                return array;
            }

            const setName = setInterval(() => {
               let newArray =  changeArray(array);
               let name1 = newArray.join('');
              // console.log(name1);
               e.target.innerText = name1;

            }, 100)

            const out = () => {
                clearInterval(setName);
                e.target.innerText = name;
            }

            setTimeout(() => {
                out();
                e.target.innerText = name;
            }, 300);
        }

        

    const hoverExit = (e, data) => {
        e.target.innerText = data;
    }

    const location = useLocation();
    const history = useHistory();

    

    const backHome = () => {
        if(location.pathname !== '/'){
            history.push('/');
            
        }
    }




    


    return (
        <StyledUl open = {open} className="nav-list">
                    <Link onClick = {backHome} to="home" smooth = {true} duration = {1000}><li onMouseEnter = {(e) => hoverEnter(e)} onMouseLeave = {(e) => hoverExit(e, "Home")} className="list-item">Home</li></Link>
                    <Link to="projects" smooth = {true} duration = {1000}><li  onMouseEnter = {(e) => hoverEnter(e)} onMouseLeave = {(e) => hoverExit(e, "Projects")} className="list-item ">Projects</li></Link>
                    <Link to="skills" smooth = {true} duration = {1000}><li onMouseEnter = {(e) => hoverEnter(e)} onMouseLeave = {(e) => hoverExit(e, "Skills")} className="list-item">Skills</li></Link>
                    <Link to="about" smooth = {true} duration = {1000}><li onMouseEnter = {(e) => hoverEnter(e)} onMouseLeave = {(e) => hoverExit(e, "About")} className="list-item">About</li></Link>
                    <Link to="contact" smooth = {true} duration = {1000}><li onMouseEnter = {(e) => hoverEnter(e)} onMouseLeave = {(e) => hoverExit(e, "Contact")} className="list-item">Contact</li></Link>
                    <a href = "https://github.com/DHIRAJ540" target = "_blank" rel="noreferrer"><li className="list-item"><img src={github} alt="github" /></li></a>
                    <a href = "https://www.linkedin.com/in/dhiraj-subudhi-850365194/" target = "_blank" rel="noreferrer"><li className="list-item"><img src={linkedin} alt="linkedin" /></li></a>
                </StyledUl>
    )
}

export default NormalNav;

const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row ;
    align-items: center;

    .list-item{
        cursor: pointer;
        font-size: 1.2rem;
        padding: 1rem 0rem;
        margin: 0 1rem;
        position: relative;
        overflow: hidden;

        &::after{
            content: '';
            width: 100%;
            height: 3px;
            background: #66fcf1;
            position: absolute;
            left: 15px;
            bottom: 10px;
            transform: translateX(-140%);
            transition: all 0.5s ease;

            
        }

        &:hover::after{
            transform: translateX(-30%);
        }

        
    }

    

    @media(max-width: 768px){
            flex-flow: column;
            flex-wrap: nowrap;
            align-items: center;
            background: #1c1e29;
            position: fixed;
            transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
            top: 0;
            right: 0;
            height: 100vh;
            width: 80vw;
            padding-top: 3.5rem;
            
            transition: transform 0.3s ease-in-out;
        }

        li{
            padding: 18px 10px;
        }
`