import React from "react";
import { DivMatch, Input, TeamName, Text } from "./MatchesCSS";
import {
  IRound,
  ITeam,
  ITeamProps,
  ITeamsList,
} from "../../interfaces/Interfaces";
import { allRounds } from "../../constants/Rounds";

const Matches: React.FC<ITeamsList> = ({ teams, setTeams }) => {
  const rounds:IRound[] =  allRounds;

  const sortTeams = (cpTeams: ITeam[]): ITeam[] => {
    const sortedTeams: ITeam[] = cpTeams.sort((a, b) => {
      const points = a.points === b.points ? 0 : a.points > b.points ? -1 : 1;
      const goalsDifference =
        a.goalsScored - a.goalsConceded === b.goalsScored - b.goalsConceded
          ? 0
          : a.goalsScored - a.goalsConceded > b.goalsScored - b.goalsConceded
          ? -1
          : 1;
      const goalsScored =
        a.goalsScored === b.goalsScored
          ? 0
          : a.goalsScored > b.goalsScored
          ? -1
          : 1;

      return points || goalsDifference || goalsScored;
    });
    return sortedTeams;
  };

  const modifyClassification = (match: IRound, changedTeamIsHomeOrGuest: "home" | "guest", opponentOfChangedTeamIsHomeOrGuest: "home" | "guest", selectedTeamScore: number, opponentScore: number) => {
    if ((!isNaN(selectedTeamScore) && !isNaN(opponentScore)) || (isNaN(selectedTeamScore) && isNaN(opponentScore))) {
      const cpTeams = [...teams];
      let selectedTeamData: ITeamProps[] = [];
      let selectedTeamOpponentData: ITeamProps[] = [];
      let selectedTeamGoalsScored = 0;
      let selectedTeamGoalsConceded = 0;
      let selectedTeamVictories = 0;
      let selectedTeamDefeats = 0;
      let selectedTeamDraws = 0;

      let selectedTeamOpponentGoalsScored = 0;
      let selectedTeamOpponentGoalsConceded = 0;
      let selectedTeamOpponentVictories = 0;
      let selectedTeamOpponentDefeats = 0;
      let selectedTeamOpponentDraws = 0;

      const allChangedTeamMatches = rounds.filter((m) => {
        return (
          match[changedTeamIsHomeOrGuest].id === m.home.id ||
          match[changedTeamIsHomeOrGuest].id === m.guest.id ||
          match[changedTeamIsHomeOrGuest].id === m.guest.id ||
          match[changedTeamIsHomeOrGuest].id === m.home.id
        );
      });

      const allOpponentTeamMatches = rounds.filter((m) => {
        return (
          match[opponentOfChangedTeamIsHomeOrGuest].id === m.home.id ||
          match[opponentOfChangedTeamIsHomeOrGuest].id === m.guest.id ||
          match[opponentOfChangedTeamIsHomeOrGuest].id === m.guest.id ||
          match[opponentOfChangedTeamIsHomeOrGuest].id === m.home.id
        );
      });

      const allChangedTeamPlayedMatches = allChangedTeamMatches.filter((m) => {
        return m.home.score !== undefined;
      });
      const allOpponentTeamPlayedMatches = allOpponentTeamMatches.filter(
        (m) => {
          return m.home.score !== undefined;
        }
      );

      allChangedTeamPlayedMatches.forEach((playedMatch) => {
        if (match[changedTeamIsHomeOrGuest].id === playedMatch.home.id) {
          if (
            isNaN(Number(playedMatch.home.score)) &&
            isNaN(Number(playedMatch.guest.score))
          ) {
            return;
          }
          selectedTeamData.push({
            goalsScored: Number(playedMatch.home.score),
            goalsConceded: Number(playedMatch.guest.score),
          });
        } else {
          if (
            isNaN(Number(playedMatch.home.score)) &&
            isNaN(Number(playedMatch.guest.score))
          ) {
            return;
          }
          selectedTeamData.push({
            goalsScored: Number(playedMatch.guest.score),
            goalsConceded: Number(playedMatch.home.score),
          });
        }
      });

      allOpponentTeamPlayedMatches.forEach((playedMatch) => {
        if (match[opponentOfChangedTeamIsHomeOrGuest].id === playedMatch.guest.id) {
          if (
            isNaN(Number(playedMatch.home.score)) &&
            isNaN(Number(playedMatch.guest.score))
          ) {
            return;
          }
          selectedTeamOpponentData.push({
            goalsScored: Number(playedMatch.guest.score),
            goalsConceded: Number(playedMatch.home.score),
          });
        } else {
          if (
            isNaN(Number(playedMatch.home.score)) &&
            isNaN(Number(playedMatch.guest.score))
          ) {
            return;
          }
          selectedTeamOpponentData.push({
            goalsScored: Number(playedMatch.home.score),
            goalsConceded: Number(playedMatch.guest.score),
          });
        }
      });

      selectedTeamData.forEach((team) => {
        selectedTeamGoalsScored += team.goalsScored;
        selectedTeamGoalsConceded += team.goalsConceded;
        team.goalsScored > team.goalsConceded
          ? (selectedTeamVictories += 1)
          : team.goalsScored < team.goalsConceded
          ? (selectedTeamDefeats += 1)
          : (selectedTeamDraws += 1);
      });
      const selectedTeamPoints = selectedTeamVictories * 3 + selectedTeamDraws;

      selectedTeamOpponentData.forEach((team) => {
        selectedTeamOpponentGoalsScored += team.goalsScored;
        selectedTeamOpponentGoalsConceded += team.goalsConceded;
        team.goalsScored > team.goalsConceded
          ? (selectedTeamOpponentVictories += 1)
          : team.goalsScored < team.goalsConceded
          ? (selectedTeamOpponentDefeats += 1)
          : (selectedTeamOpponentDraws += 1);
      });
      const selectedTeamOpponentPoints =
        selectedTeamOpponentVictories * 3 + selectedTeamOpponentDraws;

      const teamsListWithoutChangedTeams = cpTeams.filter((team) => {
        return (
          team.id !== match[changedTeamIsHomeOrGuest].id &&
          team.id !== match[opponentOfChangedTeamIsHomeOrGuest].id
        );
      });

      const teamsListAddingChangedTeams = teamsListWithoutChangedTeams;

      teamsListAddingChangedTeams.push(
        {
          id: match[changedTeamIsHomeOrGuest].id,
          name: match[changedTeamIsHomeOrGuest].name,
          points: selectedTeamPoints,
          playedMatches: selectedTeamData.length,
          victories: selectedTeamVictories,
          defeats: selectedTeamDefeats,
          draws: selectedTeamDraws,
          goalsScored: selectedTeamGoalsScored,
          goalsConceded: selectedTeamGoalsConceded,
        },
        {
          id: match[opponentOfChangedTeamIsHomeOrGuest].id,
          name: match[opponentOfChangedTeamIsHomeOrGuest].name,
          points: selectedTeamOpponentPoints,
          playedMatches: selectedTeamOpponentData.length,
          victories: selectedTeamOpponentVictories,
          defeats: selectedTeamOpponentDefeats,
          draws: selectedTeamOpponentDraws,
          goalsScored: selectedTeamOpponentGoalsScored,
          goalsConceded: selectedTeamOpponentGoalsConceded,
        }
      );
      const sortedTeams = sortTeams(teamsListAddingChangedTeams);
      setTeams(sortedTeams);
    }
  };

  const handleChangeScore = (event: React.ChangeEvent<HTMLInputElement>, match: IRound, homeOrGuest: "home" | "guest") => {
    const changedTeamIsHomeOrGuest = homeOrGuest;
    const opponentOfChangedTeamIsHomeOrGuest = homeOrGuest === "home" ? "guest" : "home";
    let cpMatch = { ...rounds[match.matchId - 1] };
    cpMatch[changedTeamIsHomeOrGuest].score = parseInt(event.target.value);
    const selectedTeamScore = Number(cpMatch[changedTeamIsHomeOrGuest].score);
    const opponentScore = Number(cpMatch[opponentOfChangedTeamIsHomeOrGuest].score);
    modifyClassification(match, changedTeamIsHomeOrGuest, opponentOfChangedTeamIsHomeOrGuest, selectedTeamScore, opponentScore);
  };

  return (
    <div>
      {rounds.map((match, index) => {
        return (
          <DivMatch key={index}>
            <TeamName>{match.home.name}</TeamName>
            <Input
              type="number"
              defaultValue={match.home?.score}
              onChange={(e) => {
                handleChangeScore(e, match, "home");
              }}
            ></Input>
            <Text>x</Text>
            <Input
              type="number"
              defaultValue={match.guest?.score}
              onChange={(e) => {
                handleChangeScore(e, match, "guest");
              }}
            ></Input>
            <TeamName> {match.guest.name}</TeamName>
          </DivMatch>
        );
      })}
    </div>
  );
};

export { Matches };