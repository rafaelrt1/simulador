import { IRound } from "../interfaces/Interfaces";

const allRounds: IRound[] = [
  {
    matchId: 1,
    played: true,
    home: {
      id: 1,
      name: "The Strongest",
      score: 2,
      conmebolRankingPositioning: 38
    },
    guest: {
      id: 2,
      name: "Grêmio",
      score: 0,
      conmebolRankingPositioning: 7
    },
  },
  {
    matchId: 2,
    played: true,
    home: {
      id: 3,
      name: "Huachipato",
      score: 1,
      conmebolRankingPositioning: 105
    },
    guest: {
      id: 4,
      name: "Estudiantes",
      score: 1,
      conmebolRankingPositioning: 23
    },
  },
  {
    matchId: 3,
    played: true,
    home: {
      id: 2,
      name: "Grêmio",
      score: 0,
      conmebolRankingPositioning: 7
    },
    guest: {
      id: 3,
      name: "Huachipato",
      score: 2,
      conmebolRankingPositioning: 105
    },
  },
  {
    matchId: 4,
    played: true,
    home: {
      id: 4,
      name: "Estudiantes",
      score: 2,
      conmebolRankingPositioning: 23
    },
    guest: {
      id: 1,
      name: "The Strongest",
      score: 1,
      conmebolRankingPositioning: 38
    },
  },
  {
    matchId: 5,
    played: true,
    home: {
      id: 4,
      name: "Estudiantes",
      score: 0,
      conmebolRankingPositioning: 23
    },
    guest: {
      id: 2,
      name: "Grêmio",
      score: 1,
      conmebolRankingPositioning: 7
    },
  },
  {
    matchId: 6,
    played: true,
    home: {
      id: 3,
      name: "Huachipato",
      score: 0,
      conmebolRankingPositioning: 105
    },
    guest: {
      id: 1,
      name: "The Strongest",
      score: 0,
      conmebolRankingPositioning: 38
    },
  },
  {
    matchId: 7,
    played: true,
    home: {
      id: 3,
      name: "Huachipato",
      score: 0,
      conmebolRankingPositioning: 105
    },
    guest: {
      id: 2,
      name: "Grêmio",
      score: 1,
      conmebolRankingPositioning: 7
    },
  },
  {
    matchId: 8,
    played: true,
    home: {
      id: 1,
      name: "The Strongest",
      score: 1,
      conmebolRankingPositioning: 38
    },
    guest: {
      id: 4,
      name: "Estudiantes",
      score: 0,
      conmebolRankingPositioning: 23
    },
  },
  {
    matchId: 9,
    played: false,
    home: {
      id: 2,
      name: "Grêmio",
      score: undefined,
      conmebolRankingPositioning: 7
    },
    guest: {
      id: 4,
      name: "Estudiantes",
      score: undefined,
      conmebolRankingPositioning: 23
    },
  },
  {
    matchId: 10,
    played: true,
    home: {
      id: 1,
      name: "The Strongest",
      score: 4,
      conmebolRankingPositioning: 38
    },
    guest: {
      id: 3,
      name: "Huachipato",
      score: 0,
      conmebolRankingPositioning: 105
    },
  },
  {
    matchId: 11,
    played: true,
    home: {
      id: 2,
      name: "Grêmio",
      score: 4,
      conmebolRankingPositioning: 7
    },
    guest: {
      id: 1,
      name: "The Strongest",
      score: 0,
      conmebolRankingPositioning: 38
    },
  },
  {
    matchId: 12,
    played: true,
    home: {
      id: 4,
      name: "Estudiantes",
      score: 3,
      conmebolRankingPositioning: 23
    },
    guest: {
      id: 3,
      name: "Huachipato",
      score: 4,
      conmebolRankingPositioning: 105
    },
  },
];

export { allRounds };