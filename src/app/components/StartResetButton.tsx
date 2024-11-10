import React from 'react';

interface StartResetButtonProps {
    isGameStarted: boolean;
    triggerGame: () => void;
}

export default function StartResetButton({ isGameStarted, triggerGame }: StartResetButtonProps) {
    return (
        <button
            onClick={triggerGame}
            className="w-24 mb-8 px-4 py-2 bg-blue-500 text-white rounded"
        >
            {isGameStarted ? "Reset" : "Start"}
        </button>
    );
}
