import { motion } from "framer-motion";
interface CupProps {
    index: number;
    ballPosition: number | null;
    makeBallVisible: boolean;
    handleCupSelection: (index: number) => void;
    getCupMotion: (index: number) => { x: string };
}

export default function Cup({ index, ballPosition, makeBallVisible, handleCupSelection, getCupMotion }: CupProps) {
    return (
        <motion.div
            className="w-24 h-24 bg-blue-500 rounded-full absolute transform flex items-center justify-center cursor-pointer"
            animate={{ x: getCupMotion(index).x }}
            transition={{ duration: 0.5 }}
            onClick={() => handleCupSelection(index)}
        >
            {makeBallVisible && ballPosition === index && (
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            )}
        </motion.div>
    );
}
