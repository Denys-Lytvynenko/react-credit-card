export const fetchData = async <T>(
    url: string,
    query: string,
    signal: AbortSignal
): Promise<T> => {
    return new Promise<T>(async (resolve, reject) => {
        try {
            const response = await fetch(url + query, {
                headers: {
                    "Accept-Version": "3",
                    "Content-Type": "application/json",
                },
                signal,
            });

            if (!response.ok) {
                reject(response);
            }

            const data = await response.json();

            resolve(data);
        } catch (error) {
            console.error(
                `Error occur on fetching data from "${url}${query}": `,
                { error }
            );
            reject(error);
        }
    });
};
