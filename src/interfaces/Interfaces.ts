export interface IHomeTeam {
  id: number;
  name: string;
  score: number | undefined;
}

export interface IGuestTeam {
  id: number;
  name: string;
  score: number | undefined;
}

export interface IRound {
  home: IHomeTeam;
  guest: IGuestTeam;
  matchId: number;
}

export interface ITeamProps {
  goalsScored: number;
  goalsConceded: number;
}

export interface ITeam {
  id: number;
  name: string;
  points: number;
  playedMatches: number;
  victories: number;
  defeats: number;
  draws: number;
  goalsScored: number;
  goalsConceded: number;
}

export interface ITeamsList {
  teams: ITeam[];
  setTeams: Function;
}