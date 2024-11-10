export const getRandomCupIndices = (numberOfCups:number) => {
    const randomIndices = new Set<number>();
    while (randomIndices.size < 2) {
        randomIndices.add(Math.floor(Math.random() * numberOfCups));
    }
    return Array.from(randomIndices);
};