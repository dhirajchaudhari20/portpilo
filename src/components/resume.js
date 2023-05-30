import React from "react";
import resume from "../img/resume.pdf";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledResume>
      <Container>
        <h1>Resume</h1>
        <a href={resume} download>
          <button>Download Resume</button>
        </a>
        <iframe
          src={resume}
          width="100%"
          height="1200px"
          title="resume"
        ></iframe>
      </Container>
    </StyledResume>
  );
};

export default Resume;

const StyledResume = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #66fcf1;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 7rem;
  }
`;

const Container = styled.div`
  width: 80%;
  max-width: 1220px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  a {
    button {
      background: #66fcf1;

      padding: 0.5rem;
      font-size: 1.3rem;
      border-radius: 3px;
      border: none;
      margin-right: 1rem;
      cursor: pointer;
      transition: all 0.5s ease;
      box-sizing: border-box;
      color: #1f2833;

      &:hover {
        background: #1f2833;
        outline: 2px solid #66fcf1;
        transition: all 0.5s ease;
        color: #66fcf1;
      }
    }

    margin-bottom: 1rem;
  }
`;
