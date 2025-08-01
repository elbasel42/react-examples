"use server";

import { sleep } from "./sleep";

export const action = async (num: number) => {
    console.log("Calling action")
    await sleep(5)
    console.log("Action Ended")
    return num + 1
}