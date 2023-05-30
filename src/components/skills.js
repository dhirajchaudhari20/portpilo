import React from "react";
import styled from "styled-components/macro";
import bootstrap from "../img/bootstrap.svg";
import css from "../img/css.svg";
import figma from "../img/figma.svg";
import firebase from "../img/firebase.svg";
import javascript from "../img/javascript.svg";
import react from "../img/react.svg";
// import sass from "../img/sass.svg";
import html from "../img/html.svg";
import mongo from "../img/mongo.svg";
import express from "../img/express.svg";
import node from "../img/node.svg";
import solidity from "../img/solidity.svg";

import { motion } from "framer-motion";
import { popUp } from "./animation";
import { useScroll } from "./useScroll";
import { sliderContainer, lineAnim, scrollReveal } from "./animation";

const Skills = () => {
  const [element3, controls3] = useScroll();

  return (
    <StyledSkills
      id="skills"
      ref={element3}
      variants={scrollReveal}
      animate={controls3}
      initial="hidden"
    >
      <Container>
        <div className="title">
          <h1>Skills</h1>
          <motion.div variants={lineAnim} className="line"></motion.div>
        </div>
        <div className="details">
          <motion.ul variants={sliderContainer} className="skills-list">
            <motion.li variants={popUp} className="skill">
              <img src={html} alt="html" />
              <h4>HTML5</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={css} alt="css" />
              <h4>CSS3</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={javascript} alt="JavaScript" />
              <h4>JavScript</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={solidity} alt="sass" />
              <h4>Solidity</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={react} alt="react" />
              <h4>React</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={react} alt="firebase" />
              <h4>React Native</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={node} alt="firebase" />
              <h4>Node</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={express} alt="firebase" />
              <h4>ExpressJS</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={mongo} alt="firebase" />
              <h4>MongoDB</h4>
            </motion.li>

            <motion.li variants={popUp} className="skill">
              <img src={bootstrap} alt="Bootstrap" />
              <h4>Bootstrap</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={figma} alt="figma" />
              <h4>Figma</h4>
            </motion.li>
            <motion.li variants={popUp} className="skill">
              <img src={firebase} alt="firebase" />
              <h4>Firebase</h4>
            </motion.li>
          </motion.ul>
        </div>
      </Container>
    </StyledSkills>
  );
};

export default Skills;

const StyledSkills = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #66fcf1;
  padding: 15vh 0;
`;

const Container = styled.div`
  width: 80%;
  max-width: 1220px;
  display: flex;
  align-items: normal;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 95%;
  }

  .title {
    padding-bottom: 5rem;

    @media (max-width: 768px) {
      padding-bottom: 2rem;
    }

    h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .line {
      height: 5px;
      width: 40%;
      border-radius: 5px;
      background: #66fcf1;
    }
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 4rem;

    @media (max-width: 768px) {
      display: flex;
      flex-wrap: wrap;
    }
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
        width: 40%;
      }

      img {
        @media (max-width: 768px) {
          width: 50%;
        }
      }
    }
  }
`;
