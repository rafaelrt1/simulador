import { useState } from "react";
import "./App.css";
import { Table } from "./components/table/Table";
import { Matches } from "./components/matches/Matches";
import { Container } from "./components/container/Container";
import { ITeam } from "./interfaces/Interfaces";
import { teamsInitialState } from "./constants/TeamsInitialState";

function App() {
    const [teams, setTeams] = useState<ITeam[]>(teamsInitialState);

    return (
        <div className="App">
        <Container>
            <Table teams={teams} setTeams={setTeams}/>
            <Matches teams={teams} setTeams={setTeams}/>
        </Container>
        </div>
    );
}

export default App;