import React, { useEffect } from "react";
import styled from "styled-components";
import programmer from "../img/programmer.svg";
import { Link } from "react-scroll";
import { Link as Link1 } from "react-router-dom";

const Home = () => {
  function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABSDEFGHIJKLMNOPQRSTUVWXYZ01";

    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  useEffect(() => {
    let item = document.querySelector(".name");
    let name = item.innerText;
    let name1 = name;

    let array = name1.split("");

    const changeArray = (array) => {
      for (let i = 0; i < array.length; i++) {
        array[i] = generateRandomLetter();
      }

      return array;
    };

    const setName = setInterval(() => {
      let newArray = changeArray(array);
      let name2 = newArray.join("");
      //console.log(name2);
      item.innerText = name2;
    }, 500);

    setTimeout(() => {
      clearInterval(setName);

      item.innerText = name1;
    }, 2000);
  }, []);

  useEffect(() => {
    let jobArray = [
      "Programmer",
      "Front-end developer",
      "Back-end developer",
      "Blockchain developer",
    ];
    let item = document.querySelector(".job");
    let name = item.innerText;
    let name1 = name;

    let array = name1.split("");

    const changeArray = (array) => {
      for (let i = 0; i < array.length; i++) {
        array[i] = generateRandomLetter();
      }

      return array;
    };

    let i = 0;

    const setName = () => {
      const change = setInterval(() => {
        let newArray = changeArray(array);
        let name2 = newArray.join("");
        //console.log(name2);
        item.innerText = name2;
      }, 300);

      setTimeout(() => {
        clearInterval(change);
        item.innerText = jobArray[i];
        i = (i + 1) % 4;
      }, 1500);
    };

    // const out = () => {
    //   clearInterval(hii);
    // };

    setInterval(() => {
      setName();
    }, 4000);

    const change = setInterval(() => {
      let newArray = changeArray(array);
      let name2 = newArray.join("");
      //console.log(name2);
      item.innerText = name2;
    }, 300);

    setTimeout(() => {
      clearInterval(change);
      item.innerText = jobArray[i];
      i = (i + 1) % 4;
    }, 1500);
  }, []);

  return (
    <StyledHome id="home">
      <Container className="container">
        <div className="description">
          <h1>Hey,</h1>
          <h2>
            I am <span className="name">Dhiraj</span>
          </h2>
          <h2>
            A <span className="job">Programmer</span>
          </h2>
          <h3>
            Who can help you build websites that will fly as high as a Rocket.
          </h3>
          <div className="buttons">
            <Link to="projects" smooth={true} duration={400}>
              <button className="work">My Works</button>
            </Link>
            <Link1 to="/resume">
              {" "}
              <button className="resume">Resume</button>
            </Link1>
          </div>
        </div>
        <div className="image">
          <img src={programmer} alt="programmer" />
        </div>
      </Container>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #66fcf1;
  padding: 15vh 0;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  width: 80%;
  max-width: 1220px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
  }

  .description {
    padding-right: 10rem;

    @media (max-width: 768px) {
      padding: 0;
    }

    h1 {
      margin: 0;
      font-size: 1.2rem;
      font-weight: normal;
      padding: 0.5rem 0;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    h2 {
      margin: 0;
      font-size: 2.3rem;
      font-weight: bold;
      padding: 0rem 0;

      @media (max-width: 768px) {
        font-size: 1.7rem;
      }
    }
    h3 {
      margin: 0;
      font-size: 1rem;
      opacity: 0.9;
      font-weight: normal;
      padding: 0.3rem 0;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
    .buttons {
      margin-top: 3rem;

      @media (max-width: 768px) {
        margin-top: 1.5rem;
      }
      .work {
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

        @media (max-width: 768px) {
          font-size: 1rem;
          padding: 0.4rem;
          margin-right: 0.5rem;
        }

        &:hover {
          background: #1f2833;
          outline: 2px solid #66fcf1;
          transition: all 0.5s ease;
          color: #66fcf1;
        }
      }
      .resume {
        background: #1f2833;
        border: 2px solid #66fcf1;
        color: #66fcf1;

        padding: 0.5rem;
        font-size: 1.3rem;
        border-radius: 3px;

        margin-right: 1rem;
        cursor: pointer;
        transition: all 0.5s ease;

        @media (max-width: 768px) {
          font-size: 1rem;
          padding: 0.4rem;
          margin-right: 0.5rem;
        }

        &:hover {
          background: #66fcf1;
          transition: all 0.5s ease;
          color: #1f2833;
        }
      }
    }
  }

  .image {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      width: 90%;
      margin-top: 3rem;
    }
  }

  .image img {
    width: 70%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
