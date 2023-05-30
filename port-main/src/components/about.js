import React from "react";
import styled from "styled-components";
import about from "../img/about.svg";
import { motion } from "framer-motion";
import { scrollReveal, scrollReveal1 } from "./animation";
import { useScroll } from "./useScroll";

const About = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledAbout id="about">
      <Container>
        <Details>
          <motion.div
            ref={element}
            variants={scrollReveal}
            animate={controls}
            className="description"
          >
            <div className="title">
              <h1>About</h1>
              <div className="line"></div>
            </div>
            <p>
              Hi, I am Dhiraj. I am a full-stack developer with over a year of
              experience in web development. I started my journey as a developer
              in 2021 and after that, I have worked at many companies as an
              intern, and gained experience along the way. I don't deﬁne myself
              by the work I have done but by the work I want to do. I prefer to
              keep learning, continue challenging myself, and do interesting
              stuﬀ that matter.
            </p>
          </motion.div>
          <motion.div
            ref={element2}
            variants={scrollReveal1}
            animate={controls2}
            className="image"
          >
            <img src={about} alt="about" />
          </motion.div>
        </Details>
      </Container>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled(motion.div)`
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

  .title {
    padding-bottom: 3rem;

    h1 {
      margin: 0;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .line {
      height: 5px;
      width: 80%;
      border-radius: 5px;
      background: #66fcf1;
    }
  }
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .description {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    p {
      margin: 0;
      font-size: 1.35rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
  .image {
    width: 50%;
    text-align: right;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      margin-top: 3rem;
    }

    img {
      width: 25%;

      @media (max-width: 768px) {
        width: 50%;
      }
    }
  }
`;
