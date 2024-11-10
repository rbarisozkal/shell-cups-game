"use client";
import { useShuffleGame } from "@/app/hooks/useShuffleGame";
import GameBoard from "@/app/components/GameBoard";
import StartResetButton from "@/app/components/StartResetButton";

export default function Home() {
    const {
        isGameStarted,
        isSuccess,
        cups,
        ballPosition,
        makeBallVisible,
        handleStartReset,
        handleCupSelection
    } = useShuffleGame({numberOfCups:5});
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8">
            <StartResetButton isGameStarted={isGameStarted} triggerGame={handleStartReset} />
            <div className={`font-bold text-2xl ${isSuccess ? "text-green-500" : "text-blue-900"}`}>
                {isSuccess ? "Success!" : "Find the cup!"}
            </div>
            <GameBoard
                cups={cups}
                ballPosition={ballPosition}
                makeBallVisible={makeBallVisible}
                handleCupSelection={handleCupSelection}
            />
            {isSuccess === false && (
                <div className="font-bold text-2xl text-red-600">Failed. Try Again.</div>
            )}
        </div>
    );
}
