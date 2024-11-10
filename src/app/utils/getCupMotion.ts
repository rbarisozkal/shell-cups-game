export const getCupMotion = (index: number, cups: number[]) => {
    const positions = Array.from({ length: cups.length }, (_, i) => i).map((cupIndex) => {
        const offset = (cups.length - 1) / 2;
        return { x: `${(cupIndex - offset) * 150}%` };
    });
    return positions[cups[index]] || { x: "0%"};
};
