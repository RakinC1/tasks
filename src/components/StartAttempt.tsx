import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgess, setInProgress] = useState<boolean>(false);

    function startQuiz() {
        setAttempts(attempts - 1);
        setInProgress(true);
    }

    function stopQuiz() {
        setInProgress(false);
    }
    function mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <p>Attempts: {attempts}</p>

            <Button onClick={startQuiz} disabled={inProgess || attempts === 0}>
                {" "}
                Start quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgess}>
                {" "}
                Stop quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgess}>
                Mulligan
            </Button>
        </div>
    );
}
