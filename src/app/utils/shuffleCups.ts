export const shuffleCups = (
    setCups: React.Dispatch<React.SetStateAction<number[]>>,
    setSelectionEnabled: React.Dispatch<React.SetStateAction<boolean>>,
    getRandomCupIndices: (numberOfCups: number) => number[],
    numberOfCups: number
) => {
    let shuffleCount = 0;
    const maxShuffles = 5; // number of times to shuffle the cups so we can increase the difficulty too

    const interval = setInterval(() => {
        if (shuffleCount >= maxShuffles) {
            clearInterval(interval);
            setSelectionEnabled(true);
            return;
        }

       // we are calling getRandomCupIndices to get the random indices of the cups
        // and then we are swapping the cups at those indices
        const [cup1, cup2] = getRandomCupIndices(numberOfCups);
        setCups((prevCups) => {
            const newCups = [...prevCups];
            [newCups[cup1], newCups[cup2]] = [newCups[cup2], newCups[cup1]];
            return newCups;
        });

        shuffleCount++;
    }, 500);
};
