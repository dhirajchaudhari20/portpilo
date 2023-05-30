import React from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import gmail from "../img/gmail1.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  const showCopy = () => {
    const item = document.querySelector(".copy");
    console.log(item);
    item.style.display = "block";
  };
  const notShowCopy = () => {
    const item = document.querySelector(".copy");
    console.log(item);
    item.style.display = "none";
  };

  const history = useHistory();

  const goThank = (e) => {
    e.preventDefault();
    history.push("/thank");
  };

  return (
    <StyledContact id="contact">
      <Caontainer>
        <div className="title">
          <h1>Contact</h1>
          <div className="line"></div>
        </div>
        <Details>
          <div className="heading">
            <h4>Feel free to drop a message.</h4>
          </div>

          <form
            action="https://formsubmit.co/dhirajsubudhi540@gmail.com"
            method="POST"
          >
            <Name>
              <div className="name">
                <h5>Name:</h5>
                <input type="text" name="name" required />
              </div>
              <div className="email">
                <h5>Email Address:</h5>
                <input type="email" name="email" required />
              </div>
            </Name>
            <Message>
              <div className="msg">
                <h5>Message:</h5>
                <textarea name="message" id="message"></textarea>
              </div>
              <div className="submit">
                <button onSubmit={(e) => goThank(e)} type="submit">
                  Submit
                </button>
              </div>
            </Message>
            <Icon>
              <a
                href="https://github.com/DHIRAJ540"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhiraj-subudhi-850365194/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <div className="gmail">
                <CopyToClipboard text="dhirajsubudhi540@gmail.com">
                  <img
                    onMouseEnter={showCopy}
                    onMouseLeave={notShowCopy}
                    src={gmail}
                    alt="gmail"
                  />
                </CopyToClipboard>
                <CopyToClipboard text="dhirajsubudhi540@gmail.com">
                  <p onMouseEnter={showCopy} onMouseLeave={notShowCopy}>
                    Dhirajsubudhi540@gmail.com
                  </p>
                </CopyToClipboard>
              </div>
            </Icon>
            <p className="copy">Click to copy</p>
            <input
              type="hidden"
              name="_next"
              value="https://devdhiraj.netlify.app/thank"
            />
            <input type="hidden" name="_captcha" value="false"></input>
          </form>
        </Details>
      </Caontainer>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #66fcf1;
  padding: 15vh 0;
`;

const Caontainer = styled.div`
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
    padding-bottom: 1.5rem;

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
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  h4 {
    font-size: 2rem;
    font-weight: normal;
  }

  .copy {
    text-align: right;
    display: none;
    transition: display 01s ease;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .name {
    width: 100%;
    padding-right: 2rem;
    @media (max-width: 768px) {
      padding: 0;
    }

    h5 {
      font-size: 1.2rem;
      font-weight: normal;
    }

    input {
      width: 100%;
      height: 2rem;
      background: rgba(57, 138, 132, 0.4);
      border: none;
      border-radius: 5px;
      color: #66fcf1;
      font-size: 1.5rem;
      padding: 0.5rem;

      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }
  .email {
    width: 100%;
    padding-left: 2rem;

    @media (max-width: 768px) {
      padding: 0;
    }

    h5 {
      font-size: 1.2rem;
      font-weight: normal;
    }
    input {
      width: 100%;

      height: 2rem;
      background: rgba(57, 138, 132, 0.4);
      border: none;
      border-radius: 5px;
      color: #66fcf1;
      font-size: 1.5rem;
      padding: 0.5rem;

      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }
`;
const Message = styled.div`
  width: 100%;

  h5 {
    font-size: 1.2rem;
    font-weight: normal;
  }

  textarea {
    width: 100%;
    height: 4rem;
    background: rgba(57, 138, 132, 0.4);
    border: none;
    border-radius: 5px;
    color: #66fcf1;
    font-size: 1.5rem;
    padding: 0.5rem;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  button {
    margin-top: 1.5rem;
    background: #66fcf1;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    border-radius: 5px;
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
      background: #1f2833;
      outline: 2px solid #66fcf1;
      color: #66fcf1;
      transition: all 0.5s ease;
    }
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: normal;
  }

  img {
    width: 75px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 50px;
    }
  }

  .gmail {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      align-items: normal;
    }

    p {
      font-size: 1.5rem;
      margin: 0;
      margin-left: 1rem;
      position: relative;
      top: 18px;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
`;
