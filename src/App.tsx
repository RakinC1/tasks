import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from"./logo192.png";
function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
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
        </div>
        
    );
}

export default App;
