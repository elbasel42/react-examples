export const sleep = async (seconds: number) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
    return promise

}