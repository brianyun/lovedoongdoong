import styled from "styled-components";

export const RowsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
`;

export const GoodBadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props.width ? props.width : 48)}%;
  height: 100%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#f8df6e, #fff);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WidthImg = styled.img`
  display: block;
  margin: 0;
  max-width: 100%;
  min-width: 100%;
  height: auto;
`;

export const Texty = styled.p`
  font-family: "NanumSquareRound", "Godo", Arial;

  text-align: center;
  display: block;
  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  font-size: ${(props) => (props.font ? props.font : 0)}px;
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const Paragraphy = styled.p`
  font-family: "NanumSquareRound", "Godo", Arial;

  text-align: center;
  display: block;
  white-space: pre-line;
  width: 90%;
  margin: 0 5%;

  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  font-size: ${(props) => (props.font ? props.font : 0)}px;
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const LineBreakText = styled.p`
  font-family: "NanumPen", "NanumSquareRound", "Godo", Arial;
  width: 100%;
  height: auto;
  text-align: center;

  word-break: break-word;
  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  font-size: ${(props) => (props.font ? props.font : 0)}px;
  color: ${(props) => (props.color ? props.color : "#333333")};
`;

export const GoodBadBtn = styled.button`
  font-family: "NanumSquareRound", "Godo", Arial;

  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const ActionBtn = styled.button`
  font-family: "NanumSquareRound", "Godo", Arial;
  background: #eeeeee !important;
  color: #000000 !important;
  border: none;
  border-radius: 3px;
  display: block;
  width: 60vw;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: #f66a70 !important;
      color: #ffffff !important;
    }
  }
`;

export const IconBtn = styled.button`
  width: 20vw;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  background-color: #fff;
  outline: none;
`;
