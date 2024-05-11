import React from "react";
import { TableData, TableH, TableHead, TableRow, TableStyle } from "./TableCSS";
import { ITeamsList } from "../../interfaces/Interfaces";

const Table: React.FC<ITeamsList> = ({ teams }) => {
  return (
    <TableStyle>
      <TableHead>
        <TableRow>
          <TableH>Classificação</TableH>
          <TableH>P</TableH>
          <TableH>J</TableH>
          <TableH>V</TableH>
          <TableH>E</TableH>
          <TableH>D</TableH>
          <TableH>GP</TableH>
          <TableH>GC</TableH>
          <TableH>SG</TableH>
        </TableRow>
      </TableHead>
      <tbody>
        {teams.map((team, index) => {
          return (
            <TableRow key={index}>
              <TableData>{team.name}</TableData>
              <TableData>{team.points}</TableData>
              <TableData>{team.playedMatches}</TableData>
              <TableData>{team.victories}</TableData>
              <TableData>{team.draws}</TableData>
              <TableData>{team.defeats}</TableData>
              <TableData>{team.goalsScored}</TableData>
              <TableData>{team.goalsConceded}</TableData>
              <TableData>{team.goalsScored - team.goalsConceded}</TableData>
            </TableRow>
          );
        })}
      </tbody>
    </TableStyle>
  );
};

export { Table };