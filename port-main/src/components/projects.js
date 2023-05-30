import React from 'react';
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { scrollReveal, sliderContainer, lineAnim, lineAnim100, scrollReveal1 } from './animation';
import {  motion } from 'framer-motion';



import netflix from '../img/netflixView.svg';
import fact from '../img/quizView.svg';
import player from '../img/playerView.svg';
import game from '../img/gamesView.svg';
import link from '../img/link.svg';


const Projects = () => {


    const [element1, controls1] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    const [element5, controls5] = useScroll();
    const [element6, controls6] = useScroll();
    const [element7, controls7] = useScroll();
    const [element8, controls8] = useScroll();
    const [element9, controls9] = useScroll();
    const [element10, controls10] = useScroll();
    return (
        <StyledProjects id = "projects" ref = {element1} variants = {scrollReveal} animate = {controls1} initial = "hidden" >
            <Container variants = {sliderContainer}>
                <motion.div variants = {sliderContainer} className="title">
                    <h1>Projects</h1>
                    <motion.div  variants = {lineAnim} className="line"></motion.div>
                </motion.div>
                
                <div className="project-left">
                    <motion.div ref = {element3} variants = {scrollReveal} animate = {controls3} className="image">
                        <img src={netflix} alt="netflix" />
                    </motion.div>
                    <motion.div ref = {element4} variants = {scrollReveal1} animate = {controls4} className="description">
                        <div className="project-title">
                        <h1>Netflix clone</h1>
                        <motion.div  variants = {lineAnim100} className="line"></motion.div>
                        </div>
                        
                        <ul className="items">
                            <li className="item">Firebase</li>
                            <li className="item">React</li>
                            <li className="item">SCSS</li>
                            <li className="item">HTML</li>
                        </ul>
                        <p>I recreated the entire front end of Netflix with all
                        its functionalities. It is fully responsive supported on all devices and browsers. I also enabled user authentication and real-time database using Firebase.</p>
                        <div className="links">
                            <button className="live-button"><a href="https://dhiraj-netflix.netlify.app/" target = "_blank" rel="noreferrer">Live site</a><img src={link} alt="link" /></button>
                            <button className="code-button"><a href="https://github.com/DHIRAJ540/netflix" target = "_blank" rel="noreferrer">Code</a><img src={link} alt="link" /></button>
                        </div>
                    </motion.div>
                </div>
                <div className="project-right">
                    
                    <motion.div ref = {element5} variants = {scrollReveal} animate = {controls5} className="description">
                        <div className="project-title">
                        <h1>React Games App</h1>
                        <motion.div variants = {lineAnim100} className="line"></motion.div>
                        </div>
                        
                        <ul className="items">
                            <li className="item">HTML</li>
                            <li className="item">SCSS</li>
                            <li className="item">JavaScript</li>
                            <li className="item">React</li>
                            <li className="item">Redux</li>
                        </ul>
                        <p>It’s a games websites where you can see recent popular games and search ay game and know its rating, platforms, etc. I used an external API to get the game's data and used React to create the whole app.</p>
                        <div className="links">
                            <button className="live-button"><a href="https://react-games-app.netlify.app/" target = "_blank" rel="noreferrer">Live site</a><img src={link} alt="link" /></button>
                            <button className="code-button"><a href="https://github.com/DHIRAJ540/react-games-app" target = "_blank" rel="noreferrer">Code</a><img src={link} alt="link" /></button>
                        </div>
                    </motion.div>
                    <motion.div ref = {element6} variants = {scrollReveal1} animate = {controls6}  className="image right">
                        <img src={game} alt="game" />
                    </motion.div>
                </div>
                <div className="project-left">
                    <motion.div ref = {element7} variants = {scrollReveal} animate = {controls7} className="image">
                        <img src={player} alt="player" />
                    </motion.div>
                    <motion.div ref = {element8} variants = {scrollReveal1} animate = {controls8} className="description">
                        <div className="project-title">
                        <h1>React Music Player</h1>
                        <motion.div variants = {lineAnim100} className="line"></motion.div>
                        </div>
                        
                        <ul className="items">
                            <li className="item">JavScript</li>
                            <li className="item">React</li>
                            <li className="item">SCSS</li>
                            <li className="item">HTML</li>
                        </ul>
                        <p>It’s a simple music player app with all functionalities and a beautiful UI.</p>
                        <div className="links">
                            <button className="live-button"><a href="https://dhiraj-react-player.netlify.app/" target = "_blank" rel="noreferrer">Live site</a><img src={link} alt="link" /></button>
                            <button className="code-button"><a href="https://github.com/DHIRAJ540/react-music-player" target = "_blank" rel="noreferrer">Code</a><img src={link} alt="link" /></button>
                        </div>
                    </motion.div>
                </div>
                <div className="project-right">
                   
                    <motion.div ref = {element9} variants = {scrollReveal} animate = {controls9} className="description">
                        <div className="project-title">
                        <h1>Fact App</h1>
                        <motion.div variants = {lineAnim100} className="line"></motion.div>
                        </div>
                        
                        <ul className="items">
                            <li className="item">HTML</li>
                            <li className="item">CSS</li>
                            <li className="item">JavaScript</li>
                            
                        </ul>
                        <p>It’s a fun Fact app that I designed and developed where you can play the game get to know the score.
                        Try it out and have fun.</p>
                        <div className="links">
                            <button className="live-button"><a href="https://dazzling-yonath-c43444.netlify.app/" target = "_blank" rel="noreferrer">Live site</a><img src={link} alt="link" /></button>
                            <button className="code-button"><a href="https://github.com/DHIRAJ540/Fact-app" target = "_blank" rel="noreferrer">Code</a><img src={link} alt="link" /></button>
                        </div>
                    </motion.div>
                    <motion.div ref = {element10} variants = {scrollReveal1} animate = {controls10}  className="image right">
                        <img src={fact} alt="fact" />
                    </motion.div>
                </div>
               
            </Container>
        </StyledProjects>
    )
}

export default Projects;

const StyledProjects = styled(motion.div)`
    width: 100%;;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #66FCF1;
    padding: 15vh 0;

    @media(max-width: 768px){
                    padding: 5vh 0;
                    }
`

const Container = styled(motion.div)`
    overflow-x: hidden;
    width: 80%;
    max-width: 1220px;
    display: flex;
    align-items: normal;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 768px){
                   width: 95%;
                    }

    .title{

        padding-bottom: 5rem;

        @media(max-width: 768px){
                    padding-bottom:2rem ;
                    }

        h1{
            margin: 0;
            font-size: 2.5rem;
            font-weight: bold;

            @media(max-width: 768px){
                    font-size: 2rem;
                    
                    }
            
        }
        .line{
            height: 5px;
            width: 40%;
            border-radius: 5px;
            background:#66FCF1;
        }
    }

    .project-left{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0rem;
    margin-bottom: 5rem;

    @media(max-width: 768px){
        width: 100%;
        flex-direction:column-reverse;
        padding: 0;
        margin-bottom: 2.5rem;
    }

    .line{
            margin: 0;
            height: 3px;
            width: 200%;
            border-radius: 5px;
            background:#66FCF1;
            
        }

    .image{
        width: 50%;

        @media(max-width: 768px){
        width: 100%;
        margin-top: 2rem;
       }
        
        img{
            width: 80%;
            @media(max-width: 768px){
                width: 95%;
            }
        }
    }
    .description{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-left: 10rem;

        @media(max-width: 768px){
            width: 100%;
        padding: 0;
        align-items: center;
       }

        .project-title{
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            @media(max-width: 768px){
                  align-items: center;
                    }

            h1{
                font-size: 1.7rem;
                font-weight: normal;
                margin: 0;
                padding-bottom: 0.2rem;
                @media(max-width: 768px){
                    font-size: 1.5rem;
                   
                    }
            }
        }

        ul{
            list-style: none;
            display: flex;
            align-items: flex-end;
            margin: 0.5rem;
            margin-right: 0rem;
            @media(max-width: 768px){
                    margin: 0rem;
                    align-items: center;
                    padding:0;
                    }

            li{
                padding: 0.2rem 0.5rem ;
                background: #66fcf1;
                color: #1f2833;
                margin: 0.3rem;
                font-weight: bold;
                border-radius: 8px;

                @media(max-width: 768px){
                    font-size: .7rem;
                    padding: .1rem .3rem;
                   
                    }

                &:last-of-type{
                    margin-right: 0;
                }
            }
        }
        p{
            font-size: 1rem;
            text-align: right;

            @media(max-width: 768px){
                   text-align: left;
                    }

        }

        
        
        .live-button{
            margin-right: 2rem;
            
            

            @media(max-width: 768px){
                   padding:1rem;
                    }
        }
        
        button{
            background: transparent;
            border: none;
            cursor: pointer;
           
            

            a{
                color: #66fcf1;
                text-decoration:none;
                font-size:1rem;
                padding-right: 0.7rem;

                @media(max-width: 768px){
                   padding-right: .5rem;
                   margin-right: 0rem;
                    }
            }
            img{
                width: 17px;
            }
        }

    }


    
}
    .project-right{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5rem;
    @media(max-width: 768px){
        flex-direction: column;
        margin-bottom:3rem;
        width: 100%;
        margin-bottom: 2.5rem;
       }
    

    .line{
            margin: 0;
            height: 3px;
            width: 200%;
            border-radius: 5px;
            background:#66FCF1;
            
        }

    .image{
        width: 50%;
        text-align: center;
        @media(max-width: 768px){
            margin-top: 2rem;
        width: 100%;
       }
        
        
        
        img{
            width: 80%;
            @media(max-width: 768px){
        width: 95%;
       }
            
           

        }
    }
    .description{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 10rem;
        

        @media(max-width: 768px){
        padding: 0;
        width: 100%;
        align-items: center;
       }

        .project-title{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            
            @media(max-width: 768px){
                align-items: center;
                    
                    }


            h1{
                font-size: 1.7rem;
                font-weight: normal;
                margin: 0;
                padding-bottom: 0.2rem;

                @media(max-width: 768px){
                    font-size: 1.5rem;
                    
                    }
            }
        }

        ul{
            list-style: none;
            display: flex;
            align-items: flex-start;
            margin: 0.5rem;
            padding-left: 0;
            margin-left: 0rem;

            @media(max-width: 768px){
                    margin: 0.2rem;
                    }

            li{
                padding: 0.2rem 0.5rem ;
                background: #66fcf1;
                color: #1f2833;
                margin: 0.3rem;
                font-weight: bold;
                border-radius: 8px;

                @media(max-width: 768px){
                    font-size: .7rem;
                    padding: .1rem .3rem;
                   
                    }

                &:first-of-type{
                    margin-left: 0;
                }
            }
        }
        p{
            font-size: 1rem;
            text-align: left;

        }

        
        
        .live-button{
            padding-right: 2rem;

            @media(max-width: 768px){
                   padding:1rem;
                    }
        }
        
        button{
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
           
            

            a{
                color: #66fcf1;
                text-decoration:none;
                font-size:1rem;
                padding: 0;
                padding-right: 0.7rem;

                @media(max-width: 768px){
                   padding-right: .5rem;
                   margin-right: 0rem;
                    }
            }
            img{
                width: 17px;
            }
        }

    }

    


    
}
`
