import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🐰" | "🎏";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    const nextAlphabet: Record<Holiday, Holiday> = {
        "🎃": "🎄",
        "🎄": "🎆",
        "🎆": "🐰",
        "🐰": "🎏",
        "🎏": "🎃",
    };

    const nextYear: Record<Holiday, Holiday> = {
        "🐰": "🎏",
        "🎏": "🎃",
        "🎃": "🎄",
        "🎄": "🎆",
        "🎆": "🐰",
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>

            <Button
                onClick={() => {
                    setHoliday(nextAlphabet[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextYear[holiday]);
                }}
            >
                Advance by year
            </Button>
        </div>
    );
}
