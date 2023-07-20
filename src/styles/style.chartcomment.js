import { styled } from "styled-components";

export const CommentContainer = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CommentWrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;

export const CommentboxButton = styled.button`
  width: 60px;
  height: 35px;
  font-size: 15px;
  background-color: #102e54;
  color: white;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    width: 65px;
    height: 40px;
    font-size: 17px;
  }
`;

export const CommentTextarea = styled.input`
  border: none;
  border-radius: 10px;
  width: 950px;
  height: 50px;
  margin-right: 30px;
  margin-left: 70px;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const CommentBox = styled.div`
  border: 3px solid #102e54;
  borderradius: 10px;
  font-weight: 300;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: white;
  max-width: 1100px;
  max-height: 300px;
  overflow: hidden;
  word-wrap: break-word;
`;

export const ChartContainer = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ChartWrapper = styled.div`
  max-width: 1200px;
  min-width: 800px;
`;
export const CommentTitle = styled.div`
  color: #503b3b;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
`;
export const ChartTitle = styled.div`
  color: #503b3b;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
`;

export const Board = styled.div`
  background-color: #f4f9dd;
`;
