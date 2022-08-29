import styled from "styled-components";
import Colors from "../../Utils/colors";

export const RegisterStyleCont = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Erie_Black};
  width: 100%;
  height: 100vh;
  padding-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterStyleContJr = styled.div`
  box-sizing: border-box;
  background-color: ${Colors.Green_Nigth};
  width: 75%;
  height: 80%;
  font-family: "New Rocker", cursive;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & .UpSection {
    height: 25%;
    width: 100%;
    text-align: center;
    color: ${Colors.Green_Light};

    & h1 {
      font-family: "New Rocker", cursive;
      margin: 25px;
      font-size: 8rem;
    }

    & p {
      font-family: "RocknRoll One", sans-serif;
      margin: 0px;
      font-size: 3rem;

      & a {
        text-decoration: none;
        color: ${Colors.Blue_life};
      }
    }
  }

  & .DownSection {
    font-family: "RocknRoll One", sans-serif;
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-around;
    padding-top: 70px;
    font-size: 2rem;

    & .Left {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      & h2 {
        width: 80%;
        text-align: center;
        margin: 4% 0px;
        color: ${Colors.Green_Light};
      }

      & .Butons {
        margin: 25px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        & button {
          font-family: "RocknRoll One", sans-serif;
          margin: 8px 0px;
          width: 75%;
          height: 60px;
          background-color: #394b6e;
          border-radius: 10px;
          display: flex;
          align-items: center;

          & img {
            width: 40px;
            height: 40px;
          }

          & p {
            font-size: 2rem;
            margin: 0px auto;
            color: ${Colors.Platinum};
          }
        }
      }
    }

    & .Rigth {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      & h2 {
        width: 85%;
        text-align: center;
        margin: 4% 0px;
        color: ${Colors.Green_Light};
      }

      & .Inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & input {
          font-family: "RocknRoll One", sans-serif;
          width: 60%;
          font-size: 1.8rem;
          margin-top: 7%;
          background-color: transparent;
          border: none;
          border-bottom: 4px solid ${Colors.Blue_life};
          outline: none;
          color: ${Colors.Platinum};
          outline: none;
          padding-left: 15px;
        }

        & p {
          color: ${Colors.Green_Light};
          margin: 4px 0px 0px 35%;
          font-size: 1rem;
        }
      }

      & button {
        background-color: ${Colors.Green_Light};
        margin-top: 4%;
        font-family: "New Rocker", cursive;
        width: 45%;
        height: 60px;
        color: ${Colors.Erie_Black};
        border-radius: 10px;
        font-size: 3rem;
        cursor: pointer;
      }
    }
  }
`;
