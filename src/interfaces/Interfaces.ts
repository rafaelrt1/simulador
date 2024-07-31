export interface IHomeTeam {
  id: number;
  name: string;
  score: number | undefined;
  conmebolRankingPositioning: number;
}

export interface IGuestTeam {
  id: number;
  name: string;
  score: number | undefined;
  conmebolRankingPositioning: number;
}

export interface IRound {
  home: IHomeTeam;
  played: boolean;
  guest: IGuestTeam;
  matchId: number;
}

export interface ITeamProps {
  goalsScored: number;
  goalsConceded: number;
  goalsScoredAsGuest: number;
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
  conmebolRankingPositioning: number;
  goalsScoredAsGuest: number
}

export interface ITeamsList {
  teams: ITeam[];
  setTeams: Function;
}