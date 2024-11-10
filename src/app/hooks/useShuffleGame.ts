import { useState } from "react";
import { getRandomCupIndices } from "@/app/utils/getRandomCupIndices";
import { shuffleCups } from "@/app/utils/shuffleCups";
interface useShuffleGameProps{
    numberOfCups : number
}
export function useShuffleGame({numberOfCups}:useShuffleGameProps) {
    const [isGameStarted, setGameStarted] = useState(false);
    const cupsArray = Array.from({ length: numberOfCups }, (_, i) => i);
    const [cups, setCups] = useState(cupsArray);
    const [ballPosition, setBallPosition] = useState<number | null>(null);
    const [makeBallVisible, setMakeBallVisible] = useState(false);
    const [isSelectionEnabled, setSelectionEnabled] = useState(false);
    const [isSuccess, setSuccess] = useState<boolean|null>(null);

    const handleStartReset = () => {
        if (isGameStarted) resetGame();
        else startGame();
    };

    const startGame = () => {
        setGameStarted(true);
        setSuccess(null);
        const randomCup = Math.floor(Math.random() * numberOfCups);
        setBallPosition(randomCup);
        setMakeBallVisible(true);

        setTimeout(() => {
            setMakeBallVisible(false);
            shuffleCups(setCups, setSelectionEnabled, getRandomCupIndices, numberOfCups);
        }, 2000);
    };


    const resetGame = () => {
        setGameStarted(false);
        setCups(cupsArray);
        setBallPosition(null);
        setMakeBallVisible(false);
        setSelectionEnabled(false);
        setSuccess(null);
    };

    const handleCupSelection = (index: number) => {
        if (isSelectionEnabled) {
            setSelectionEnabled(false);
            if (index === ballPosition) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        }
    };

    return {
        isGameStarted,
        cups,
        ballPosition,
        makeBallVisible,
        isSuccess,
        handleStartReset,
        handleCupSelection,
    };
}