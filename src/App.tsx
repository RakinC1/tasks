import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import img from"./logo192.png";
function App(): React.JSX.Element {
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
>>>>>>> upstream/task-state
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
<h1>Intro to Software Engineering</h1>
            <p>
                Hello World Mohammed Rakin Chowdhury Edit{" "}
                <code>src/App.tsx</code> and save. This page will automatically
                reload.
            </p>

            
                <img src={img} alt="This is the logo"/>
           
            <div>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                </ul>
            </div>
            <Button onClick={() => {console.log("Hello World!");}}>Log Hello World</Button>
            <div style={{width: "100px", height: "100px", backgroundColor: "red"}}></div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
        
    );
}

export default App;
