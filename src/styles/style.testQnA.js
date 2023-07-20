import { styled } from "styled-components";

const BodyColor = styled.div`
  background-color: #f4f9dd;
  height: 100%;
`;

const TestLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 1040px;
`;

const progressBarLayout = styled.div`
  padding: 70px;
  margin-bottom: 30px;
`;

const PageContainer = styled.div`
  text-align: center;
  background-color: #e5d3a9;
  font-size: 25px;
  font-weight: 600;
  padding-top: 40px;
  color: #f0f0f0;
`;

const QuestionBox = styled.pre`
  background-color: #e5d3a9;
  padding: 45px;
  padding-bottom: 70px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #503b3b;
`;

const AnswerContainer = styled.div`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const AnswerBox = styled.div`
  cursor: pointer;
  border: 2px solid #102e54;
  border-radius: 30px;
  padding: 30px;
  margin: 30px;
  background-color: #ffffff;
  font-size: 20px;
  width: 800px;
  text-align: center;

  &:hover {
    background-color: #102e54;
    color: #ffffff;
  }
`;

const ResultLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  height: 100%;
  text-align: center;
`;

const ResultBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ResultLabel = styled.div`
  color: #503b3b;
  font-size: 50px;
  font-weight: 600;
`;

const ResultButton = styled.button`
  cursor: pointer;
  border: 2px solid #102e54;
  border-radius: 30px;
  padding: 20px;
  margin: 30px;
  width: 280px;
  background-color: #102e54;
  color: #ffff;
  font-size: 30px;

  &:hover {
    background-color: #ffffff;
    color: #102e54;
    border: 2px solid #102e54;
    transition-duration: 0.5s;
  }
`;

export {
  BodyColor,
  TestLayout,
  progressBarLayout,
  PageContainer,
  QuestionBox,
  AnswerContainer,
  AnswerBox,
  ResultLayout,
  ResultBox,
  ResultLabel,
  ResultButton,
};
