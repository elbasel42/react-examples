"use server";

import { sleep } from "./sleep";

export const action = async (prevState: number, formData: FormData) => {
    console.log("Calling action")
    await sleep(5)
    console.log("Action Ended")
    return prevState + 1
}