import React from "react";
import Cup from "./Cup";
import {getCupMotion} from "@/app/utils/getCupMotion";

interface GameBoardProps {
    cups: number[];
    ballPosition: number | null;
    makeBallVisible: boolean;
    handleCupSelection: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cups, ballPosition, makeBallVisible, handleCupSelection }) => {
    return (
        <div id="game-board" className="w-full relative flex items-center justify-center mt-8 mb-12">
            {cups.map((cup, index) => (
                <Cup
                    key={index}
                    index={index}
                    ballPosition={ballPosition}
                    makeBallVisible={makeBallVisible}
                    handleCupSelection={handleCupSelection}
                    getCupMotion={(index) => getCupMotion(index, cups)}
                />
            ))}
        </div>
    );
};

export default GameBoard;
