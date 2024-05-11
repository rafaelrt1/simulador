import styled from "styled-components";

const TableStyle = styled.table`
  margin-top: 50px;
`;

const TableHead = styled.thead`
  top: 2px;
  position: relative;
  font-size: 20px;

  & > tr:first-child {
    border-top: 2px solid black;
  }
`;

const TableH = styled.th`
  min-width: 40px;
  min-height: 40px;
  padding: 3px;
  width: 100%;
  font-size: 20px;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

const TableData = styled.td`
  min-width: 40px;
  min-height: 40px;
  padding: 3px;
  width: 100%;
  font-size: 20px;

  &:last-child {
    text-align: right;
  }

  &:first-child {
    text-align: left;
    padding: 3px;
    width: 100%;
  }
`;

const TableRow = styled.tr`
  border: 1px solid black;
  display: table;
  width: 100%;
  border-right: 2px solid black;
  border-left: 2px solid black;

  &:nth-child(1), &:nth-child(2) {
    > td:first-child {
    }
  }

  &:nth-child(3) {
    > td:first-child {
    }
  }

  &:nth-child(n + 2) {
    border-top: 0;
  }

  &:last-child {
    border-bottom: 2px solid black;

    > td:first-child {
    }
  }
`;

export { TableStyle, TableHead, TableH, TableData, TableRow };