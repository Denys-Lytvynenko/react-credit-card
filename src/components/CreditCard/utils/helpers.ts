const keyGenerator = (pre: number | string) => {
    return `${pre}_${new Date().getTime()}-${Math.random()}`;
};

export { keyGenerator };
