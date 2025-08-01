"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { sleep } from "./sleep";

export const sendMessage = async (message: string) => {
    await sleep(5)
    const currentMessages = await db.get<string[]>("messages")
    let newMessages = [];
    if (!currentMessages) newMessages = [message]
    else newMessages = [...currentMessages, message]

    await db.set('messages', newMessages)
    revalidatePath('/')
}