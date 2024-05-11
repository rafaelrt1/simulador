import styled from "styled-components";

const Input = styled.input`
  width: 20px;
  height: 20px;
  font-size: 18px;
  text-align: center;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

const TeamName = styled.span`
  font-size: 20px;
  margin: 0 5px;
  width: 150px;
`;

const Text = styled.span`
  font-size: 20px;
  margin: 0 5px;
`;

const DivMatch = styled.p`
  display: flex;
  align-items: normal;

  & > span:first-child {
    text-align: right;
  }

  & > span:last-child {
    text-align: left;
  }
`;

export { Input, TeamName, DivMatch, Text };