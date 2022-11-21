const keyGenerator = (pre: number | string) => {
    return `${pre}_${new Date().getTime()}`;
};

export { keyGenerator };
